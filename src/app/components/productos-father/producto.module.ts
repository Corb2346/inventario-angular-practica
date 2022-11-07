import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoRoutingModule } from './producto-routing.module';
import { ProductosFatherComponent } from './productos-father.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { EditarProductosComponent } from './editar-productos/editar-productos.component';
import { AgregarProductosComponent } from './agregar-productos/agregar-productos.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [ProductosFatherComponent, ListaProductosComponent, EditarProductosComponent, AgregarProductosComponent],
  imports: [
    CommonModule,
    ProductoRoutingModule,
    SharedModule
  ]
})
export class ProductoModule { }
