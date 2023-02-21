import { Component, OnInit } from '@angular/core';
import { BitcoinService } from 'src/app/services/bitcoin.service.service';

@Component({
  selector: 'statistics-page',
  templateUrl: './statistics-page.component.html',
  styleUrls: ['./statistics-page.component.scss'],
})

export class StatisticsPageComponent implements OnInit {
  marketPriceData: any[] = [];
  confirmedTransactionsData: any[] = [];

  constructor(private bitcoinService: BitcoinService) {}

  ngOnInit() {
    // Fetch market price data
    this.bitcoinService.getMarketPrice().subscribe((data) => {
      this.marketPriceData = data.values.map((item: any) => {
        return [item.x, item.y];
    });
    });

    // Fetch confirmed transactions data
    this.bitcoinService
      .getConfirmedTransactions()
      .subscribe((data) => {
        this.confirmedTransactionsData = data;
      });
  }
}
