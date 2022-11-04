import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { UsuariosComponent } from './usuarios.component';
import { EditarUsuariosComponent } from './editar-usuarios/editar-usuarios.component';

const routes: Routes = [
  {
    path:'usuarios',
    component:UsuariosComponent,
    children:[
      {
        path:'',
        component:UsuariosComponent
      },
      {
        path:':id',
        component:EditarUsuariosComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
