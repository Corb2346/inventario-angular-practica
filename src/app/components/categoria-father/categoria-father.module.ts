import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaFatherRoutingModule } from './categoria-father-routing.module';
import { CategoriaFatherComponent } from './categoria-father.component';
import { ListaCategoriasComponent } from './lista-categorias/lista-categorias.component';
import { AgregarCategoriaComponent } from './agregar-categoria/agregar-categoria.component';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [CategoriaFatherComponent, ListaCategoriasComponent, AgregarCategoriaComponent],
  imports: [
    CommonModule,
    CategoriaFatherRoutingModule,
    SharedModule
  ],
  exports:[

  ]
})
export class CategoriaFatherModule { }
