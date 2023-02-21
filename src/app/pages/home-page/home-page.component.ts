import { Component } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { BitcoinService } from 'src/app/services/bitcoin.service.service';
import { UserService } from 'src/app/services/user.service';
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent {
  user!: User;
  bitcoinRate!: number;
  faBitcoin = faBitcoin;
  faMoneyBill = faDollarSign;

  constructor(
    private userService: UserService,
    private bitcoinService: BitcoinService
  ) {}

  async ngOnInit() {
    this.user = this.userService.getUser();
    this.bitcoinRate = await lastValueFrom(this.bitcoinService.getRate(1));
  }

  get latestMoves(){
    return this.user.moves.slice(0, 3);
  }

  onAddFunds() {
    const amount = prompt('How much BTC would you like to add?')
    if (!amount || +amount <= 0) return;
    this.userService.addFunds(+amount);
 
  }


}
