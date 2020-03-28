import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { KidzComponent } from './kidz/kidz.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductSlideComponent } from './product-slide/product-slide.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ListService } from './list.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, MenComponent, WomenComponent, KidzComponent, ProductListComponent, ProductSlideComponent, ProductDetailComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ListService]
})
export class AppModule { }
