import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarAlunoComponent } from './aluno/listar-aluno/listar-aluno.component';
import { InserirAlunoComponent } from './aluno/inserir-aluno/inserir-aluno.component';
import { EditarAlunoComponent } from './aluno/editar-aluno/editar-aluno.component';
import { ListarCursoComponent } from './curso/listar-curso/listar-curso.component';
import { InserirCursoComponent } from './curso/inserir-curso/inserir-curso.component';
import { EditarCursoComponent } from './curso/editar-curso/editar-curso.component';

const routes: Routes = [
  {path: '', redirectTo: 'alunos/listar', pathMatch: 'full'},
  {path: "alunos", redirectTo: "alunos/listar"},
  {path: "alunos/listar", component: ListarAlunoComponent},
  {path: "alunos/cadastrar", component: InserirAlunoComponent},
  {path: "alunos/editar/:id", component: EditarAlunoComponent},
  {path: "cursos", redirectTo: "cursos/listar"},
  {path: "cursos/listar", component: ListarCursoComponent},
  {path: "cursos/cadastrar", component: InserirCursoComponent},
  {path: "cursos/editar/:id", component: EditarCursoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
