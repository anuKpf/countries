import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CountryDetailsComponent } from './country-details/country-details.component';


const routes: Routes = [
 // {path:  "", pathMatch:  "full",redirectTo:  "home"},
 // {path: "home", component: AppComponent},
 // {path: "detail", component: CountryDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
