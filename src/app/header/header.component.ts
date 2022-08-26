import { Component, OnInit } from '@angular/core';
import {faHouse, faAddressCard, faInfo, faList} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faHouse = faHouse;
  faAdressCard = faAddressCard;
  faInfo = faInfo;
  faList = faList;

  constructor() { }

  ngOnInit(): void {
  }

}
