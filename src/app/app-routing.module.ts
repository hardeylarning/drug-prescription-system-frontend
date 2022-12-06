import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDrugComponent } from './components/drug/add-drug/add-drug.component';
import { DrugComponent } from './components/drug/drug/drug.component';
import { DrugsComponent } from './components/drug/drugs/drugs.component';
import { EditDrugComponent } from './components/drug/edit-drug/edit-drug.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SearchDrugComponent } from './components/search-drug/search-drug.component';
import { AddUserComponent } from './components/user/add-user/add-user.component';
import { EditUserComponent } from './components/user/edit-user/edit-user.component';
import { UsersComponent } from './components/user/users/users.component';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
  },
  {
    path: 'users', component: UsersComponent,
    canActivate: [AuthGuard, RoleGuard]

  },
  {
    path: 'add-user', component: AddUserComponent
  },
  {
    path: 'edit-user/:id', component: EditUserComponent,
    canActivate: [AuthGuard, RoleGuard]
  },
  {
    path: 'drugs', component: DrugsComponent,
    canActivate: [AuthGuard, RoleGuard]
  },
  {
    path: 'drug/:id', component: DrugComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'add-drug', component: AddDrugComponent,
    canActivate: [AuthGuard, RoleGuard]
  },
  {
    path: 'edit-drug/:id', component: EditDrugComponent,
    canActivate: [AuthGuard, RoleGuard]
  },
  {
    path: 'login', component: LoginComponent,
  },
  {
    path: 'search', component: SearchDrugComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: '**', component: ErrorPageComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
