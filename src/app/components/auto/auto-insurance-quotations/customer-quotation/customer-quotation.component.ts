import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'customer-quotation',
  templateUrl: './customer-quotation.component.html',
  styleUrls: ['./customer-quotation.component.css']
})
export class CustomerQuotationComponent implements OnInit {

  @Input('requestInfo')
  requestInfo : any;
  @Output() Accept: EventEmitter<void> = new EventEmitter<void>();
  @Output() Reject: EventEmitter<void> = new EventEmitter<void>();

  ngOnInit(): void {
  }

  async accept() {
    await this.Accept.emit(this.requestInfo);
    console.log('done!')
  }

  reject() {
    this.Reject.emit(this.requestInfo);
  }
}
