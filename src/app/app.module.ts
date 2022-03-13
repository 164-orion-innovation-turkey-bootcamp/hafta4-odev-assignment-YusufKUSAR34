import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertifyService } from './services/alertify.service';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';

import { HomepageComponent } from './component/homepage/homepage.component';
import { AccountService } from './services/account.service';
import { LoginGuard } from './services/login.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
     HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AlertifyService,AccountService,LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
