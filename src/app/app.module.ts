import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule} from '@angular/material';
import "hammerjs";

import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { OurWorkComponent } from './our-work/our-work.component';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    ToolbarComponent,
    OurWorkComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
