import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'scheduler-app';
  loading = true;

  constructor(private translateService: TranslateService) {
    this.translateService.langs = [ 'en', 'ru'];
    this.translateService.setDefaultLang('en');
    translateService.setDefaultLang('en');
    translateService.use('en');
  }

  ngOnInit() {
    this.showLoading();
  }

  showLoading() {
    this.loading = false;
    setTimeout(() => {
      this.loading = true;
    }, 2000);
  }
}
