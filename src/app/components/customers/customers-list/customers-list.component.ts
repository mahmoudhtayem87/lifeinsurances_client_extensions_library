import {Component, OnInit} from '@angular/core';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";
import {autoinsurancequotationrequestsService} from "../../../services/autoinsurancequotationrequests";
import {CountriesService} from "../../../services/countries.service";
import {PageEvent} from "@angular/material/paginator";
import {customersService} from "../../../services/customers";
declare const Liferay : any;
//customersService
@Component({
  selector: 'customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  currentPage:number = 0 ;
  pageSize:number = 5;
  totalLength : number = 0;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  constructor(
      private _snackBar: MatSnackBar, private lrSrv: customersService,
      private requestsSrv: customersService,
      private countriesSrv: CountriesService) {
  }

  customers: any = [];
  pageSizeOptions: any = [5,10,15];

  async loadRequests() {
    this.customers = [];
    let result = (await this.requestsSrv.getCustomersPage(null, null,
        null, null, null, `` +
        '', this.currentPage+1,this.pageSize));
    // @ts-ignore
    this.customers = result["items"];
    // @ts-ignore
    this.totalLength = result["totalCount"];
    console.log(this.customers);
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
}
