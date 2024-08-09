import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { WorldLanguages, LanguageI18N, StringI18n } from '@reyadeyat/haseb';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
  <a href='https://reyadeyat.net/'>https://reyadeyat.net/</a><br/>
  <a href='https://www.npmjs.com/package/@reyadeyat/haseb/'>https://www.npmjs.com/package/&#64;reyadeyat/haseb</a><br/>
  <a href='https://github.com/Reyadeyat/stackblitz-i18n?tab=readme-ov-file'>https://github.com/Reyadeyat/stackblitz-i18n?tab=readme-ov-file</a>
    <h3>
      {{stringi18n.get("ar")}}<br/>
      {{stringi18n.get("en")}}<br/>
      {{stringi18n.get("he")}}<br/>
      {{stringi18n.get("ko")}}<br/>
      {{stringi18n.get("ja")}}<br/>
      {{stringi18n.get("hi")}}<br/>
      {{stringi18n.get("fa")}}<br/>
      {{stringi18n.get("de")}}<br/>
      {{stringi18n.get("es")}}<br/>
    </h3>
    <h2>Json</h2>
    <h3><pre>{{stringi18n_json}}</pre></h3>
    <h3>World languages</h3>
    @for (language of world_language_list; track language) {
      <h4>{{language.getCode() + " - " + language.getName() + " - " + language.getDirectionality()}}</h4>
    }
  `,
})
export class App {
  name = 'Angular';
  world_language_list: LanguageI18N[];
  stringi18n: StringI18n = /*new*/ StringI18n.fromJSON(
    {
      ar: 'انما بعثت لاتمم مكارم الأخلاق',
      en: 'I was sent to perfect good morals',
      he: 'נשלחתי למוסר טוב מושלם',
      ko: '나는 완전한 도덕적인 환경으로 보내졌습니다',
      ja: '私は完璧な道徳に送られました',
      hi: 'मुझे पूर्ण अच्छे संस्कारों के लिए भेजा गया था',
      fa: 'من مبعوث شدم تا اخلاق نیکو را کامل کنم',
      de: 'Ich wurde zu vollkommen guten Sitten geschickt',
      es: 'Me enviaron a tener buenos modales perfectos'
    }
  );
  stringi18n_json: string;
  constructor() {
    this.world_language_list = WorldLanguages.language_list;
    this.stringi18n_json = JSON.stringify(this.stringi18n, null, 4);
  }
}

bootstrapApplication(App);
