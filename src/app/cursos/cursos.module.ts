import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosListarComponent } from './cursos-listar/cursos-listar.component';
import { CursosDetailComponent } from './cursos-detail/cursos-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CursosListarComponent, CursosDetailComponent],
  exports: [CursosListarComponent, CursosDetailComponent]
})
export class CursosModule { }
