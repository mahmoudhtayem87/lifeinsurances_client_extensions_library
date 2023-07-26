import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

// @ts-ignore
@Component({
  selector: 'general-expansion-panel-dynamic',
  templateUrl: './expansion-panel-dynamic.component.html',
  styleUrls: ['./expansion-panel-dynamic.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ExpansionPanelDynamicComponent  implements OnInit{

  @Input('panelsCount')
  public panelsCount : any ;

  public panels : any;

  ngOnInit(): void {
    this.panelsCount = parseInt(this.panelsCount);
    this.panels = Array(this.panelsCount).fill(0).map((x,i)=>i);
  }



}
