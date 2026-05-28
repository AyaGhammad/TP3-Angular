import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contact } from '../contact.interface';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-stats-contacts',
  imports: [CommonModule],
  templateUrl: './stats-contacts.html',
  styleUrl: './stats-contacts.css',
})
export class StatsContacts implements OnInit {
  totContacts: number = 0;
  totActifs : number = 0;
  scMoyen : number = 0 ;

  constructor(private contactService : ContactService){}
  
  get allContacts(): Contact[] {
    return this.contactService.getAll();
  }

  get tauxActivities(): number {
    if (this.allContacts.length === 0) return 0;
    return Math.round((this.totActifs / this.allContacts.length) * 100);
  }
  
  get scoreMoyen(): number {
    if (this.allContacts.length === 0) return 0;
    const total = this.allContacts.reduce((sum, c) => sum += c.score, 0);
    return Math.round(total / this.allContacts.length);
  }

  get couleurBarActivity(): string {
    if (this.tauxActivities >= 70) return '#4CAF50';
    if (this.tauxActivities >= 40) return '#FF9800';
    return '#F44336';
  }
  ngOnInit(): void {
    this.totContacts = this.contactService.getAll().length;
    this.totActifs = this.contactService.getActifs().length;
    this.scMoyen = this.contactService.getScoreMoyen();
  }
}
