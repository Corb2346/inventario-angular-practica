import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarcasComponent } from './marcas.component';
import { ListaMarcasComponent } from './lista-marcas/lista-marcas.component';
import { EditarMarcasComponent } from './editar-marcas/editar-marcas.component';

const routes: Routes = [
  {
    path:'marcas',
    component:MarcasComponent,
    children:[
      {
        path:'',
        component:ListaMarcasComponent
      },
      {
        path:':id',
        component:EditarMarcasComponent
      }
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarcasRoutingModule { }
