import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TuiPoint } from '@taiga-ui/core';

@Injectable({
  providedIn: 'root',
})
export class BitcoinService {
  constructor(private http: HttpClient) {}

  getRate(coins: number) {
    const url = `https://blockchain.info/tobtc?currency=USD&value=${coins}`;
    return this.http.get<number>(url).pipe(map((res) => res));
  }

  // getMarketPrice(timespan: string, startdate: string) {
  //   const url = `https://api.blockchain.info/charts/market-price?timespan=${timespan}&start=${startdate}format=json&cors=true`;
  //   return this.http.get<any>(url).pipe(
  //     map(res => res)
  //   );
  // }

  // getMarketPrice(timespan: string, startdate: string): Observable<ReadonlyArray<[string, number]>> {
  //   const url = `https://api.blockchain.info/charts/market-price?timespan=${timespan}&start=${startdate}&format=json&cors=true`;
  //   return this.http.get<any>(url).pipe(
  //     map(response => {
  //       return response.values.map((val: any) => {
  //         return [new Date(val.x * 1000).toISOString(), val.y];
  //       });
  //     })
  //   );
  // }

  // getPriceData() {
  //   const url = 'https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true';
  //   return this.http.get<any>(url).pipe(
  //     map(response => {
  //       return response.values.map((val: any) => {
  //         return [new Date(val.x * 1000).toISOString(), val.y];
  //       }
  //   )
  //   })
  //   );

  // }

  getPriceData() {
    const url =
      'https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true';
    return this.http.get<any>(url);
  }

  getConfirmedTransactions() {
    const url =
      'https://api.blockchain.info/charts/n-transactions?timespan=5months&format=json&cors=true';
    return this.http.get<any>(url).pipe(map((res) => res));
  }

  getExchangeRates() {
    const url = 'https://blockchain.info/ticker';
    return this.http.get<any>(url);
}

}
