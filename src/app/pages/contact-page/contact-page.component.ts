import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent implements OnInit {
  contacts$!: Observable<Contact[]>;
  selectedContactId: string = '';
  faBars = faChevronRight;

  constructor(
    private contactService: ContactService,
    private elRef: ElementRef
  ) {}

  ngOnInit() {
    this.contactService.loadContacts();
    this.contacts$ = this.contactService.contacts$;
  }

  toggleMenu() {
    const el = this.elRef.nativeElement.querySelector('.contact-list-container');
    el.classList.toggle('open');
  }

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    const el = this.elRef.nativeElement.querySelector('.contact-list-container');
    const el2 = this.elRef.nativeElement.querySelector('.toggle');
    if (!el2.contains(event.target)) {
      el.classList.remove('open');
    }
  }



  onRemoveContact(contactId: string) {
    this.contactService.deleteContact(contactId);
  }
}
