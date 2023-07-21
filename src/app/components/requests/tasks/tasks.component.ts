import {Component, OnInit} from '@angular/core';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";
import {autoinsurancequotationrequestsService} from "../../../services/autoinsurancequotationrequests";
import {CountriesService} from "../../../services/countries.service";
import {PageEvent} from "@angular/material/paginator";
import {callbacktasksService} from "../../../services/callbacktasks";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  currentPage:number = 0 ;
  pageSize:number = 2;
  totalLength : number = 0;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  constructor(
      private _snackBar: MatSnackBar, private lrSrv: autoinsurancequotationrequestsService,
      private requestsSrv: callbacktasksService,
      private countriesSrv: CountriesService) {
  }

  requests: any = [];
  pageSizeOptions: any = [2,4,8,16];

  async loadRequests() {
    this.requests = [];
    let result = (await this.requestsSrv.getCallBackTasksPage(null, null,
        null, null, null, 'resolved eq false', this.currentPage+1,this.pageSize));
    // @ts-ignore
    this.requests = result["items"];
    // @ts-ignore
    this.totalLength = result["totalCount"];
  }
  async handleUpdate()
  {
    this.requests = [];
    this.currentPage = 0;
    let result = (await this.requestsSrv.getCallBackTasksPage(null, null,
        null, null, null, 'resolved eq false', this.currentPage+1,this.pageSize));
    // @ts-ignore
    this.requests = result["items"];
    // @ts-ignore
    this.totalLength = result["totalCount"];
  }
  ngOnInit(): void {
    this.loadRequests();
  }

  async assignRequest(requestId: any, requestObject: any) {
    try {
      delete requestObject['actions'];
      await this.requestsSrv.getCallBackTasksPage(requestId);
      requestObject["assigned"] = true;
      await this.requestsSrv.getCallBackTasksPage(requestId, requestObject);
      this.showResult('Task has been assigned successfully!');
      this.currentPage = 0;
      this.loadRequests();
    } catch (e) {
      this.showResult('Error while assigning the task!');
    }
  }
  showResult(title:string) {
    this._snackBar.open(title, 'Ok!', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  async handlePageEvent($event: PageEvent) {
    console.log($event);
    this.pageSize = $event.pageSize;
    this.currentPage = $event.pageIndex;
    await this.loadRequests();
  }
}
