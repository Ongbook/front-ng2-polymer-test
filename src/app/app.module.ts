import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PolymerElement } from '@vaadin/angular2-polymer';

import { AppComponent } from './app.component';

// Shared component
import { ToolbarHomeComponent } from './shared/toolbar-home/toolbar-home.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarHomeComponent,
    PolymerElement('app-toolbar'),
    PolymerElement('paper-icon-button'),
    PolymerElement('iron-dropdown')/*,
    PolymerElement('iron-icons')*/
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
