import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';


@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  contacts$!: Observable<Contact[]>;
  selectedContactId: string = '';


  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.loadContacts();
    this.contacts$ = this.contactService.contacts$;
  }

  onRemoveContact(contactId: string) {
    this.contactService.deleteContact(contactId);
  }

}
