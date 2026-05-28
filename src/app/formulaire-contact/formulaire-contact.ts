import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Contact } from '../contact.interface';

@Component({
  selector: 'app-formulaire-contact',
  imports: [FormsModule, CommonModule],
  templateUrl: './formulaire-contact.html',
  styleUrls: ['./formulaire-contact.css']
})
export class FormulaireContact {
  nom: string = '';
  email: string = '';
  actif: boolean = false;
  score: number = 0;
  role: 'admin' | 'user' | 'guest' = 'guest';


  contactSauvegarde = output<Contact>();

  sauvegarder(): void {
    if (this.nom.trim() && this.email.trim() && this.role && this.score > 0) {
      this.contactSauvegarde.emit({
        nom: this.nom,
        email: this.email,
        actif: this.actif,
        score: this.score,
        role: this.role
      });
      // Réinitialisation du formulaire
      this.nom = '';
      this.email = '';
      this.actif = false;
      this.score = 0;
      this.role = 'guest';
    } else {
      alert('Veuillez remplir le nom et l\'email.');
    }
  }
}