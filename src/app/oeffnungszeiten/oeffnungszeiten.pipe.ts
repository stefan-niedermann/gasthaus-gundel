import { Pipe, PipeTransform } from '@angular/core';
import { Oeffnungszeit } from 'app/oeffnungszeiten/oeffnungszeiten';
import { DecimalPipe } from '@angular/common';

@Pipe({
  name: 'oeffnungszeiten'
})
export class OeffnungszeitenPipe implements PipeTransform {

  decimal: DecimalPipe = new DecimalPipe('de-DE');

  transform(value: Oeffnungszeit[], args?: any): any {
    if (value.length < 1) {
      return 'Ruhetag';
    }
    let oeffnungszeitenStr = '';
    value.map((oeffnungszeit: Oeffnungszeit) => {
      oeffnungszeitenStr +=
        `${this.decimal.transform(oeffnungszeit.von.h, '2.0')}:${this.decimal.transform(oeffnungszeit.von.m, '2.0')} Uhr`;
      if (oeffnungszeit.bis) {
        oeffnungszeitenStr +=
        ` - ${this.decimal.transform(oeffnungszeit.bis.h, '2.0')}:${this.decimal.transform(oeffnungszeit.bis.m, '2.0')} Uhr`;
      } else {
        oeffnungszeitenStr += ' - 00:00 Uhr';
      }
      oeffnungszeitenStr += ', '
    });
    if (oeffnungszeitenStr.endsWith(', ')) {
      oeffnungszeitenStr = oeffnungszeitenStr.substr(0, oeffnungszeitenStr.length - 2);
    }
    return oeffnungszeitenStr;
  }

}
