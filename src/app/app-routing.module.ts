import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailConfirmationComponent } from './auth/email-confirmation/email-confirmation.component';
import { ResetComponent } from './auth/reset/reset.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AccountsManagerComponent } from './dashboard/admin/accounts-manager/accounts-manager.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { HomeComponent } from './dashboard/admin/home/home.component';
import { TrainingComponent } from './dashboard/admin/training/training.component';
import { UsersListComponent } from './dashboard/admin/users-list/users-list.component';
import { MainLayoutComponent } from './shared-layout/main-layout/main-layout.component';


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
      {path : 'training' , component : TrainingComponent}

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
