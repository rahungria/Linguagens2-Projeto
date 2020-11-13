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
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatFormFieldModule }     from '@angular/material/form-field';
import { MatSelectModule }        from '@angular/material/select';

import { AppRoutingModule }         from './app-routing.module';
import { AppComponent }             from './app.component';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { HomeComponent }            from 'src/app/components/home/home.component';
import { NavbarComponent }          from 'src/app/components/navbar/navbar.component';
import { SeguroCardComponent }      from 'src/app/components/seguro-card/seguro-card.component';
import { ListaSegurosComponent }    from 'src/app/components/home/lista-seguros/lista-seguros.component';
import { CustomFormGroupComponent } from './components/custom-forms/custom-form-group/custom-form-group/custom-form-group.component';
import { CommonModule } from '@angular/common';
import { SeguroComponent } from './components/seguro/seguro.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SeguroCardComponent,
    ListaSegurosComponent,
    CustomFormGroupComponent,
    SeguroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    CommonModule,

    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
