import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './central/home/home.component';
import { RankingComponent } from './central/ranking/ranking.component';
import { ListaFavoritosComponent } from './user/lista-favoritos/lista-favoritos.component';
import { UserConfigComponent } from './user/user-config/user-config.component';
import { AddAtorComponent } from './admin/add-ator/add-ator.component';
import { AddCategoriaComponent } from './admin/add-categoria/add-categoria.component';
import { ListarObrasComponent } from './admin/listar-obras/listar-obras.component';
import { AddSerieComponent } from './admin/add-serie/add-serie.component';
import { AddFilmeComponent } from './admin/add-filme/add-filme.component';
import { FilmeComponent } from './central/filme/filme.component';
import { SerieComponent } from './central/serie/serie.component';
import { LoginComponent } from './central/login/login.component';
import { CadastroComponent } from './user/cadastro/cadastro.component';


const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'home', component: HomeComponent },
  {path: 'ranking', component: RankingComponent},
  {path: 'lista-favoritos', component: ListaFavoritosComponent},
  {path: 'user-config', component: UserConfigComponent},
  {path: 'adicionar-ator', component: AddAtorComponent},
  {path: 'adicionar-categoria', component: AddCategoriaComponent},
  {path: 'adicionar-serie', component: AddSerieComponent},
  {path: 'adicionar-filme', component: AddFilmeComponent},
  {path: 'Listar-obras', component: ListarObrasComponent},
  {path: 'filme', component: FilmeComponent},
  {path: 'serie', component: SerieComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cadastro', component: CadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
