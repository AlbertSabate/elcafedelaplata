import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IntroComponent } from './intro/intro.component';
import { HistoryComponent } from './history/history.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IntroComponent,
    HistoryComponent,
    MenuComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
