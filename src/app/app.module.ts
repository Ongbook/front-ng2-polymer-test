import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PolymerElement } from '@vaadin/angular2-polymer';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

// Shared component
import { ToolbarHomeComponent } from './shared/toolbar-home/toolbar-home.component';

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyD4Suuox8Mpv4qgWlpEijD8yin-71E7JnI",
  authDomain: "ongbook-oficial.firebaseapp.com",
  databaseURL: "https://ongbook-oficial.firebaseio.com",
  storageBucket: "ongbook-oficial.appspot.com"
};

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
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
