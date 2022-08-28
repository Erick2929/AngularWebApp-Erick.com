import { Component, OnInit } from '@angular/core';
import {faYoutube , faGooglePlusG , faFacebook, faLinkedinIn, faTwitter, faSkype} from '@fortawesome/free-brands-svg-icons'
import { faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  faYoutube = faYoutube;
  faGooglePlusG = faGooglePlusG;
  faFacebook = faFacebook;
  faLinkedinIn = faLinkedinIn;
  faTwitter = faTwitter;
  faEnvelope = faEnvelope;
  faSkype = faSkype;
  faPhone = faPhone;


  constructor() { }

  ngOnInit(): void {
  }

}
