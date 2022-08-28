import { Component, OnInit } from '@angular/core';
import {faSkype} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  faSkype = faSkype;
  faPhone = faPhone;
  faEnvelope = faEnvelope;

  constructor() { }

  ngOnInit(): void {
  }

}
