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

  }

  ngOnInit() {
    this.translateService.langs = [ 'en', 'ru'];
    this.translateService.setDefaultLang('ru');
    this.translateService.use(localStorage.getItem('lang'));
    this.showLoading();
  }
  showLoading() {
    this.loading = false;
    setTimeout(() => {
      this.loading = true;
    }, 2000);
  }
}
