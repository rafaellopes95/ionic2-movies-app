//importanto os ts - as classes de ts - para o app
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { FavoritosPage } from '../pages/favoritos/favoritos';
import { RecentesPage } from '../pages/recentes/recentes';
import { DetalhesPage } from '../pages/detalhes/detalhes';
import { TabsPage } from '../pages/tabs/tabs';
import { MovieProvider } from '../providers/movie-provider'

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    FavoritosPage,
    RecentesPage,
    DetalhesPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      mode: 'md' //material design, se n tiver o mode ele pega o default do dispositivo
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    FavoritosPage,
    RecentesPage,
    DetalhesPage,
    TabsPage
  ],
  providers: [MovieProvider]
})
export class AppModule {}
