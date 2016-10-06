import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',     //usado para conseguir encapsular html, css e js de um componente sem interferir os outros
  templateUrl: 'favoritos.html' //template ao qual esse typescript se refere
})
export class FavoritosPage {

  constructor(public navCtrl: NavController) {

  }

}
