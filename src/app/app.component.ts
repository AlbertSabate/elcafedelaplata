import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-cafe',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(translate: TranslateService) {
    translate.setDefaultLang('es');
    const browserLang = translate.getBrowserLang();

    translate.use(browserLang);
  }
}
