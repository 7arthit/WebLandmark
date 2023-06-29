import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from 'primeng/dialog';
import { ImageModule } from 'primeng/image';
import { PanelModule } from 'primeng/panel';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { ThaiDatePipe } from './directives/thaidate.pipe';
import { TableModule } from 'primeng/table';
import { SplitterModule } from 'primeng/splitter';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    ThaiDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataViewModule,
    ImageModule,
    PanelModule,
    BrowserAnimationsModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    FormsModule,
    InputTextareaModule,
    HttpClientModule,
    CardModule,
    ToolbarModule,
    TableModule,
    SplitterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
