import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { InserirUsuarioComponent } from './inserir-usuario/inserir-usuario.component';
import { ListarUsuarioComponent } from './listar-usuario/listar-usuario.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'sobre', component:SobreComponent},
  {path:'cadastro', component:CadastroComponent},
  {path:'listar-usuario', component:ListarUsuarioComponent },
  {path:'inserir-usuario', component:InserirUsuarioComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
