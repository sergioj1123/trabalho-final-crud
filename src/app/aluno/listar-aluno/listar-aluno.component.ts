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
    //return this.alunoService.listarTodos();
    return [
      new Aluno(1, 'João', "12345978909", "teste@teste.com",
        '17/01/1998'),
        new Aluno(2, 'Maria', "98765432109", "maria@teste.com", '25/05/1995'),
        new Aluno(3, 'Pedro', "45678912309", "pedro@teste.com", '10/11/1997'),
        new Aluno(4, 'Ana', "65432198709", "ana@teste.com", '03/09/1999'),
        new Aluno(5, 'Lucas', "32165498709", "lucas@teste.com", '21/07/1996')
    ];
  }
}
