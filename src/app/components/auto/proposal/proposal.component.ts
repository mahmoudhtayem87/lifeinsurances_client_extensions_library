import {Component, OnInit} from '@angular/core';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {autoinsurancequotationrequestsService} from "../../../services/autoinsurancequotationrequests";
import {VehiclesDataService} from "../../../services/vehicles-data.service";
import {CountriesService} from "../../../services/countries.service";
import {headless_admin_userService} from "../../../services/headless-admin-user";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {autoinsurancequotationproposalsService} from "../../../services/autoinsurancequotationproposals";

@Component({
    selector: 'app-proposal',
    templateUrl: './proposal.component.html',
    styleUrls: ['./proposal.component.css'],
    animations: [
        trigger('slideInOut', [
            state('in', style({ transform: 'translateX(-100%)' })),
            state('out', style({ transform: 'translateX(0%)' })),
            transition('in => out', animate('500ms ease-in-out')),
            transition('out => in', animate('500ms ease-in-out'))
        ])
    ]
})
export class ProposalComponent implements OnInit {
    horizontalPosition: MatSnackBarHorizontalPosition = 'center';
    verticalPosition: MatSnackBarVerticalPosition = 'bottom';

    form: FormGroup;
    page1: FormGroup;
    page2: FormGroup;
    pages: Array<FormGroup> = []
    currentPage: number = 1;
    totalPages: number = 3;

    carMakes: any;
    countries: any;
    carModels: any;
    loadingCarModels: boolean = false;

    public get isEmailEmpty()
    {
        return !(this.page1.get('emailAddress')?.value && this.page1.get('emailAddress')?.value.length > 5);
    }
    async loadCustomerData() {
        //clear form before search
        this.page1.get('firstName')?.setValue('');
        this.page1.get('lastName')?.setValue('');
        this.page1.get('customerId')?.setValue('');

        let emailAddress = this.page1.get('emailAddress')?.value;
        let customerProfile =await this.userSrv.getUserAccountsPage(`emailAddress eq '${emailAddress}'`);
        // @ts-ignore
        if (customerProfile['totalCount'] > 0)
        {
            // @ts-ignore
            this.page1.get('firstName')?.setValue(customerProfile.items[0]['givenName']);
            // @ts-ignore
            this.page1.get('lastName')?.setValue(customerProfile.items[0]['familyName']);
            // @ts-ignore
            this.page1.get('customerId')?.setValue(customerProfile.items[0]['id']);
        }else
        {
            this.showResult('Invalid Email Address!');
        }
    }

    constructor(
        private userSrv : headless_admin_userService,
        private _snackBar: MatSnackBar,
        private lrSrv: autoinsurancequotationproposalsService,
        private formBuilder: FormBuilder,
        private vehicles: VehiclesDataService,
        private countriesSrv: CountriesService
    ) {
        this.page1 = this.formBuilder.group({
            firstName: ['', Validators.required],
            customerId: [''],
            lastName: ['', Validators.required],
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
        console.log('123')
        if (this.pages[this.currentPage - 1].valid &&
            this.currentPage < this.totalPages) {
            this.currentPage++;
        } else {
            console.log('123123123')
            this.markPage1ControlsAsTouched(this.pages[this.currentPage - 1]);
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
        } else {
            let data = {
                quotationTotalValue: this.Quotation,
                customerFeedback: "pending"
            };
            this.pages.forEach(page => {
                data = {...data, ...page.value};
            });
            await this.lrSrv.postAutoInsuranceQuotationProposal(data);
            this.showResult('Request has been submitted!');
            this.resetForm();
        }
    }

    markPage1ControlsAsTouched(page: FormGroup) {
        Object.keys(page.controls).forEach((controlName) => {
            page.get(controlName)?.hasError('required');
            page.get(controlName)?.markAsTouched();
            page.get(controlName)?.updateValueAndValidity({emitEvent: false, onlySelf: true});
        });
    }

    public get Quotation() {
        let price = parseFloat(this.page2.get('carValue')?.value);
        return Math.ceil(price * 0.025);
    }

    async loadVehiclesMakeData() {
        this.carMakes = await this.vehicles.getVehiclesMakes();
    }

    ngOnInit(): void {
        this.loadVehiclesMakeData();
        this.loadCountries();
    }

    async loadModels(make: any) {
        this.loadingCarModels = true;
        this.carModels = await this.vehicles.getVehiclesModelsByMake(make.value);
        this.loadingCarModels = false;
    }

    async loadCountries() {
        this.countries = await this.countriesSrv.getCountries();
    }

    resetForm() {
        this.currentPage = 1;
        this.form.reset();
    }

    showResult(title: string) {
        this._snackBar.open(title, 'Ok!', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
        });
    }
}
