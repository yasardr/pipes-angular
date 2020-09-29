import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre = 'Capitán América';
  nombre2 = 'yAsAr altAMiranO aBASolO';
  personajes = ['Ironman', 'Spiderman', 'Thor', 'Loki', 'Groot'];
  PI: number = Math.PI;
  porcentaje = 0.234;
  salario = 1234.5;
  fecha: Date = new Date();
  activar = true;

  idioma = 'es';
  videoUrl = 'https://www.youtube.com/embed/hpBBvzrtr60';

  valorPromesa = new Promise<string>( resolve => {
    setTimeout( () => {
      resolve('llego la data');
    }, 4500);
  });

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  };

}
