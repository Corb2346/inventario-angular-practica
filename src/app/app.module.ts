import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MainmenuComponent } from './components/mainmenu/mainmenu.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CategoriaFatherModule } from './components/categoria-father/categoria-father.module';
import { ProductoModule } from './components/productos-father/producto.module';
import { MarcasModule } from './components/marcas/marcas.module';
import { UsuariosModule } from './components/usuarios/usuarios.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainmenuComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    CategoriaFatherModule,
    ProductoModule,
    MarcasModule,
    UsuariosModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
