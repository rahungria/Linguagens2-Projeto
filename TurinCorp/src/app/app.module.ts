import { BrowserModule }            from '@angular/platform-browser';
import { NgModule }                 from '@angular/core';
import { HttpClientModule }         from '@angular/common/http';
import { FlexLayoutModule }         from "@angular/flex-layout";
import { ReactiveFormsModule }      from "@angular/forms";

import { MatToolbarModule }       from '@angular/material/toolbar';
import { MatIconModule }          from "@angular/material/icon";
import { MatCardModule }          from "@angular/material/card";
import { MatGridListModule }      from "@angular/material/grid-list";
import { MatButtonModule }        from "@angular/material/button";
import { MatListModule }          from "@angular/material/list";
import { MatDividerModule }       from "@angular/material/divider";
import { MatInputModule }         from '@angular/material/input'

import { AppRoutingModule }         from './app-routing.module';
import { AppComponent }             from './app.component';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { HomeComponent }            from 'src/app/components/home/home.component';
import { NavbarComponent }          from 'src/app/components/navbar/navbar.component';
import { SeguroCardComponent }      from 'src/app/components/seguro-card/seguro-card.component';
import { ListaSegurosComponent }    from 'src/app/components/home/lista-seguros/lista-seguros.component';
import { CustomFormControlComponent } from './components/custom-forms/custom-form-control/custom-form-control/custom-form-control.component';
import { CustomFormGroupComponent } from './components/custom-forms/custom-form-group/custom-form-group/custom-form-group.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SeguroCardComponent,
    ListaSegurosComponent,
    CustomFormControlComponent,
    CustomFormGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    ReactiveFormsModule,

    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
