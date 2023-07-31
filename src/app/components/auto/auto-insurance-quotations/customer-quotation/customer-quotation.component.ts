import {Component, EventEmitter, Input, OnInit, Output,ChangeDetectorRef} from '@angular/core';

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

  constructor(private cdr:ChangeDetectorRef) {
  }
  ngOnInit(): void {
    this.cdr.detectChanges();
  }

  async accept() {
    await this.Accept.emit(this.requestInfo);
    console.log('done!')
  }

  reject() {
    this.Reject.emit(this.requestInfo);
  }
}
