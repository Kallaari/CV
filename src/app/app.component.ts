import { Component } from '@angular/core';
import { GroupItem } from './models/group-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cv';


  contats = [new GroupItem('Via Monte Zovetto 21/1A', 'las la-map-marked'),
  new GroupItem('+39 339 639 4098', 'las la-phone'),
  new GroupItem('lorenzo.terranova96@hotmail.it', 'las la-envelope'),
  new GroupItem('Kallaari', 'lab la-github')];

  info = [new GroupItem('18/09/1996 - 28 anni', 'las la-birthday-cake'),
  new GroupItem('Genova (GE)', 'las la-map-marker-alt'),]

  softSkills = [new GroupItem('Autonomia', '', 8),
  new GroupItem('Fiducia in se stessi', '', 9),
  new GroupItem('Flessibilità', '', 10),
  new GroupItem('Resistenza allo stress', '', 9),
  new GroupItem('Organizzazione', '', 9),
  new GroupItem('Gestire Informazioni', '', 9),
  new GroupItem('Precisione', '', 10),
  new GroupItem('Apprendimento', '', 9),
  new GroupItem('Conseguire obiettivi', '', 9),
  new GroupItem('Intraprendenza', '', 10),
  new GroupItem('Comunicazione', '', 10),
  new GroupItem('Problem solving', '', 10),
  new GroupItem('Team work', '', 10),
  new GroupItem('Leadership', '', 9)];

  languages = [new GroupItem('Inglese: C1', 'las la-language')];

  futures  = [new GroupItem('Settore Economico: Informatica/Elettronica', 'las la-chart-line'),
  new GroupItem('Area Professionale: Engineering e Progettazione / Game Design', 'las la-user-tie'),
  new GroupItem('Provincia Preferita: Genova / Milano', 'las la-city'),
  new GroupItem('Occupazione Desiderata: Game Designer / Game Developer', 'las la-briefcase'),
  new GroupItem('Disponibilità a trasferte: Sì, in numero limitato', 'las la-luggage-cart'),
  new GroupItem('Disponibilità a trasferirsi all estero: Sì, anche in paesi extraeuropei', 'las la-globe-europe')];
}
