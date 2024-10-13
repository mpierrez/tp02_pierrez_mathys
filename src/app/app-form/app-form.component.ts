import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RequiredComponent } from '../required/required.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, RequiredComponent, CommonModule],
  templateUrl: './app-form.component.html',
  styleUrl: './app-form.component.css'
})
export class AppFormComponent {
  @Input() firstname: string;
  @Input() lastname: string;
  @Input() civility: string = "Monsieur";
  @Input() address: string;
  @Input() zipCode: string;
  @Input() city: string;
  @Input() country: string = "FR";
  @Input() phone: string;
  @Input() email: string;
  @Input() login: string;
  @Input() password: string;
  @Input() confirmPassword: string;

  lastNameAlreadyFocused: boolean = false;
  firstNameAlreadyFocused: boolean = false;
  addressAlreadyFocused: boolean = false;
  zipCodeAlreadyFocused: boolean = false;
  cityAlreadyFocused: boolean = false;
  emailAlreadyFocused: boolean = false;
  phoneAlreadyFocused: boolean = false;
  loginAlreadyFocused: boolean = false;
  passwordAlreadyFocused: boolean = false;
  confirmPasswordAlreadyFocused: boolean = false;
  formSubmitted: boolean = false;

  @Output() formSubmit: EventEmitter<any> = new EventEmitter<any>();

  validateLastName() {
    if(!this.lastNameAlreadyFocused) return true;
    const regexNomPrenom = /^[a-zA-Zà-ÿÀ-Ÿ\s-]+$/;
    return (this.lastname !== undefined && regexNomPrenom.test(this.lastname));
  }

  validateFirstName() {
    if(!this.firstNameAlreadyFocused) return true;
    const regexNomPrenom = /^[a-zA-Zà-ÿÀ-Ÿ\s-]+$/;
    return (this.firstname !== undefined && regexNomPrenom.test(this.firstname));
  }

  validateAddress() {
    if(!this.addressAlreadyFocused) return true;
    return (this.address !== undefined && this.address !== '');
  }

  validateZipCode() {
    if(!this.zipCodeAlreadyFocused) return true;
    const regexzipCode = /^\d{5}$/;
    return (this.zipCode !== undefined && regexzipCode.test(this.zipCode));
  }

  validateCity() {
    if(!this.cityAlreadyFocused) return true;
    return this.city !== undefined && this.city !== '';
  }

  validateEmail() {
    if(!this.emailAlreadyFocused) return true;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return (this.email !== undefined && regexEmail.test(this.email));
  }

  validatePhone() {
    if(!this.phoneAlreadyFocused) return true;
    const regexPhone = /^\d+$/;
    return (this.phone !== undefined && regexPhone.test(this.phone));
  }

  validateLogin() {
    if(!this.loginAlreadyFocused) return true;
    return this.login !== undefined && this.login !== '';
  }

  validatePassword() {
    if(!this.passwordAlreadyFocused) return true;
    return this.password !== undefined && this.password !== '';
  }

  validateConfirmPassword() {
    if(!this.confirmPasswordAlreadyFocused) return true;
    return this.confirmPassword !== undefined && this.password === this.confirmPassword;
  }

  submitForm() {

    this.formSubmitted = false;

    // On fait ça pour que les champs soient tous marqués comme "déjà focus" et donc qu'ils soient tous vérifiés
    this.lastNameAlreadyFocused = true;
    this.firstNameAlreadyFocused = true;
    this.addressAlreadyFocused = true;
    this.zipCodeAlreadyFocused = true;
    this.cityAlreadyFocused = true;
    this.emailAlreadyFocused = true;
    this.phoneAlreadyFocused = true;
    this.loginAlreadyFocused = true;
    this.passwordAlreadyFocused = true;
    this.confirmPasswordAlreadyFocused = true;

    if(!this.validateLastName() || !this.validateFirstName() || !this.validateAddress() || !this.validateZipCode() || !this.validateCity() || !this.validateEmail() || !this.validatePhone() || !this.validateLogin() || !this.validatePassword() || !this.validateConfirmPassword()) {
      alert("Un ou plusieurs champs ne sont pas correctement renseignés !");
      return;
    }

    const formData = {
      firstname: this.firstname,
      lastname: this.lastname,
      civility: this.civility,
      address: this.address,
      zipCode: this.zipCode,
      city: this.city,
      country: this.country,
      phone: this.phone,
      email: this.email,
      login: this.login,
      password: this.password,
    };

    // Reset pour faire un nouvel envoi
    this.lastNameAlreadyFocused = false;
    this.firstNameAlreadyFocused = false;
    this.addressAlreadyFocused = false;
    this.zipCodeAlreadyFocused = false;
    this.cityAlreadyFocused = false;
    this.emailAlreadyFocused = false;
    this.phoneAlreadyFocused = false;
    this.loginAlreadyFocused = false;
    this.passwordAlreadyFocused = false;
    this.confirmPasswordAlreadyFocused = false;

    this.lastname = '';
    this.firstname = '';
    this.civility = 'Monsieur';
    this.address = '';
    this.zipCode = '';
    this.city = '';
    this.country = 'FR';
    this.phone = '';
    this.email = '';
    this.login = '';
    this.password = '';
    this.confirmPassword = '';

    this.formSubmitted = true;
    this.formSubmit.emit(formData);
  }
}