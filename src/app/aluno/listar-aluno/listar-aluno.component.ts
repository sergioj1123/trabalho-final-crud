import { Component, OnInit } from '@angular/core';

import { AlunoService } from '../services/aluno.service';
import { Aluno } from '../../shared/models/aluno.model';

@Component({
  selector: 'app-listar-aluno',
  templateUrl: './listar-aluno.component.html',
  styleUrl: './listar-aluno.component.css'
})
export class ListarAlunoComponent implements OnInit {

  alunos: Aluno[] = [];
  constructor(private alunoService: AlunoService) { }

  ngOnInit(): void {
    this.alunos = this.listarTodos();
  }

  listarTodos(): Aluno[] {
    return this.alunoService.listarTodos();
  }
}
