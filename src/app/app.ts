import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';
import { Contact } from './contact.interface';
import { ListeContacts } from './liste-contacts/liste-contacts';
import { FormulaireContact } from './formulaire-contact/formulaire-contact';
import { StatsContacts } from './stats-contacts/stats-contacts';


@Component({
  selector: 'app-root',
  imports: [ListeContacts, FormulaireContact, StatsContacts],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    console.log('App initialisée. Contacts :', this.contactService.getAll().length);
  }
  onContactAjoute(contact: Contact): void {
    this.contactService.ajouter(contact);
  }
}
