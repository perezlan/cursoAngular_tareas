import { Component } from '@angular/core';
import { TareasService } from '../services/tareas.service';
import { Tarea } from '../interface/tarea.interface';


@Component({
  selector: 'app-listado-tareas',
  templateUrl: './listado-tareas.component.html',
  styleUrls: ['./listado-tareas.component.css']
})
export class ListadoTareasComponent {
  
  constructor(private tareasService:TareasService){
    console.log(tareasService.tareas)
  }

  get tareas(){
    return this.tareasService.tareas;
  }

  delete(nombre:Tarea){
    this.tareasService.deleteTarea(nombre.tarea)
  }

  complete(nombre:Tarea){
    this.tareasService.completeTarea(nombre.tarea)
  }
}
