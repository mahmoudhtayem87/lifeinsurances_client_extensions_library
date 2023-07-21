import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'agent-quotation',
  templateUrl: './agent-quotation.component.html',
  styleUrls: ['./agent-quotation.component.css']
})
export class AgentQuotationComponent  implements OnInit {
  @Input('requestInfo')
  requestInfo : any;
  ngOnInit(): void {
  }
}
