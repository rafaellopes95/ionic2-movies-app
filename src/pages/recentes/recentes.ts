import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { DetalhesPage } from '../detalhes/detalhes';
import { MovieProvider } from '../../providers/movie-provider';

@Component({
  selector: 'page-recentes',
  templateUrl: 'recentes.html'
})
export class RecentesPage {

  private query:string;
  private movies:Array<any>;

  //o que é injectable deve ser colocado no constructor
  constructor(public navCtrl: NavController,
              public movieProvider: MovieProvider) {
    this.movies = [];
  }
    
  search() {
    this.movieProvider
        .search(this.query)
        .then((data) => {
          this.movies = data.results;
        }).catch(() => {
          this.movies = [];
        });
  }

  goToDetalhes(movie) {
    this.navCtrl.push(DetalhesPage, {
      'movie': movie //no atributo movie estou atribuindo o movie
    });//push coloca a classe no topo da pilha, e pop retira
  }
}
