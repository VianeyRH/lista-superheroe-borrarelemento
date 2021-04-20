import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent{
  heroes: string[] = ['Hulk', 'Saitama', 'Superman', 'Thor', 'Goku'];
  elim: string="";

  elimHero(): void{
    this.elim = this.heroes.pop();
  }
  mostrar():string{
    if(this.elim!="")
      return this.elim+" ha sido borrado de la lista";
  }
}