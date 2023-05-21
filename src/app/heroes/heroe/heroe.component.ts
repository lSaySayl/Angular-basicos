import { Component } from '@angular/core';

@Component( {
  selector: "app-heroe",
  templateUrl: "./heroe.component.html",


})

export class HeroeComponent {
  name: string = "Ironman"
  age: number = 24


  getName = ():string => {
    return `${this.name} - ${this.age.toString()}`

  }

  get nameCapitalizado(): string {
    return this.name.toUpperCase()
  }

  rename = ():string => {
    return  this.name = "Spiderman";

  }

  changeAge = ():void => {
    console.log("Hey")
    this.age = 22;

  }


}
