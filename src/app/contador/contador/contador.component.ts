import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ title }}</h1>
    <h3>
      La base es: <strong> {{ base }} </strong>
    </h3>

    <button (click)="interaccion(base)">+ {{ +base }}</button>

    <span> {{ number }} </span>

    <button (click)="interaccion(-base)">- {{ base }}</button>
  `,
})


export class ContadorComponent {
  public title: string = 'Contador App';
  public number: number = 10;
  public base: number = 5;

  interaccion = (valor: number): number => {
    return (this.number += valor);
  };
}
