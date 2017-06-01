import { Component, OnInit, ElementRef } from '@angular/core';
import $ from 'jquery/dist/jquery';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.sass']
})
export class IntroComponent implements OnInit {
  logo = '/assets/images/logos/elcafe-logo.svg';
  title = 'el Café de la Plata';
  subtitle = 'Club gastronomico con magnífica terraza al lado del mar. Comoda e informal.';
  location = 'Port Esportiu d\'Aiguadolç (Sitges)';
  phone = '+34 93 894 90 81';

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.adjustSize();
    $(window).resize(() => {
      this.adjustSize();
    });
  }

  adjustSize () {
    $(this.el.nativeElement).find('section').height($(window).height());
  }

}
