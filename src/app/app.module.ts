import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductSlideComponent } from './product-slide/product-slide.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ListService } from './list.service';
import { AboutComponent } from './about/about.component';
import { GameComponent } from './game/game.component';
import { AdminComponent } from './admin/admin.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule,NgbModule ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, ProductListComponent, ProductSlideComponent, ProductDetailComponent, AboutComponent, GameComponent, AdminComponent, RequirementsComponent, TeamComponent, ContactComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ListService]
})
export class AppModule { }
