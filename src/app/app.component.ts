import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'Web_Bravekey';

  ngOnInit() {
    var num1 = 10
    var num2 = 2
    const hora = new Date();

    window.alert("Bienvenido a la landing page de Bravekey, realizada con Angular y Sass.\n" + 
    "Para demostrar el funcionamiento de Angular, puedes ver estas 2 variables: " + num1 + " y " + num2 + ". La suma de ambas es: " + (num1 + num2) + "\n\n" +
    "La hora actual es: " + hora)
  }

}