import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainmenuComponent } from './components/mainmenu/mainmenu.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'mainmenu',
    component:MainmenuComponent
  },
  {
    path:'categorias',
    loadChildren: () => import('./components/categoria-father/categoria-father.module').then( m => m.CategoriaFatherModule)
  },
  {
    path:'productos',
    loadChildren: () => import('./components/productos-father/producto.module').then( m => m.ProductoModule)
  },
  {
    path:'marcas',
    loadChildren: () => import('./components/marcas/marcas.module').then( m => m.MarcasModule)
  },
  {
    path:'usuarios',
    loadChildren: () => import('./components/usuarios/usuarios.module').then( m => m.UsuariosModule)
  },
  {
    path:'404',
    component:NotFoundComponent
  },
  {
    path:'**',
    redirectTo:'404',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
