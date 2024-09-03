import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Aluno } from '../../shared/models/aluno.model';
import { Router, ActivatedRoute } from '@angular/router';
import { AlunoService } from '../services/aluno.service';

@Component({
  selector: 'app-editar-aluno',
  templateUrl: './editar-aluno.component.html',
  styleUrl: './editar-aluno.component.css'
})
export class EditarAlunoComponent implements OnInit {
  @ViewChild('formAluno') formAluno!: NgForm;
  aluno: Aluno = new Aluno();
  constructor(
    private alunoService: AlunoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    const res = this.alunoService.listarPorId(id);
    if(res!== undefined){
      this.aluno = res;
    }else{
      throw new Error('Aluno não encontrado');
    }
  }

  atualizar(): void {
    if (this.formAluno.form.valid) {
      this.alunoService.alterar(this.aluno);
      this.router.navigate(['/alunos']);
    }
  }

}
