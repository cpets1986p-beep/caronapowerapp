import { Component,ViewChild,ElementRef  } from '@angular/core';
import {  CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
declare const bootstrap: any;


@Component({
  selector: 'app-contact',
  imports: [ CommonModule,FormsModule
],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
   @ViewChild('toastRef', { static: false }) toastRef!: ElementRef;

 sendEmail(form: NgForm) {
    if (form.invalid) return;

    const formData = form.value;

    const templateParams = {
      user_name: formData.fname + formData.lname ,
      user_email: formData.email,
      message: formData.subject
    };
    console.log(templateParams);
    emailjs.send(
      'service_tdbv10d',
      'template_7ht19v9',
      templateParams,
      { publicKey: 'La044h23layKjOObp' }
    ).then(
      () => {
       const toast = new bootstrap.Toast(this.toastRef.nativeElement);
      toast.show();
      form.reset();

      },
      (error) => {
        alert('Failed to send message: ' + error.text);
      }
    );
  }


}
