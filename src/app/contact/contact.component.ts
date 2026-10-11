import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  mapUrl: SafeResourceUrl;
  submitted = false;
  msg: any;
  status1: boolean = false;
  status2: boolean = true;
  constructor(private fb: FormBuilder, private s: ContactService, sanitizer: DomSanitizer) {
    window.scrollTo(0, 0);
    this.mapUrl = sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15193.500790295384!2d83.3471948!3d17.821038!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x77bc330a0d0d3dfd!2sVedanta+Institute+Visakhapatnam!5e0!3m2!1sen!2sin!4v1539530864486'
    );
  }
  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }
  get cf() { return this.contactForm.controls; }

  onSubmit() {
    this.submitted = true;
    let contactDetails = {
      name: this.contactForm.controls['name'].value,
      email: this.contactForm.controls['email'].value,
      message: this.contactForm.controls['message'].value
    }
    if (this.contactForm.invalid) {
      return;
    } else {
    this.s.postData(contactDetails).subscribe((res) => {
      console.log(res);
    });
    this.s.postData1(contactDetails).subscribe((res) => {
      console.log(res);
    });
    this.msg = "Your message has been sent successfully. We will get back to you soon!";
    this.contactForm.reset();
    this.submitted = false;
    this.status1 = true;
    }
  }
  myFunction() {
    this.status2 = false;
  }
}
