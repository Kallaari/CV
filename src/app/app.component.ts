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

  info = [new GroupItem('18/09/1996', 'las la-birthday-cake'),
  new GroupItem('Genova (GE)', 'las la-map-marker-alt'),]

  softSkills = [new GroupItem('Autonomy', '', 8),
  new GroupItem('Self-confidence', '', 8),
  new GroupItem('Flexibility', '', 10),
  new GroupItem('Stress Endurance', '', 9),
  new GroupItem('Organization', '', 9),
  new GroupItem('Info Management', '', 9),
  new GroupItem('Precision', '', 9),
  new GroupItem('Learning', '', 9),
  new GroupItem('Goals Achievement', '', 9),
  new GroupItem('Initiative', '', 10),
  new GroupItem('Communication', '', 9),
  new GroupItem('Problem Solving', '', 9),
  new GroupItem('Team Work', '', 10),
  new GroupItem('Leadership', '', 9)];

  languages = [new GroupItem('Mother Tongue: Italian English: C1 (IELTS)', 'las la-language')];

  futures  = [new GroupItem('Economic Sector: Information Systems', 'las la-chart-line'),
  new GroupItem('Career Field: Engineering and Programming / Game Design', 'las la-user-tie'),
  new GroupItem('Preferred Cities : Genova (IT), Milano (IT)', 'las la-city'),
  new GroupItem('Desired Job: Game Designer / Game Developer', 'las la-briefcase'),
  new GroupItem('Availability for business travels: Yes, even frequently', 'las la-luggage-cart'),
  new GroupItem('Availability to relocate abroad: Yes, even in non-European countries ', 'las la-globe-europe')];
}
