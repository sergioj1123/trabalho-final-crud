import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AlunoService } from './services/aluno.service';
import { ListarAlunoComponent } from './listar-aluno/listar-aluno.component';

@NgModule({
  declarations: [
    ListarAlunoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    AlunoService
  ]
})
export class AlunoModule { }
