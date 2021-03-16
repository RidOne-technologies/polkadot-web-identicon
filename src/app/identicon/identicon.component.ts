import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import * as jdenticon from 'jdenticon';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { polkadotIcon, beachballIcon } from '@polkadot/ui-shared/icons';
import { Circle } from '@polkadot/ui-shared/icons/types';


declare const VERSION: string;

@Component({
  //selector: 'identicon',
  templateUrl: './identicon.component.html',
  styleUrls: ['./identicon.component.css']
})
export class IdenticonComponent {

  @Input() address: string;
  @Output() greet = new EventEmitter();


  polkadotIcon!: SafeHtml;
  publicKey = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY';
  publicKey2 = '5GNJqTPyNqANBkUVMN1LPPrxXnFouWXoe2wNSmmEoLctxiZY';
  publicKey3 = '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty';
  beachBallIcon!: SafeHtml;
  emptyIcon!: SafeHtml;
  jdentIcon!: SafeHtml;

  constructor(
    //@Inject(DomSanitizer) sanitizer: DomSanitizer
    sanitizer: DomSanitizer
  ) {
    this.polkadotIcon = sanitizer.bypassSecurityTrustHtml(
      this.renderPolkadotIdenticon(this.publicKey, '', false, 100, '')
    );
    this.beachBallIcon = sanitizer.bypassSecurityTrustHtml(
      this.renderBeachballIdenticon(this.publicKey, false, 70)
    );
    this.emptyIcon = sanitizer.bypassSecurityTrustHtml(
      this.renderEmptyIdenticon(this.publicKey, false, 70)
    );

    this.jdentIcon = sanitizer.bypassSecurityTrustHtml(
      this.renderJidenticon(this.publicKey, 70)
    );
  }

  renderCircle({ cx, cy, fill, r }: Circle, key: number) {
    let svg = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="${cx}"  cy="${cy}" fill="${fill}"  r="${r}" />
                </svg>`;
    return svg;
  }

  renderPolkadotIdenticon(address: string, className = '', isAlternative = false, size: number, style: string) {
    return `<svg
              class=${className}
              height=${size}
              id=${address}
              name=${address}
              style=${style}
              viewBox='0 0 64 64'
              width=${size}>
                    ${polkadotIcon(address, { isAlternative })
        .map(this.renderCircle)}
            </svg>`;
  }

  renderBeachballIdenticon(address: string, isAlternative = false, size: number) {
    let generatedBeachballIcon =
      beachballIcon(address,
        { isAlternative: isAlternative, size },
      );
    console.log(generatedBeachballIcon.innerHTML);
    return generatedBeachballIcon.innerHTML;
  }

  renderEmptyIdenticon(address: string, isAlternative = false, size: number) {
    return `<div>
              <svg :height="size" viewBox="0 0 64 64" :width="size" >
                <circle cx="50%" cy="50%" fill="#eee" r="50%" />
              </svg>
            </div>`;
  }

  renderJidenticon(address: string, size: number) {
    return jdenticon.toSvg(address, size);
  }


  doGreet() {
    this.greet.emit("New Value : Qwertyuiop")
  }
}
