import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'transfer-funds',
  templateUrl: './transfer-funds.component.html',
  styleUrls: ['./transfer-funds.component.scss']
})
export class TransferFundsComponent {
  @Input() contact!: Contact;
  @Input() maxCoins!: number;
  @Output() transfer = new EventEmitter();
 


  amountFormControl = new FormControl(0, [
    Validators.required,
  ]);

  onTransferCoins() {
    if (this.amountFormControl.invalid) return;
    this.transfer.emit(this.amountFormControl.value);
    this.amountFormControl.reset(0);
  }
}
