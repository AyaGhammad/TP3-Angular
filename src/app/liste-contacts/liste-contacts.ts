import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact.interface';
import { CommonModule } from '@angular/common';
import { Survol } from '../survol.directive';
import { Highlight } from '../highlight.directive';
import { InitialesPipe } from '../initiales.pipe';
import { MentionPipe } from '../mention.pipe';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-liste-contacts',
  imports: [CommonModule,Survol,Highlight,InitialesPipe,MentionPipe],
  templateUrl: './liste-contacts.html',
  styleUrl: './liste-contacts.css',
})
export class ListeContacts implements OnInit{

  constructor(private contactService: ContactService){}

  contacts: Contact[] = [];

  filtreActif: boolean | null = null;

  get contactsFilters(): Contact[] {
    if (this.filtreActif === null) return this.contacts;
    return this.contacts.filter(c => c.actif === this.filtreActif);
  }


  ngOnInit(): void {
    this.contacts = this.contactService.getAll();
  }

  toggleActif(email: string): void {
    this.contactService.toggleActif(email);
    this.contacts = this.contactService.getAll();
  }

  chargerContacts(): void {
    this.contacts = this.contactService.getAll();
  }
}
