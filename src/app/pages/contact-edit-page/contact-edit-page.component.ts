import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-edit-page',
  templateUrl: './contact-edit-page.component.html',
  styleUrls: ['./contact-edit-page.component.scss']
})
export class ContactEditPageComponent implements OnInit {

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  contact!: Contact;
  subscription!: Subscription;
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);


  ngOnInit(): void {
    this.subscription = this.route.data.subscribe(({ contact }) => {
      this.contact = {...contact} || this.contactService.getEmptyContact() as Contact;
    });
  }

  async onAddContact() {
    try {
      this.contactService.saveContact(this.contact);
      if (this.contact._id) {
        this.router.navigate(['contact', this.contact._id]);
      } else {
      this.router.navigate(['contact']);
      }
    } catch (err) {
      console.log('Error saving contact', err);
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}


