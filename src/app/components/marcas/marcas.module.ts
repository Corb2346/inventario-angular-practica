import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarcasRoutingModule } from './marcas-routing.module';
import { MarcasComponent } from './marcas.component';
import { ListaMarcasComponent } from './lista-marcas/lista-marcas.component';
import { EditarMarcasComponent } from './editar-marcas/editar-marcas.component';
import { AgregarMarcasComponent } from './agregar-marcas/agregar-marcas.component';


@NgModule({
  declarations: [MarcasComponent,ListaMarcasComponent,EditarMarcasComponent,AgregarMarcasComponent],
  imports: [
    CommonModule,
    MarcasRoutingModule
  ]
})
export class MarcasModule { }
