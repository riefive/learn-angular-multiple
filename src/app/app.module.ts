import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppChildModule as App1Module } from 'projects/application-one/src/app/app.child.module'
import { AppChildModule as App2Module } from 'projects/application-two/src/app/app.child.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    App1Module,
    App2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
