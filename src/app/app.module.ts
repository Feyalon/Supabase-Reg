import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { AccComponent } from './components/acc/acc.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AvatarupComponent } from './components/avatarup/avatarup.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AccComponent,
    AvatarupComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
