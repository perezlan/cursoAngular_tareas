import { Injectable } from "@angular/core";
import { Tarea } from "../interface/tarea.interface";

@Injectable()
export class TareasService{

    tareas:Array<Tarea>=[
    {
        tarea:"Barrer",
        completada:false,
    },
        {tarea:"Trapear",
        completada:false,
    },
        {tarea:"Cocinar",
        completada:false,
    },
        {tarea:"Leer",
        completada:false,
    },
        {tarea:"Comprar",
        completada:false,
    },
    ];

    deleteTarea(nombreTarea:String){
        this.tareas = this.tareas.filter(tarea => tarea.tarea!=nombreTarea)
    }
}