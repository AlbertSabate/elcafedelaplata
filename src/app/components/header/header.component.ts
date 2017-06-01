import { Component, OnInit, ElementRef } from '@angular/core';
import $ from 'jquery/dist/jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  logo = '/assets/images/logos/elcafe-logo.svg';
  title = 'el Café de la Plata';
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
    $(this.el.nativeElement).find('header').height($(window).height());
  }

}
