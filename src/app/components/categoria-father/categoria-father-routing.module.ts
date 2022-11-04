import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaFatherComponent } from './categoria-father.component';
import { ListaCategoriasComponent } from './lista-categorias/lista-categorias.component';
import { EditarCategoriaComponent } from './editar-categoria/editar-categoria.component';

const routes: Routes = [
  {
    path:'categorias',
    component:CategoriaFatherComponent,
    children: [
      {
        path: '',
        component:ListaCategoriasComponent 
      },
      {
        path:':id',
        component:EditarCategoriaComponent
      },
      {
        path:'**',
        redirectTo:''
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriaFatherRoutingModule { }
