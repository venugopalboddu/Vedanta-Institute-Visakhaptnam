import { Component, OnInit, OnDestroy, HostListener, ViewChild, ElementRef } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { from, of, timer } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

interface Slide {
  image: string;
  alt: string;
}

type EventState = 'upcoming' | 'live' | 'closed';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  // ---------------------------------------------------------------
  // EVENT SETTINGS  (edit only this block when the event changes)
  // Dates use IST (+05:30) so the countdown is correct for every visitor.
  // ---------------------------------------------------------------
  event = {
    title: 'Bhagavad Gita Chapter 12',
    subtitle: 'Discourses in English by Sushilaji',
    speakerNote: 'Disciple of Swami Parthasarathy',
    dateLabel: '4th to 7th February 2027',   // shown on the page
    timeLabel: '6:30 PM to 7:45 PM',        // shown on the page
    venue: "VMRDA Children's Arena",
    venueLine1: 'Near HP Petrol Pump, Siripuram',
    venueLine2: 'Visakhapatnam',
    mapUrl: 'https://maps.app.goo.gl/roWqJXqrV9o7NSJ89',
    poster: 'assets/img/vizag_ee.png',
    banner: 'assets/sites/default/files/event_2027.png',   // image shown at the top of the registration popup
    start: new Date('2027-02-04T18:30:00+05:30').getTime(),  // countdown target
    end: new Date('2027-02-08T19:45:00+05:30').getTime()     // after this: "Event closed"
  };


  // ---------------------------------------------------------------
  // REGISTRATION FORM (sends answers straight to your Google Form)
  // Fill the four entry IDs below. How to find them (2 minutes):
  //   1. Open your form -> top-right "⋮" menu -> "Get pre-filled link"
  //   2. Type any text in every question -> "Get link" -> paste the link in a text editor
  //   3. The link contains  entry.1234567890=...  for each question -> copy those ids here
  // (Already filled in for your form.)
  // ---------------------------------------------------------------
  registration = {
    actionUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSedAL9m936UaSjLM4hozkhIeEMrtlAS38DK--GabiPbZ1CS6Q/formResponse',
    entries: {
      name: 'entry.2092238618',      // question: Name
      email: 'entry.1556369182',     // question: Email
      phone: 'entry.320520857',      // question: Phone
      address: 'entry.1766412940'    // question: Address
    }
  };

  // ---------------------------------------------------------------
  // HERO SLIDESHOW
  // ---------------------------------------------------------------
  slides: Slide[] = [
    { image: 'assets/sites/default/files/event_2027.png', alt: 'Sushilaji' }, // Event 2027
    { image: 'assets/img/ved-swami.png', alt: 'Swami Parthasarathy' },
    { image: 'assets/sites/default/files/s1.png', alt: 'Vedanta Institute Visakhapatnam' },
    { image: 'assets/sites/default/files/s3.png', alt: 'Vedanta - Knowledge and End' }
  ];
  current = 0;
  paused = false;
  readonly slideInterval = 6000;
  private slideTimer: any;
  private touchStartX = 0;

  // ---------------------------------------------------------------
  // COUNTDOWN
  // ---------------------------------------------------------------
  days = '00';
  hours = '00';
  minutes = '00';
  seconds = '00';
  state: EventState = 'upcoming';
  private countdownTimer: any;

  // ---------------------------------------------------------------
  // REGISTRATION DIALOG (Google Form) + SUCCESS TOAST
  // ---------------------------------------------------------------
  showRegistrationDialog = false;
  showEventDialog = false;
  showToast = false;       // success toast

  regForm: FormGroup;
  submitted = false;       // user pressed Submit at least once
  submitting = false;      // request in flight
  submitError = '';        // message shown above the Submit button
  private lastFocused: HTMLElement | null = null;

  @ViewChild('closeBtn') closeBtn?: ElementRef<HTMLButtonElement>;

  constructor(private fb: FormBuilder) {
    window.scrollTo(0, 0);

    this.regForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, HomeComponent.emailValidator], [this.emailDomainValidator]],
      phone: ['', [Validators.required, HomeComponent.phoneValidator]],
      address: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  // ----------------------------- validation --------------------------
  /**
   * Email rules (all must pass):
   *  1. looks like name@domain and the domain ends in .com or .org
   *  2. the domain is not a made-up placeholder such as xyz.com, test.com, example.com ...
   *  3. the domain really exists and can receive mail (checked live, see emailDomainValidator)
   */
  private static readonly EMAIL_RE =
    /^[a-z0-9]+(?:[._%+\-][a-z0-9]+)*@(?:[a-z0-9](?:[a-z0-9\-]{0,61}[a-z0-9])?\.)+(?:com|org)$/;

  /** Well-known mail providers: accepted without a live check. */
  private static readonly TRUSTED_DOMAINS = [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'live.com', 'icloud.com', 'email.com'
  ];

  /** Sample / dummy domains people type to get past a form. Add more here if you see them. */
  private static readonly FAKE_DOMAINS = [
    'xyz.com', 'xyz.org', 'abc.com', 'abc.org', 'abcd.com', 'abcde.com', 'test.com', 'test.org', 'demo.com', 'demo.org',
    'sample.com', 'sample.org', 'example.com', 'example.org', 'domain.com', 'domain.org', 'mydomain.com',
    'yourdomain.com', 'yourcompany.com', 'company.com', 'companyname.com', 'anycompany.com', 'anycompanyname.com',
    'asdf.com', 'qwerty.com', 'fake.com', 'dummy.com', 'none.com', 'noemail.com', 'nomail.com', 'mail.org'
  ];

  private static emailValidator(c: AbstractControl): ValidationErrors | null {
    const v = (c.value || '').trim().toLowerCase();
    if (!v) { return null; }   // "required" reports empty values
    if (!HomeComponent.EMAIL_RE.test(v)) { return { email: true }; }
    const domain = v.split('@')[1];
    if (HomeComponent.FAKE_DOMAINS.some(f => domain === f || domain.endsWith('.' + f))) {
      return { placeholder: true };
    }
    return null;
  }

  /** Remember answers so the same domain is only looked up once. */
  private mailDomainCache = new Map<string, boolean>();

  /** Async check: does the email domain exist and have a mail server (MX record)? */
  private emailDomainValidator: AsyncValidatorFn = (c: AbstractControl) => {
    const v = (c.value || '').trim().toLowerCase();
    const domain = v.split('@')[1];
    if (!domain || HomeComponent.TRUSTED_DOMAINS.includes(domain)) { return of(null); }

    const cached = this.mailDomainCache.get(domain);
    if (cached !== undefined) { return of(cached ? null : { domain: true }); }

    // timer = wait until the user pauses typing; a newer value cancels this lookup
    return timer(500).pipe(
      switchMap(() => from(this.hasMailServer(domain))),
      map(ok => {
        this.mailDomainCache.set(domain, ok);
        return ok ? null : { domain: true };
      })
    );
  };

  /**
   * Asks a public DNS-over-HTTPS service for the domain's MX records.
   * Only the domain (never the part before @) is sent. If the lookup itself fails
   * (offline, blocked, timeout) we let the email through rather than block a real person.
   */
  private async hasMailServer(domain: string): Promise<boolean> {
    try {
      const ctl = new AbortController();
      const stop = setTimeout(() => ctl.abort(), 5000);
      const res = await fetch(
        'https://cloudflare-dns.com/dns-query?type=MX&name=' + encodeURIComponent(domain),
        { headers: { accept: 'application/dns-json' }, signal: ctl.signal }
      );
      clearTimeout(stop);
      if (!res.ok) { return true; }
      const data = await res.json();
      if (data.Status === 3) { return false; }          // NXDOMAIN: domain does not exist
      if (data.Status !== 0) { return true; }           // temporary DNS problem: do not block
      return Array.isArray(data.Answer) && data.Answer.some((a: any) => a.type === 15);
    } catch {
      return true;
    }
  }

  /**
   * Indian mobile rule: digits only, exactly 10 of them, first digit 6, 7, 8 or 9.
   *   rejected: starts with 0-5, 9 digits, 11 digits, letters / symbols
   */
  private static phoneValidator(c: AbstractControl): ValidationErrors | null {
    const v = (c.value || '').toString();
    if (!v) { return null; }
    const errors: ValidationErrors = {};
    if (/\D/.test(v)) { errors['digits'] = true; }
    if (/^[0-5]/.test(v)) { errors['startDigit'] = true; }
    if (v.length !== 10) { errors['length'] = true; }
    return Object.keys(errors).length ? errors : null;
  }

  /** Show a field's error once it has been touched or Submit was pressed. */
  showError(name: string): boolean {
    const c = this.regForm.controls[name];
    if (!c.invalid) { return false; }
    // phone: warn immediately if the first digit is not 6-9
    if (name === 'phone' && c.dirty && c.errors?.['startDigit']) { return true; }
    return c.touched || this.submitted;
  }

  /** Phone box accepts digits only (max 10) - letters and symbols are removed as you type. */
  onPhoneInput(e: Event) {
    const el = e.target as HTMLInputElement;
    const digits = el.value.replace(/\D/g, '').slice(0, 10);
    if (digits !== el.value) {
      el.value = digits;
      this.regForm.controls['phone'].setValue(digits);
    }
  }

  /** Pasting "+91 99481 50911" or "099481 50911" is cleaned down to the 10-digit number. */
  onPhonePaste(e: ClipboardEvent) {
    e.preventDefault();
    let digits = (e.clipboardData?.getData('text') || '').replace(/\D/g, '');
    if (digits.length === 12 && digits.startsWith('91')) { digits = digits.slice(2); }
    else if (digits.length === 11 && digits.startsWith('0')) { digits = digits.slice(1); }
    const value = digits.slice(0, 10);
    (e.target as HTMLInputElement).value = value;
    this.regForm.controls['phone'].setValue(value);
    this.regForm.controls['phone'].markAsDirty();
  }

  /** True once real entry ids are filled in. */
  get isConfigured(): boolean {
    return Object.values(this.registration.entries).every(id => /^entry\.\d{5,}$/.test(id));
  }

  ngOnInit() {
    this.updateCountdown();
    this.countdownTimer = setInterval(() => this.updateCountdown(), 1000);
    this.startSlides();
  }

  ngOnDestroy() {
    clearInterval(this.countdownTimer);
    clearInterval(this.slideTimer);
    this.unlockScroll();
  }

  // ----------------------------- countdown ---------------------------
  private updateCountdown() {
    const now = Date.now();
    const distance = this.event.start - now;

    if (now > this.event.end) {
      this.state = 'closed';
      this.setTime(0);
      clearInterval(this.countdownTimer);
      return;
    }
    if (distance <= 0) {
      this.state = 'live';
      this.setTime(0);
      return;
    }
    this.state = 'upcoming';
    this.setTime(distance);
  }

  private setTime(distance: number) {
    const d = Math.floor(distance / 86400000);
    const h = Math.floor((distance % 86400000) / 3600000);
    const m = Math.floor((distance % 3600000) / 60000);
    const s = Math.floor((distance % 60000) / 1000);
    this.days = this.pad(d);
    this.hours = this.pad(h);
    this.minutes = this.pad(m);
    this.seconds = this.pad(s);
  }

  private pad(n: number): string {
    return n < 10 ? '0' + n : '' + n;
  }

  // ----------------------------- slideshow ---------------------------
  private startSlides() {
    clearInterval(this.slideTimer);
    this.slideTimer = setInterval(() => {
      // do not rotate slides behind an open dialog
      if (!this.paused && !this.showRegistrationDialog) {
        this.next(false);
      }
    }, this.slideInterval);
  }

  next(manual = true) {
    this.current = (this.current + 1) % this.slides.length;
    if (manual) { this.startSlides(); }
  }

  prev() {
    this.current = (this.current - 1 + this.slides.length) % this.slides.length;
    this.startSlides();
  }

  goTo(i: number) {
    this.current = i;
    this.startSlides();
  }

  onTouchStart(e: TouchEvent) {
    this.touchStartX = e.changedTouches[0].clientX;
  }

  onTouchEnd(e: TouchEvent) {
    const diff = e.changedTouches[0].clientX - this.touchStartX;
    if (Math.abs(diff) > 50) {
      diff < 0 ? this.next() : this.prev();
    }
  }

  // ----------------------------- registration dialog -----------------
  openRegistrationDialog() {
    this.lastFocused = document.activeElement as HTMLElement;
    this.showToast = false;
    this.regForm.reset();
    this.submitted = false;
    this.submitError = '';
    this.submitting = false;
    this.showRegistrationDialog = true;
    this.lockScroll();
    setTimeout(() => this.closeBtn?.nativeElement.focus(), 60);
  }

  closeRegistrationDialog() {
    this.showRegistrationDialog = false;
    this.unlockScroll();
    this.lastFocused?.focus?.();
  }

  /** Send the answers to your Google Form (they appear under Responses as usual). */
  async submitRegistration() {
    this.submitted = true;
    this.submitError = '';
    this.regForm.markAllAsTouched();

    if (this.regForm.pending) { return; }   // email domain still being checked

    if (this.regForm.invalid) {
      // jump to the first field that needs attention
      const first = document.querySelector('.vi-reg .has-error input, .vi-reg .has-error textarea') as HTMLElement | null;
      first?.focus();
      return;
    }

    if (!this.isConfigured) {
      console.error('Registration is not connected yet: fill the entry.XXXX ids in HomeComponent.registration.entries');
      this.submitError = 'Registration is not connected to the Google Form yet. Please contact the website administrator.';
      return;
    }

    const v = this.regForm.value;
    const e = this.registration.entries;
    const body = new URLSearchParams();
    body.set(e.name, (v.name || '').trim());
    body.set(e.email, (v.email || '').trim().toLowerCase());
    body.set(e.phone, (v.phone || '').trim());
    body.set(e.address, (v.address || '').trim());

    this.submitting = true;
    try {
      // Google answers without CORS headers, so the response is opaque: success = the request was delivered.
      await fetch(this.registration.actionUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString()
      });
      this.submitting = false;
      this.onRegistrationSubmitted();
    } catch {
      this.submitting = false;
      this.submitError = 'Could not send your registration. Please check your internet connection and try again.';
    }
  }

  private onRegistrationSubmitted() {
    this.closeRegistrationDialog();
    this.showToast = true;
  }

  hideToast() {
    this.showToast = false;
  }

  /** Close only when the backdrop itself is pressed, not when a drag ends on it. */
  onBackdropDown(e: MouseEvent) {
    if (e.target === e.currentTarget) {
      this.closeRegistrationDialog();
    }
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    if (this.showRegistrationDialog) { this.closeRegistrationDialog(); }
    else if (this.showToast) { this.hideToast(); }
  }

  private lockScroll() { document.body.style.overflow = 'hidden'; }
  private unlockScroll() { document.body.style.overflow = ''; }

  // ----------------------------- event dialog (unchanged) ------------
  openEventDialog() {
    this.showEventDialog = true;
  }

  closeEventDialog() {
    this.showEventDialog = false;
  }
}
