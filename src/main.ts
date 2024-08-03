import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { StringI18n } from '@reyadeyat/haseb';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Hello from {{ name }} {{stringi18n.get("ar")}}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
  `,
})
export class App {
  name = 'Angular';
  stringi18n: StringI18n = new StringI18n({ ar: 'رياضيات', en: 'mathematics' });
}

bootstrapApplication(App);
