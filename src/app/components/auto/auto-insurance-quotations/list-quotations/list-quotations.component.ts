import {Component, Input, OnInit} from '@angular/core';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";
import {CountriesService} from "../../../../services/countries.service";
import {PageEvent} from "@angular/material/paginator";
import {autoinsurancequotationsService} from "../../../../services/autoinsurancequotations";

declare const Liferay:any;
@Component({
  selector: 'app-list-quotations',
  templateUrl: './list-quotations.component.html',
  styleUrls: ['./list-quotations.component.css']
})
export class ListQuotationsComponent  implements OnInit {

  @Input('type')
  type:any;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  currentPage:number = 0 ;
  pageSize:number = 5;
  totalLength : number = 0;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  constructor(
      private _snackBar: MatSnackBar, private lrSrv: autoinsurancequotationsService,
      private requestsSrv: autoinsurancequotationsService,
      private countriesSrv: CountriesService) {
  }

  requests: any = [];
  requestFilter = "";
  pageSizeOptions: any = [5,10,15];
  async loadRequests() {
    /*
    if (this.type === "customer")
      this.requestFilter = `creatorId eq ${Liferay.ThemeDisplay.getUserId()}`;
     */
    this.requests = [];
    let result = (await this.requestsSrv.getAutoInsuranceQuotationsPage(null, null,
        null, null, null, this.requestFilter, this.currentPage+1,this.pageSize));
    // @ts-ignore
    this.requests = result["items"];
    // @ts-ignore
    this.totalLength = result["totalCount"];
    console.log(this.requests);
  }
  ngOnInit(): void {
    this.loadRequests();
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

  async handleAccept(request:any) {
    // @ts-ignore
    let actualRequest = this.requests.filter(req => req['id'] == request['id']);
    await this.requestsSrv.putAutoInsuranceQuotationAccept(request['id']);
    actualRequest[0]['customerFeedback'] = 'accepted'
  }

  async handleReject(request:any) {
    // @ts-ignore
    let actualRequest = this.requests.filter(req => req['id'] == request['id']);
    await this.requestsSrv.putAutoInsuranceQuotationReject(request['id']);
    actualRequest[0]['customerFeedback'] = 'rejected'
  }
}
