import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { trigger, state, style, animate, transition } from '@angular/animations';
import {VehiclesDataService} from "../../../services/vehicles-data.service";
import {CountriesService} from "../../../services/countries.service";
import {autoinsurancequotationrequestsService} from "../../../services/autoinsurancequotationrequests";
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";

declare const Liferay : any;
@Component({
    selector: 'auto-calculator',
    templateUrl: './auto-calculator.component.html',
    styleUrls: ['./auto-calculator.component.css'],
    animations: [
        trigger('slideInOut', [
            state('in', style({ transform: 'translateX(-100%)' })),
            state('out', style({ transform: 'translateX(0%)' })),
            transition('in => out', animate('500ms ease-in-out')),
            transition('out => in', animate('500ms ease-in-out'))
        ])
    ]
})
export class AutoCalculatorComponent implements OnInit{
    horizontalPosition: MatSnackBarHorizontalPosition = 'center';
    verticalPosition: MatSnackBarVerticalPosition = 'bottom';

    form: FormGroup;
    page1: FormGroup;
    page2: FormGroup;
    pages : Array<FormGroup> = []
    currentPage: number = 1;
    totalPages: number = 3;

    carMakes: any;
    countries: any;
    carModels: any;
    loadingCarModels: boolean = false;

    constructor(private _snackBar: MatSnackBar,private lrSrv:autoinsurancequotationrequestsService,private formBuilder: FormBuilder,private vehicles:VehiclesDataService,private countriesSrv : CountriesService) {
        this.page1 = this.formBuilder.group({
            firstName: ['', Validators.required],
            middleName: [''],
            lastName: ['', Validators.required],
            phoneNumber: ['', Validators.required],
            emailAddress: ['', [Validators.required, Validators.email]]
        });
        this.page2 = this.formBuilder.group({
            // Second page form fields
            policyType: ['', Validators.required],
            country: ['', Validators.required],
            carBrand: ['', Validators.required],
            carModel: ['', Validators.required],
            manufacturingYear: ['', Validators.required],
            carValue: ['', Validators.required]
        });
        this.form = this.formBuilder.group({
            // First page form fields
            page1: this.page1,
            page2: this.page2
        });
        this.pages.push(this.page1);
        this.pages.push(this.page2);
    }

    nextPage() {
        if (this.pages[this.currentPage-1].valid &&
            this.currentPage < this.totalPages ) {
            this.currentPage++;
        }else
        {
            this.markPage1ControlsAsTouched(this.pages[this.currentPage-1]);
        }
    }
    previousPage() {
        if (this.currentPage > 1) {
            this.currentPage--;
        }
    }
    async submitForm() {
        if (!this.form.valid) {
            this.showResult('Please provide all of the required fields');

        } else
        {
            let data = {quotationTotalValue:this.Quotation};
            this.pages.forEach(page=>{
                data = {...data, ...page.value};
            });
            await this.lrSrv.postAutoInsuranceQuotationRequest(data);
            this.showResult('Request has been submitted!');
            this.resetForm();
        }
    }
    markPage1ControlsAsTouched(page:FormGroup) {
        Object.keys(page.controls).forEach((controlName) => {
            page.get(controlName)?.hasError('required');
            page.get(controlName)?.markAsTouched();
            page.get(controlName)?.updateValueAndValidity({ emitEvent: false, onlySelf: true });
        });
    }
    public get Quotation()
    {
        let price =parseFloat(this.page2.get('carValue')?.value);
        return Math.ceil(price *0.025);
    }
    async loadVehiclesMakeData()
    {
       this.carMakes = await this.vehicles.getVehiclesMakes();
    }
    ngOnInit(): void {
        this.loadVehiclesMakeData();
        this.loadCountries();
    }
    async loadModels(make:any) {
        this.loadingCarModels = true;
        this.carModels = await this.vehicles.getVehiclesModelsByMake(make.value);
        this.loadingCarModels = false;
    }
    async loadCountries()
    {
        this.countries = await this.countriesSrv.getCountries();
    }
    resetForm()
    {
        this.currentPage = 1;
        this.form.reset();
    }



    showResult(title:string) {
        this._snackBar.open(title, 'Ok!', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
        });
    }
}
