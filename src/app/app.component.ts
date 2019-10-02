import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'scheduler-app';
  loading = true;

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
