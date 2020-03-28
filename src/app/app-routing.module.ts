import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GameComponent } from './game/game.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';





const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'game', component: GameComponent},
  { path: 'about', component: AboutComponent},
  { path: 'list', component: ProductListComponent},
  { path: 'requirement', component: RequirementsComponent},
  { path: 'team', component: TeamComponent},
  { path: 'contact', component: ContactComponent}
  // { path: 'contact', component: ContactComponent},
  // { path: 'manager', component: ProductManagerComponent},
  // { path: 'manager/edit/:id', component: ProductEditComponent},
  // { path: 'manager/:id', component: ProductDetailComponent}
  // { path: '**', component:}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
