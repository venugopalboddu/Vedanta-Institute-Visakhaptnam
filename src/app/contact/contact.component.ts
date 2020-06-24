import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  submitted = false;
  msg: any;
  status1: boolean = false;
  status2: boolean = true;
  constructor(private fb: FormBuilder, private s: ContactService) { 
    window.scrollTo(0, 0);
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
