import {Component, OnInit} from '@angular/core';
import {autoinsurancequotationrequestsService} from "../../../../../services/autoinsurancequotationrequests";
import {autoinsurancequotationsService} from "../../../../../services/autoinsurancequotations";

@Component({
  selector: 'quotations-chart-overview',
  templateUrl: './quotations-chart-overview.component.html',
  styleUrls: ['./quotations-chart-overview.component.css']
})
export class QuotationsChartOverviewComponent implements OnInit {

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

  constructor(private requestsSrv: autoinsurancequotationsService) {

  }
  async loadChartData()
  {
    let pendingCount = await this.requestsSrv.getAutoInsuranceQuotationsPage(null,'totalCount',
        null,null,'actions',"customerFeedback eq 'pending'",0);
    let acceptedCount = await this.requestsSrv.getAutoInsuranceQuotationsPage(null,'totalCount',
        null,null,'actions',"customerFeedback eq 'accepted'",0);
    let rejectedCount = await this.requestsSrv.getAutoInsuranceQuotationsPage(null,'totalCount',
        null,null,'actions',"customerFeedback eq 'rejected'",0);

    let pending =  {
      "name": "Pending",
      // @ts-ignore
      "value": pendingCount["totalCount"]
    };
    let accepted =  {
      "name": "Accepted",
      // @ts-ignore
      "value": acceptedCount["totalCount"]
    };
    let rejected =  {
      "name": "Rejected",
      // @ts-ignore
      "value": rejectedCount["totalCount"]
    };
    this.single = [];
    this.single.push(pending);
    this.single.push(accepted);
    this.single.push(rejected);
  }
  ngOnInit(): void {
    this.loadChartData();
  }
}
