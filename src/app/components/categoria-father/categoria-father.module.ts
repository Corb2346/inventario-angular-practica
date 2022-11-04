import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaFatherRoutingModule } from './categoria-father-routing.module';
import { CategoriaFatherComponent } from './categoria-father.component';
import { ListaCategoriasComponent } from './lista-categorias/lista-categorias.component';
import { AgregarCategoriaComponent } from './agregar-categoria/agregar-categoria.component';
import { EditarCategoriaComponent } from './editar-categoria/editar-categoria.component';


@NgModule({
  declarations: [CategoriaFatherComponent, ListaCategoriasComponent, AgregarCategoriaComponent, EditarCategoriaComponent],
  imports: [
    CommonModule,
    CategoriaFatherRoutingModule
  ]
})
export class CategoriaFatherModule { }
