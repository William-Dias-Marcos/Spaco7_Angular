import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { OpeningHoursComponent } from './components/opening-hours/opening-hours.component';
import { WhatsappConversationComponent } from './components/whatsapp-conversation/whatsapp-conversation.component';
import { PresentationOfServicesComponent } from './components/presentation-of-services/presentation-of-services.component';
import { WorkSpaceComponent } from './components/work-space/work-space.component';
import { LocationComponent } from './components/location/location.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    AboutComponent,
    OpeningHoursComponent,
    WhatsappConversationComponent,
    PresentationOfServicesComponent,
    WorkSpaceComponent,
    LocationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
