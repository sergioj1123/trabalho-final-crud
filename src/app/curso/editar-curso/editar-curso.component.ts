import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Curso } from '../../shared/models/curso.model';
import { CursoService } from '../service/curso.service';

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrl: './editar-curso.component.css'
})
export class EditarCursoComponent {

  @ViewChild('formCurso') formCurso!: NgForm;

  curso: Curso = new Curso();

  constructor(
    private cursoService: CursoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route. snapshot.params['id'];
    const res = this.cursoService.listarPorId(id);
    if (res) {
      this.curso = res;
    }else{
      throw new Error('Curso não encontrado');
    }
  }
  atualizar(): void {
    if (this.formCurso.form.valid) {
      this.cursoService.alterar(this.curso);
      this.router.navigate(['/cursos/listar']);
  }
}
}
