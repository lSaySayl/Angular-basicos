import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán América'];
  heroeBorrado: string = "";
  personas: string[] = ['Fernando', 'Juan', 'Pedro', 'Laura', 'Jorge'];
  personaBorrada: string = "";
  animales: string[] = ['Perro', 'Gato', 'Rata', 'Conejo', 'Tortuga'];
  animalBorrado: string = ""


  borrarHeroe() {
    const heroeBorrado = this.heroes.pop() || "";
    this.heroeBorrado = heroeBorrado;
  }

  borrarPersona() {
    const personaBorrada = this.personas.shift() || "";
    this.personaBorrada = personaBorrada;

  }

  borrarAnimal () {
    const animalBorrado = this.animales.pop () || "";
    this.animalBorrado = animalBorrado

  }


}
