import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { ProductSlideComponent } from './product-slide/product-slide.component';
import { AboutComponent } from './about/about.component';
import { GameComponent } from './game/game.component';
import { AdminComponent } from './admin/admin.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { AdminListComponent } from './admin/admin-list/admin-list.component';
import { AdminManagerComponent } from './admin/admin-manager/admin-manager.component';
import { ProductService } from './product.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule,NgbModule,HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, ProductSlideComponent, AboutComponent, GameComponent, AdminComponent, RequirementsComponent, TeamComponent, ContactComponent, AdminListComponent, AdminManagerComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})
export class AppModule { }
