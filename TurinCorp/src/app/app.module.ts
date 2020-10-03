import { BrowserModule }            from '@angular/platform-browser';
import { NgModule }                 from '@angular/core';
import { HttpClientModule }         from '@angular/common/http';
import { FlexLayoutModule }         from "@angular/flex-layout";

import { MatToolbarModule }       from '@angular/material/toolbar';
import { MatIconModule }          from "@angular/material/icon";
import { MatCardModule }          from "@angular/material/card";
import { MatGridListModule }      from "@angular/material/grid-list";
import { MatButtonModule }        from "@angular/material/button";
import { MatListModule }          from "@angular/material/list";

import { AppRoutingModule }         from './app-routing.module';
import { AppComponent }             from './app.component';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { HomeComponent }            from './home/home.component';
import { NavbarComponent }          from './navbar/navbar.component';
import { SeguroCardComponent }      from './seguro-card/seguro-card.component';
import { ListaSegurosComponent }  from './home/lista-seguros/lista-seguros.component';
import { MatDividerModule } from "@angular/material/divider";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SeguroCardComponent,
    ListaSegurosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,

    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
