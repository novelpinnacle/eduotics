import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
    name: 'safe',
    standalone: false
})
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(html) {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
