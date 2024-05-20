import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Password } from 'primeng/password';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  form2: FormGroup;

  constructor(private fb: FormBuilder, private messageService: MessageService) {
    this.form2 = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  validarForm(): void {
    let formularioValido = true;

    if (this.form2.get('name')?.invalid) {
      this.messageService.add({ severity: 'error', summary: 'Fatal Error', detail: 'Campo "name" esta mal', life: 10000 });
      formularioValido = false;
    }
    
    if(this.form2.get('email')?.invalid){
      this.messageService.add({ severity: 'error', summary: 'Fatal Error', detail: 'Campo "email" esta mal', life: 10000 });
      formularioValido = false;
    }
    
    if(this.form2.get('message')?.invalid){
      this.messageService.add({ severity: 'error', summary: 'Fatal Error', detail: 'Campo "message" esta mal', life: 10000 });
      formularioValido = false;
    }

    if(formularioValido){
      this.messageService.add({ severity: 'success', summary: 'okydoki', detail: 'Form correct', life: 10000 });
      this.form2.reset();
    } else {
      this.messageService.add({ severity: 'warn', summary: 'ponte pilas', detail: 'we need more camps', life: 10000 });
      this.form2.markAllAsTouched();
    }
  }
  private isControlInvalid(controlName: string): boolean {
    const control = this.form2.get(controlName);
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }
  
  getControlClasses(controlName: string): string {
    return this.isControlInvalid(controlName) ? 'ng-dirty ng-invalid' : '';
  }
  get nameInvalid(): boolean {
    return this.isControlInvalid('name');
  }
  get emailInvalid(): boolean {
    return this.isControlInvalid('email');
  }
  get messageInvalid(): boolean {
    return this.isControlInvalid('message');
  }
}
