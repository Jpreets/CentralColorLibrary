// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Routing
import { AppRoutingModule } from './app.routing';
import { MainLayoutComponent } from './layouts';

// Components
import { AppComponent } from './app.component';

// Services
import { AuthService } from './shared/service/auth.service';

@NgModule({
  declarations: [
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [MainLayoutComponent]
})
export class AppModule { }
