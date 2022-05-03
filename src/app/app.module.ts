import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlannerSimpleComponent } from './components/planner/planner-simple/planner-simple.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HeaderComponent } from './components/header/header.component';
import { PlannerComponent } from './components/planner/planner.component';
import { PlannerWithCheckboxesComponent } from './components/planner/planner-with-checkboxes/planner-with-checkboxes.component';
import { PlannerWithCkeckboxesAndFiltersComponent } from './components/planner/planner-with-ckeckboxes-and-filters/planner-with-ckeckboxes-and-filters.component';
import { PlannerWithDeleteComponent } from './components/planner/planner-with-delete/planner-with-delete.component';
import { PlannerWithProgressBarComponent } from './components/planner/planner-with-progress-bar/planner-with-progress-bar.component';
import { FormsComponent } from './components/forms/forms.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { SignUpComponent } from './components/forms/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    PlannerSimpleComponent,
    HeaderComponent,
    PlannerComponent,
    PlannerWithCheckboxesComponent,
    PlannerWithCkeckboxesAndFiltersComponent,
    PlannerWithDeleteComponent,
    PlannerWithProgressBarComponent,
    FormsComponent,
    LoginFormComponent,
    SignUpComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
      ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
