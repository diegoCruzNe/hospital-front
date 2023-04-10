import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: [],
})
export class PromesasComponent implements OnInit {
  ngOnInit(): void {
    /* const promesa = new Promise((resolve, reject) => {
      if (false) {
        resolve('Hola');
      } else {
        reject('algo salio mal');
      }
    });

    promesa
      .then((msg) => {
        console.log('hey terminé 🥵🍆', msg);
      })
      .catch((err) => console.log('error en el catch ->', err)); 

    console.log('fin del init');*/

    this.getUsuario().then((usuario) => {
      console.log(usuario);
    });
  }

  getUsuario() {
    const promesa = new Promise((resolve, reject) => {
      fetch('https://reqres.in/api/users?page=2')
        .then((resp) => resp.json())
        .then((body) => resolve(body.data));
    });
    return promesa;
  }
}
