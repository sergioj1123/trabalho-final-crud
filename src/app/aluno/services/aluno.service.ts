import { Injectable } from '@angular/core';

import { Aluno } from '../../shared/models/aluno.model';

const LS_CHAVE: string = "alunos";

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor() { }

  listarTodos(): Aluno[] {
    const alunos = localStorage[LS_CHAVE];
    return alunos ? JSON.parse(alunos) : [];
  }

  inserir(aluno: Aluno): void {
    const alunos = this.listarTodos();
    aluno.id = new Date().getTime();
    alunos.push(aluno);
    localStorage[LS_CHAVE] = JSON.stringify(alunos);
  }
  listarPorId(id: number): Aluno | undefined {
    const alunos: Aluno[] = this.listarTodos();
    return alunos.find(aluno => aluno.id === id);
  }
  alterar(aluno: Aluno): void {
    const alunos: Aluno[] = this.listarTodos();
    alunos.forEach((obj, index, objs) => {
      if (aluno.id === obj.id) {
        objs[index] = aluno;
      }
    });
    localStorage[LS_CHAVE] = JSON.stringify(alunos);
  }
  remover(id: number): void {
    let alunos: Aluno[] = this.listarTodos();
    alunos = alunos.filter(aluno => aluno.id !== id);
    localStorage[LS_CHAVE] = JSON.stringify(alunos);
  }
}
