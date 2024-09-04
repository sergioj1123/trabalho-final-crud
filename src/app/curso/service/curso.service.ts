import { Injectable } from '@angular/core';
import { Curso } from '../../shared/models/curso.model';

const LS_CHAVE = 'cursos';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor() { }

  listarTodos(): Curso[] {
    const cursos = localStorage[LS_CHAVE];
    return cursos ? JSON.parse(cursos) : [];
  }

  inserir(curso: Curso): void {
    const cursos = this.listarTodos();
    curso.id = new Date().getTime();
    cursos.push(curso);
    localStorage[LS_CHAVE] = JSON.stringify(cursos);
  }

  listarPorId(id: number): Curso | undefined {
    const cursos: Curso[] = this.listarTodos();
    return cursos.find(curso => curso.id === id);
  }

  alterar(curso: Curso): void {
    const cursos: Curso[] = this.listarTodos();
    cursos.forEach((obj, index, objs) => {
      if (curso.id === obj.id) {
        objs[index] = curso;
      }
    });
    localStorage[LS_CHAVE] = JSON.stringify(cursos);
  }

  remover(id: number): void {
    let cursos: Curso[] = this.listarTodos();
    cursos = cursos.filter(curso => curso.id !== id);
    localStorage[LS_CHAVE] = JSON.stringify(cursos);
  }
}
