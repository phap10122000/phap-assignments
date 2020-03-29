import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GameComponent } from './game/game.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { AdminManagerComponent } from './admin/admin-manager/admin-manager.component';
import { AdminListComponent } from './admin/admin-list/admin-list.component';





const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'game', component: GameComponent},
  { path: 'about', component: AboutComponent},
  { path: 'list', component: AdminListComponent},
  { path: 'requirement', component: RequirementsComponent},
  { path: 'team', component: TeamComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'admin', component: AdminComponent},
  // { path: 'contact', component: ContactComponent},
  { path: 'manager', component: AdminManagerComponent},
  { path: 'manager/edit/:id', component: AdminManagerComponent},
  // { path: 'manager/:id', component: ProductDetailComponent}
  // { path: '**', component:}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
