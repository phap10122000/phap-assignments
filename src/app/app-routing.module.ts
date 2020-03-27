import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';





const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent}
  // { path: 'add', component: ProductAddComponent},
  // { path: 'about', component: AboutComponent},
  // { path: 'list', component: ProductListComponent},
  // { path: 'service', component: ServiceComponent},
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
