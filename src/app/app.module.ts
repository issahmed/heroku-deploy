import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ResetComponent } from './auth/reset/reset.component';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatListModule } from '@angular/material/list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ReactiveFormsModule } from '@angular/forms';
import { EmailConfirmationComponent } from './auth/email-confirmation/email-confirmation.component';
import { HeaderComponent } from './shared-layout/header/header.component';
import { SidebarComponent } from './shared-layout/sidebar/sidebar.component';
import { MainLayoutComponent } from './shared-layout/main-layout/main-layout.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import {  MatSidenavModule } from '@angular/material/sidenav';
import { AdminComponent } from './dashboard/admin/admin.component';
import { UsersListComponent } from './dashboard/admin/accounts manager/users-list/users-list.component';
import { HomeComponent } from './dashboard/admin/home/home.component';
import {MatTableModule} from '@angular/material/table';
import { AccountsManagerComponent } from './dashboard/admin/accounts manager/accounts-manager/accounts-manager.component';
import { DialogComponent } from './dashboard/admin/accounts manager/users-list/dialog/dialog.component';
import { MatSelectModule } from '@angular/material/select';
import { TrainingComponent } from './dashboard/admin/training/training.component';
import { PopupComponent } from './dashboard/admin/training/popup/popup.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatDialogModule} from '@angular/material/dialog';
import { PopUpConfirmationComponent } from './shared-layout/pop-up-confirmation/pop-up-confirmation.component';
import { PartenariatComponent } from './dashboard/admin/partners manager/partenariat/partenariat.component';
import { ProspectingListComponent } from './dashboard/admin/partners manager/prospecting-list/prospecting-list.component';
import { ProspectPopUpComponent } from './dashboard/admin/partners manager/prospecting-list/prospect-pop-up/prospect-pop-up.component';
import { CardComponent } from './KPIs/card/card.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { PieComponent } from './KPIs/pie/pie.component';
import { LinesComponent } from './KPIs/lines/lines.component';
import { PartenariatKPIsComponent } from './dashboard/admin/partners manager/partenariat-kpis/partenariat-kpis.component';
import { AccountsKPIsComponent } from './dashboard/admin/accounts manager/accounts-kpis/accounts-kpis.component';
import { MeetingsManagerComponent } from './dashboard/admin/secretary pole/meetings-manager/meetings-manager.component';
import { TasksManagerComponent } from './dashboard/admin/secretary pole/tasks-manager/tasks-manager.component';
import { AddComponent } from './dashboard/admin/secretary pole/tasks-manager/add/add.component';
import { PopUpTaskComponent } from './dashboard/admin/secretary pole/tasks-manager/pop-up-task/pop-up-task.component';




@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    ResetComponent,
    EmailConfirmationComponent,
    HeaderComponent,
    SidebarComponent,
    MainLayoutComponent,
    AdminComponent,
    UsersListComponent,
    HomeComponent,
    AccountsManagerComponent,
    DialogComponent,
    TrainingComponent,
    PopupComponent,
    PopUpConfirmationComponent,
    PartenariatComponent,
    ProspectingListComponent,
    ProspectPopUpComponent,
    CardComponent,
    PieComponent,
    LinesComponent,
    PartenariatKPIsComponent,
    AccountsKPIsComponent,
    MeetingsManagerComponent,
    TasksManagerComponent,
    AddComponent,
    PopUpTaskComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule ,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTableModule,
    MatDialogModule,
    MatSelectModule,
    FormsModule,
    MatDialogModule,
    HttpClientModule,
    MatPaginatorModule,
    MatSortModule,
    HighchartsChartModule,
    
    
    
    
    
    
    
    
    
 
  ],
  providers: [  
     // AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
