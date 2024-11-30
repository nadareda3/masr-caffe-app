import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {SliderComponent } from './slider/slider.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { SharedModule } from "./shared/shared.module";
import { HeaderComponent } from './shared/components/header/header.component';
import { AboutComponent } from './about/about.component';
import { CotactusComponent } from './cotactus/cotactus.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { BuyComponent } from './buy/buy.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CommercialDetailsComponent } from './commercial-details/commercial-details.component';



@NgModule({
  declarations: [
    AppComponent,


      SliderComponent,
                AboutComponent,
                CotactusComponent,
                PrivacyComponent,
                BuyComponent,
                LoginComponent,
                RegisterComponent,
                CartComponent,
                ProductDetailsComponent,
                CommercialDetailsComponent,





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
     SharedModule,
     RouterModule ,



],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
