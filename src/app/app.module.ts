import {Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MatInputModule} from '@angular/material/input';
import {AppComponent} from './app.component';
import {AutoCalculatorComponent} from './components/auto/calculator/auto-calculator.component';
import {createCustomElement} from "@angular/elements";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbar, MatToolbarModule} from "@angular/material/toolbar";
import {HttpClientModule} from "@angular/common/http";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { RequestslistComponent } from './components/requests/requestslist/requestslist.component';
import {MatListModule} from "@angular/material/list";
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator";
import { TasksComponent } from './components/requests/tasks/tasks.component';
import { TaskComponent } from './components/requests/tasks/task/task.component';
import { RequestsOverallComponent } from './components/requests/charts/requests-overall/requests-overall.component';
import {NgxChartsModule} from "@swimlane/ngx-charts";
import { TasksOverallComponent } from './components/requests/tasks/charts/tasks-overall/tasks-overall.component';
import { ProposalComponent } from './components/auto/proposal/proposal.component';
import {ProposaleslistComponent} from "./components/auto/proposalslist/proposaleslist.component";
import { ListQuotationsComponent } from './components/auto/auto-insurance-quotations/list-quotations/list-quotations.component';
import { CustomerQuotationComponent } from './components/auto/auto-insurance-quotations/customer-quotation/customer-quotation.component';
import { AgentQuotationComponent } from './components/auto/auto-insurance-quotations/agent-quotation/agent-quotation.component';
import { QuotationsChartOverviewComponent } from './components/auto/auto-insurance-quotations/charts/quotations-chart-overview/quotations-chart-overview.component';
import { ExpansionPanelComponent } from './components/general/expansion-panel/expansion-panel.component';
import {MatExpansionModule} from "@angular/material/expansion";
import { CustomersListComponent } from './components/customers/customers-list/customers-list.component';
import { EmptyComponent } from './components/general/empty/empty.component';
@NgModule({
    declarations: [
        AppComponent,
        AutoCalculatorComponent,
        RequestslistComponent,
        TasksComponent,
        TaskComponent,
        ProposaleslistComponent,
        RequestsOverallComponent,
        TasksOverallComponent,
        ProposalComponent,
        ListQuotationsComponent,
        CustomerQuotationComponent,
        AgentQuotationComponent,
        QuotationsChartOverviewComponent,
        ExpansionPanelComponent,
        CustomersListComponent,
        EmptyComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        HttpClientModule,
        MatSelectModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatListModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
        MatPaginatorModule,
        ReactiveFormsModule,
        NgxChartsModule,
        MatExpansionModule

    ],
    providers: [],
    bootstrap: []
})
export class AppModule {

    ngDoBootstrap() {
    }
    constructor(private injector: Injector) {
        const AutoCalculator = createCustomElement(AutoCalculatorComponent, {
            injector: this.injector
        });
        customElements.define("auto-calculator", AutoCalculator);

        const Requestslist = createCustomElement(RequestslistComponent, {
            injector: this.injector
        });
        customElements.define("list-call-back-requests", Requestslist);

        const TasksList = createCustomElement(TasksComponent, {
            injector: this.injector
        });
        customElements.define("list-call-back-tasks", TasksList);

        const RequestsOverAllChart = createCustomElement(RequestsOverallComponent, {
            injector: this.injector
        });
        customElements.define("chart-call-back-requests", RequestsOverAllChart);

        const TasksOverAllChart = createCustomElement(TasksOverallComponent, {
            injector: this.injector
        });
        customElements.define("chart-call-back-tasks", TasksOverAllChart);

        const Proposal = createCustomElement(ProposalComponent, {
            injector: this.injector
        });
        customElements.define("auto-insurance-proposal", Proposal);

        const ListQuotations = createCustomElement(ListQuotationsComponent, {
            injector: this.injector
        });
        customElements.define("auto-quotations-list", ListQuotations);

        const QuotationsChartOverview = createCustomElement(QuotationsChartOverviewComponent, {
            injector: this.injector
        });
        customElements.define("quotations-chart-overview", QuotationsChartOverview);

        const ExpansionPanel = createCustomElement(ExpansionPanelComponent, {
            injector: this.injector
        });
        customElements.define("general-expansion-panel", ExpansionPanel);

        const CustomersList = createCustomElement(CustomersListComponent, {
            injector: this.injector
        });
        customElements.define("customers-list", CustomersList);
    }

}
