import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { EditUserComponent } from './components/user/edit-user/edit-user.component';
import { UsersComponent } from './components/user/users/users.component';
import { AddUserComponent } from './components/user/add-user/add-user.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { DrugsComponent } from './components/drug/drugs/drugs.component';
import { AddDrugComponent } from './components/drug/add-drug/add-drug.component';
import { EditDrugComponent } from './components/drug/edit-drug/edit-drug.component';
import { HomeComponent } from './components/home/home.component';
import { SearchDrugComponent } from './components/search-drug/search-drug.component';
import { DrugComponent } from './components/drug/drug/drug.component';
import { NavAdminComponent } from './components/nav-admin/nav-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    EditUserComponent,
    UsersComponent,
    AddUserComponent,
    LoginComponent,
    ErrorPageComponent,
    NavbarComponent,
    DrugsComponent,
    AddDrugComponent,
    EditDrugComponent,
    HomeComponent,
    SearchDrugComponent,
    DrugComponent,
    NavAdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
