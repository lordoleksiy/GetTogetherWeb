import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MappageComponent } from './mappage/mappage.component';
import { RouterModule } from '@angular/router';


const routes = [
  {path:'', component:MappageComponent}
]
@NgModule({
  declarations: [
    MappageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MapModule { }
