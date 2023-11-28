import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CursosService } from '../cursos.service';
import { CursoDetail } from '../cursoDetail';

@Component({
  selector: 'app-cursos-detail',
  templateUrl: './cursos-detail.component.html',
  styleUrls: ['./cursos-detail.component.css']
})
export class CursosDetailComponent implements OnInit {

  cursoid!:string;

  @Input() cursoDetail!: CursoDetail; 

  constructor(private route: ActivatedRoute ,private cursosService: CursosService) { }

  getCurso(){
    this.cursosService.getCurso(this.cursoid).subscribe(apiData=>{
      this.cursoDetail = apiData;
    })
  }

  ngOnInit() {
    if (this.cursoDetail == undefined){
      this.cursoid = this.route.snapshot.paramMap.get('id')!
      if (this.cursoid) {
        this.getCurso();
      }
    }
    console.log('Datos del cursoDetail:', this.cursoDetail);
  }

}
