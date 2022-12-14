import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailConfirmationComponent } from './auth/email-confirmation/email-confirmation.component';
import { ResetComponent } from './auth/reset/reset.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AccountsKPIsComponent } from './dashboard/admin/accounts manager/accounts-kpis/accounts-kpis.component';
import { AccountsManagerComponent } from './dashboard/admin/accounts manager/accounts-manager/accounts-manager.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { HomeComponent } from './dashboard/admin/home/home.component';
import { PartenariatKPIsComponent } from './dashboard/admin/partners manager/partenariat-kpis/partenariat-kpis.component';
import { PartenariatComponent } from './dashboard/admin/partners manager/partenariat/partenariat.component';
import { ProspectingListComponent } from './dashboard/admin/partners manager/prospecting-list/prospecting-list.component';
import { TrainingComponent } from './dashboard/admin/training/training.component';
import { UsersListComponent } from './dashboard/admin/accounts manager/users-list/users-list.component';
import { TasksManagerComponent } from './dashboard/admin/secretary pole/tasks-manager/tasks-manager.component';
import { AddComponent } from './dashboard/admin/secretary pole/tasks-manager/add/add.component';
import { PopUpTaskComponent } from './dashboard/admin/secretary pole/tasks-manager/pop-up-task/pop-up-task.component';
import { MeetingsManagerComponent } from './dashboard/admin/secretary pole/meetings-manager/meetings-manager.component';


const routes: Routes = [
    {path:'',redirectTo:'signin',pathMatch:'full'},
    {path:'signin',component:SigninComponent},
    {path:'signup',component:SignupComponent},
    {path:'reset',component:ResetComponent },
    {path :'reset/confirmation' , component : EmailConfirmationComponent},
    {path : 'dashboard' , component : AdminComponent ,
    children : [
      {path : 'home',component:HomeComponent },
      {path : 'users-list' , component : UsersListComponent },
      {path : 'accounts-manager' , component : AccountsManagerComponent},
      {path : 'training' , component : TrainingComponent},
      {path : 'partenariat' , component : PartenariatComponent},
      {path : 'prospectinglist' , component : ProspectingListComponent},
      {path : 'partenariat-kpis' , component : PartenariatKPIsComponent},
      {path : 'accounts-kpis' , component : AccountsKPIsComponent},
      {path : 'tasks' , component : TasksManagerComponent},
      {path : 'add' , component :AddComponent},
      {path : 'meetings' , component :MeetingsManagerComponent}








      

    ]
  },
    // { path: 'users-list', component: UsersListComponent },
    // { path: 'home', component: HomeComponent },



  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
