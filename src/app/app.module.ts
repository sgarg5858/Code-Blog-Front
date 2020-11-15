import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AuthModule} from './auth/auth.module';
import {MaterialModule} from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CoreModule} from './core/core.module';
import {ProfileModule} from './profile/profile.module'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    CoreModule,
    ProfileModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
