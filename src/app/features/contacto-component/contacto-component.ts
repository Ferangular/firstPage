import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { TranslocoDirective } from '@jsverse/transloco';

@Component({
  selector: 'app-contacto-component',
  imports: [ReactiveFormsModule, TranslocoDirective],
  templateUrl: './contacto-component.html',
  styleUrl: './contacto-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactoComponent {
  private fb = inject(FormBuilder);

  submitted = signal(false);

  contactoForm = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    asunto: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    telefono: [
      '',
      [
        Validators.required,
        Validators.pattern(/^[0-9+\s()-]{7,20}$/),
      ],
    ],
    mensaje: ['', [Validators.required, Validators.minLength(10)]],
    pais: ['', [Validators.required]],
    tipo: ['', [Validators.required]],
  });

  formValid = computed(() => this.contactoForm.valid);

  onSubmit(): void {
    this.submitted.set(true);
    this.contactoForm.markAllAsTouched();

    if (this.contactoForm.invalid) return;

    console.log('Formulario enviado', this.contactoForm.getRawValue());

    this.contactoForm.reset({
      nombre: '',
      asunto: '',
      email: '',
      telefono: '',
      mensaje: '',
      pais: '',
      tipo: '',
    });

    this.submitted.set(false);
  }

  hasError(controlName: keyof typeof this.contactoForm.controls): boolean {
    const control = this.contactoForm.controls[controlName];
    return !!control && control.invalid && (control.touched || this.submitted());
  }

  isValid(controlName: keyof typeof this.contactoForm.controls): boolean {
    const control = this.contactoForm.controls[controlName];
    return !!control && control.valid && (control.touched || this.submitted());
  }

  getError(controlName: keyof typeof this.contactoForm.controls): string {
    const control = this.contactoForm.controls[controlName];

    if (!control || !control.errors) return '';

    if (control.errors['required']) return 'required';
    if (control.errors['email']) return 'email';
    if (control.errors['minlength']) return 'minlength';
    if (control.errors['pattern']) return 'pattern';

    return 'invalid';
  }
}
