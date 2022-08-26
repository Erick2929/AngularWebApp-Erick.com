import { Component, OnInit } from '@angular/core';
import {faYoutube , faGooglePlusG , faFacebook, faLinkedinIn, faTwitter} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

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


  constructor() { }

  ngOnInit(): void {
  }

}
