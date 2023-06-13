import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaFavoritosComponent } from './user/lista-favoritos/lista-favoritos.component';
import { UserConfigComponent } from './user/user-config/user-config.component';
import { ListarObrasComponent } from './admin/listar-obras/listar-obras.component';
import { AddAtorComponent } from './admin/add-ator/add-ator.component';
import { AddCategoriaComponent } from './admin/add-categoria/add-categoria.component';
import { HomeComponent } from './central/home/home.component';
import { RankingComponent } from './central/ranking/ranking.component';
import { AddSerieComponent } from './admin/add-serie/add-serie.component';
import { FilmeComponent } from './central/filme/filme.component';
import { SerieComponent } from './central/serie/serie.component';
import { LoginComponent } from './central/login/login.component';
import {StyleClassModule} from 'primeng/styleclass';
import { CadastroComponent } from './user/cadastro/cadastro.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaFavoritosComponent,
    UserConfigComponent,
    ListarObrasComponent,
    AddAtorComponent,
    AddCategoriaComponent,
    HomeComponent,
    RankingComponent,
    AddSerieComponent,
    FilmeComponent,
    SerieComponent,
    LoginComponent,
    CadastroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
