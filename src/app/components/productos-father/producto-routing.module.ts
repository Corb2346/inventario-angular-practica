import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosFatherComponent } from './productos-father.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { EditarProductosComponent } from './editar-productos/editar-productos.component';

const routes: Routes = [
  {
    path:'productos',
    component:ProductosFatherComponent,
    children:[
      {
        path:'',
        component:ListaProductosComponent
      },
      {
        path:'id',
        component:EditarProductosComponent
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
export class ProductoRoutingModule { }
