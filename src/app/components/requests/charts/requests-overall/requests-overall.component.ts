import {Component, OnInit} from '@angular/core';
import {autoinsurancequotationrequestsService} from "../../../../services/autoinsurancequotationrequests";

@Component({
  selector: 'app-requests-overall',
  templateUrl: './requests-overall.component.html',
  styleUrls: ['./requests-overall.component.css']
})
export class RequestsOverallComponent implements OnInit {

  public view: [number, number] = [700, 250];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  public single: any[] | any;

  constructor(private requestsSrv: autoinsurancequotationrequestsService) {

  }
  async loadChartData()
  {
    let assignedCount = await this.requestsSrv.getAutoInsuranceQuotationRequestsPage(null,'totalCount',
        null,null,'actions','assigned eq true',0);
    let NotAssignedCount = await this.requestsSrv.getAutoInsuranceQuotationRequestsPage(null,'totalCount',
        null,null,'actions','assigned eq false',0);

    let assigned =  {
      "name": "Assigned",
      // @ts-ignore
      "value": assignedCount["totalCount"]
    };

    let notAssigned =  {
      "name": "Not Assigned",
      // @ts-ignore
      "value": NotAssignedCount["totalCount"]
    };
    this.single = [];
    this.single.push(assigned);
    this.single.push(notAssigned);
  }
  ngOnInit(): void {
    this.loadChartData();
  }
}
