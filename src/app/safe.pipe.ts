import { Pipe, PipeTransform } from '@angular/core';
// tslint:disable-next-line:import-spacing
import  {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {
constructor(private sanitizer: DomSanitizer) {
}
  transform(url: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
