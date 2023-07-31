import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {autoinsurancequotationrequestsService} from "../../../../services/autoinsurancequotationrequests";
import {callbacktasksService} from "../../../../services/callbacktasks";
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";

@Component({
  selector: 'request-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  remarks : string = "";
  @Input('task')
  task:any
  constructor( private cdr:ChangeDetectorRef,private _snackBar: MatSnackBar,private requestSrv:autoinsurancequotationrequestsService, private tasksSrv:callbacktasksService) {
  }
  requestInfo : any;
  @Output() Update: EventEmitter<void> = new EventEmitter<void>();

  ngOnInit(): void {
    this.cdr.detectChanges();
    this.getRequestInfo();
  }

  async getRequestInfo()
  {
    this.requestInfo = await this.requestSrv.getAutoInsuranceQuotationRequest(this.task['r_task_c_autoInsuranceQuotationRequestId']);
  }

  async resolve()
  {
    try {
      let tempTask = this.task;
      delete tempTask['actions'];
      tempTask["resolved"] = true;
      tempTask["remarks"] = this.remarks;
      let updatedTask = await this.tasksSrv.patchCallBackTask(this.task["id"],tempTask);
      this.showResult("Task has been resolved!");
      this.Update.emit();

    }catch (e)
    {
      this.showResult("Error while resolving task!");
    }


  }
  showResult(title:string) {
    let horizontalPosition: MatSnackBarHorizontalPosition = 'center';
    let verticalPosition: MatSnackBarVerticalPosition = 'bottom';
    this._snackBar.open(title, 'Ok!', {
      horizontalPosition: horizontalPosition,
      verticalPosition: verticalPosition,
    });
  }

}
