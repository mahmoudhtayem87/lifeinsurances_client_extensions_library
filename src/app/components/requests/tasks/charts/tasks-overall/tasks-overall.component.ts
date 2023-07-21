import {Component, OnInit} from '@angular/core';
import {autoinsurancequotationrequestsService} from "../../../../../services/autoinsurancequotationrequests";
import {callbacktasksService} from "../../../../../services/callbacktasks";

@Component({
  selector: 'app-tasks-overall',
  templateUrl: './tasks-overall.component.html',
  styleUrls: ['./tasks-overall.component.css']
})
export class TasksOverallComponent implements OnInit {

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

  constructor(private tasksSrv: callbacktasksService) {

  }
  async loadChartData()
  {
    let resolvedCount = await this.tasksSrv.getCallBackTasksPage(null,'totalCount',
        null,null,'actions','resolved eq true',0);
    let NotrRsolvedCount = await this.tasksSrv.getCallBackTasksPage(null,'totalCount',
        null,null,'actions','resolved eq false',0);

    let assigned =  {
      "name": "Resolved",
      // @ts-ignore
      "value": resolvedCount["totalCount"]
    };

    let notAssigned =  {
      "name": "Not Resolved",
      // @ts-ignore
      "value": NotrRsolvedCount["totalCount"]
    };
    this.single = [];
    this.single.push(assigned);
    this.single.push(notAssigned);
  }
  ngOnInit(): void {
    this.loadChartData();
  }
}
