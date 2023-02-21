import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent {

  constructor(private router: Router){}

  @Input() contact!: Contact;
  @Output() remove = new EventEmitter();

  faPenToSquare = faPenToSquare;
  faXmark = faXmark ;

  onRemoveContact(ev: MouseEvent) {
    ev.stopPropagation();
    console.log("click")
    this.remove.emit(this.contact._id);
  }

  onEditContact(ev: MouseEvent) {
    ev.stopPropagation();
    this.router.navigate(['contact/edit', this.contact._id]);
  }
}
