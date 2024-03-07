import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { CategoryComponent } from './category/category.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {path:'', component:HomeComponent,pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'category',component:CategoryComponent},
  {path:'products',component:ProductsComponent},

  {path:'profile',component:ProfileComponent},

  {path:'users',component:UsersComponent},
  
  {path:'admin',component:AdminloginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
