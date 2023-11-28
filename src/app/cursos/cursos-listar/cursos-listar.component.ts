import { Component, OnInit } from '@angular/core';
import { Curso } from '../curso';
import { CursoDetail } from '../cursoDetail';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-cursos-listar',
  templateUrl: './cursos-listar.component.html',
  styleUrls: ['./cursos-listar.component.css']
})
export class CursosListarComponent implements OnInit {


  cursos: Array<Curso> = [];
  selected: boolean = false;
  selectedCurso!: CursoDetail;
  

  constructor(private cursoService:CursosService) { }

  getCursos(){
    
    this.cursoService.getCursos().subscribe(apiData =>{
      this.cursos=apiData;
    })
  }

  onSelected(curso: CursoDetail): void {
    this.selected = true;
    this.selectedCurso = curso;
  }

  ngOnInit() {
    this.getCursos();
  }

}
