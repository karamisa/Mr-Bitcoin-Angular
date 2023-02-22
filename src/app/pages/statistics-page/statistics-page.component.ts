import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject } from '@angular/core';
import { TuiPoint } from '@taiga-ui/core';
import { of } from 'rxjs';
import { BitcoinService } from 'src/app/services/bitcoin.service.service';

@Component({
  selector: 'statistics-page',
  templateUrl: './statistics-page.component.html',
  styleUrls: ['./statistics-page.component.scss'],
})
export class StatisticsPageComponent {
  value: TuiPoint[] = [];
  exchangeRates: any;
  index = 0;
  startX = 0;
  endX = 0;
  startY = 0;
  endY = 0;
  xLabels: string[] = [];

  constructor(private btcApiService: BitcoinService
    ) {}

  ngOnInit() {
    this.btcApiService.getPriceData().subscribe((res) => {
      let min = Infinity;
      let max = 0;
      this.value = res.values.map((val: any) => {
        if (val.y < min) min = val.y;
        if (val.y > max) max = val.y;
        return [val.x, val.y];
      });
      this.startX = this.value[0][0];
      this.endX = this.value[this.value.length - 1][0];
      this.startY = min;
      this.endY = max;
      this.xLabels = this.value.map((val, idx) => {
        return new Date(val[0] * 1000).toLocaleString(undefined, { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' });
      }).filter((val, idx) => idx % 10 === 0)
      console.log(this.xLabels);
    });
    this.btcApiService.getExchangeRates().subscribe((res) => {
      this.exchangeRates = Object.entries(res);
    });
  }
}
