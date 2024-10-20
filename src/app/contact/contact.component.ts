import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { Observable, map, shareReplay } from 'rxjs';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';


export class MyErrorStateMatcher implements MyErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  exampleForm!: FormGroup;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  isHandset$: Observable<boolean> = this.BreakpointObserver.observe([
    Breakpoints.Handset,
  ]).pipe(
    map((result) => result.matches),
    shareReplay()
  );

  constructor(
    private BreakpointObserver: BreakpointObserver,
    private fb: FormBuilder
  ) {
    this.exampleForm = this.fb.group({
      name: [''],
      email: ['', [Validators.required, Validators.email]],
      subject: [''],
      message: [''],
    });
  }

  sendEmail() {
 if(this.exampleForm){
  const formValues = this.exampleForm.value;
  const name = formValues.name;
  const subject = formValues.subject;
  const email = formValues.email;
  const message = formValues.message;

  const templateParams ={
    name,email, message, subject
  };

  emailjs.init({publicKey: 'TkJAXRt53dej08r9h'});
 
  emailjs.send('service_soixqtm', 'template_hpe64kp', templateParams).then(
    (response) => {
      console.log('SUCCESS!', response.status, response.text);
    },
    (error) => {
      console.log('FAILED...', error);
    },
  );
 }
  }
  
  ngOnInit(): void {}
  matcher = new MyErrorStateMatcher();
}
