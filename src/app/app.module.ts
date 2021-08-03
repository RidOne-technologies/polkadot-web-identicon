import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { createCustomElement } from '@angular/elements';
import {
  PolkadotIdentIconComponent,
  PolkadotIdentIconModule,
} from 'polkadot-angular-identicon';

@NgModule({
  declarations: [],
  imports: [BrowserModule, PolkadotIdentIconModule],
  providers: [],
  bootstrap: [],
})
export class AppModule {
  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    const c = createCustomElement(PolkadotIdentIconComponent, {
      injector: this.injector,
    });
    customElements.define('polkadot-web-identicon', c);
  }
}
