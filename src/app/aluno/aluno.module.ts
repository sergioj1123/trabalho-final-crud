import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunoService } from './services/aluno.service';
import { ListarAlunoComponent } from './listar-aluno/listar-aluno.component';


@NgModule({
  declarations: [
    ListarAlunoComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    AlunoService
  ]
})
export class AlunoModule { }
