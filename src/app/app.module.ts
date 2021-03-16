import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { createCustomElement } from '@angular/elements';
import { IdenticonComponent } from './identicon/identicon.component';

@NgModule({
  declarations: [IdenticonComponent],
  imports: [ BrowserModule],
  providers: [],
  entryComponents: [IdenticonComponent],
})



export class AppModule {
  constructor(private componentInjector: Injector) {}

  ngDoBootstrap() {

    const el = createCustomElement(IdenticonComponent, {
      injector: this.componentInjector
    });
    customElements.define('polkadot-web-identicon',el)

  }
}

