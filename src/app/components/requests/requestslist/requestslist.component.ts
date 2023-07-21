import {Component, OnInit} from '@angular/core';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";
import {autoinsurancequotationrequestsService} from "../../../services/autoinsurancequotationrequests";
import {FormBuilder} from "@angular/forms";
import {VehiclesDataService} from "../../../services/vehicles-data.service";
import {CountriesService} from "../../../services/countries.service";
import {PageEvent} from "@angular/material/paginator";

@Component({
    selector: 'app-requestslist',
    templateUrl: './requestslist.component.html',
    styleUrls: ['./requestslist.component.css']
})
export class RequestslistComponent implements OnInit {
    horizontalPosition: MatSnackBarHorizontalPosition = 'center';
    verticalPosition: MatSnackBarVerticalPosition = 'bottom';
    currentPage:number = 0 ;
    pageSize:number = 5;
    totalLength : number = 0;
    showPageSizeOptions = true;
    showFirstLastButtons = true;
    constructor(
        private _snackBar: MatSnackBar, private lrSrv: autoinsurancequotationrequestsService,
        private requestsSrv: autoinsurancequotationrequestsService,
        private countriesSrv: CountriesService) {
    }

    requests: any = [];
    pageSizeOptions: any = [5,10,15];

    async loadRequests() {
        this.requests = [];
        let result = (await this.requestsSrv.getAutoInsuranceQuotationRequestsPage(null, null,
            null, null, null, 'assigned eq false', this.currentPage+1,this.pageSize));
        // @ts-ignore
        this.requests = result["items"];
        // @ts-ignore
        this.totalLength = result["totalCount"];
        console.log(this.requests);
    }

    ngOnInit(): void {
        this.loadRequests();
    }

    async assignRequest(requestId: any, requestObject: any) {
        try {
            delete requestObject['actions'];
            await this.requestsSrv.putAutoInsuranceQuotationRequestAssignToMe(requestId);
            requestObject["assigned"] = true;
            await this.requestsSrv.patchAutoInsuranceQuotationRequest(requestId, requestObject);
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
