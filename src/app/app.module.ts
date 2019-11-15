import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
// import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
//  const config: SocketIoConfig = { url: 'http://localhost:3001', options: {} };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // SocketIoModule.forRoot(config),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCLD40WSnh4LL8B2LMQa-NeNqvcNoc6iik'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
