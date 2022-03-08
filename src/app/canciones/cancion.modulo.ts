import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ListacancionComponent } from "./listacancion/listacancion.component";


@NgModule({
    declarations: [
        ListacancionComponent,
        
    ],
    exports: [
        ListacancionComponent
    ],
    imports:[
        CommonModule
    ]

})
export class CancionesModulo{
}