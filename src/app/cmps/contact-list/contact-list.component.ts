import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent {
  @Input() contacts!: Contact[] | null;
  @Output() remove = new EventEmitter();

  faPlus = faPlus;

  getLetters() {
    const letters: string[]= [];
    this.contacts?.forEach(contact => {
      const letter = contact.name[0].toUpperCase();
      if (!letters.includes(letter)) letters.push(letter);
    });
    return letters;
  }

  getContactsByLetter(letter: string) {
    return this.contacts?.filter(contact => contact.name[0].toUpperCase() === letter);
  }
}


