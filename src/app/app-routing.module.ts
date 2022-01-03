import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RtfComponent } from './rtf/rtf.component';

const routes: Routes = [
  {
    path :"verify",
  component:RtfComponent
 },
  {
    path : "",
 redirectTo:"verify",
 pathMatch:"full"
 },
 {
 path : "**",
 redirectTo:"verify",
 pathMatch:"full"
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
