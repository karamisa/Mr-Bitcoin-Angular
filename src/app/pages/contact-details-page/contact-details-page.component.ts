import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details-page.component.html',
  styleUrls: ['./contact-details-page.component.scss'],
})
export class ContactDetailsPageComponent {
  constructor(
    private contactService: ContactService,
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  contact!: Contact | undefined;
  user = this.userService.getUser();
  subscription!: Subscription;
  faArrowLeftLong = faArrowLeftLong;
  faPenToSquare = faPenToSquare;


  async ngOnInit() {
    this.subscription = this.route.data.subscribe(({ contact }) => {
      this.contact = contact;
    });
  }

  onTransferCoins(amount: number) {
    this.userService.addMove(this.contact!, amount);
  }

  get contactMoves() {
    return this.user.moves.filter((move) => move.toId === this.contact?._id);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  
}
