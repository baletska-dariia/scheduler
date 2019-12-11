import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material';

import { DynamicComponentLoader } from './dynamic-component-loader/dynamic-component-loader.service';
import { DialogComponent } from './dynamic-modules/dialog/dialog.component';
import { MessageComponent } from './dynamic-modules/message/message.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('testOutlet', { read: ViewContainerRef, static: true })
  testOutlet: ViewContainerRef | undefined;
  title = 'scheduler-app';
  loading = true;

  constructor(private translateService: TranslateService, private dynamicComponentLoader: DynamicComponentLoader, private dialog: MatDialog) {
    this.translateService.langs = ['en', 'ru'];
    this.translateService.setDefaultLang('en');
    translateService.setDefaultLang('en');
    translateService.use('en');
  }

  loadComponent() {
    this.dynamicComponentLoader
      .getComponentFactory<MessageComponent>('message')
      .subscribe({
        next: componentFactory => {
          if (!this.testOutlet) {
            return;
          }

          const ref = this.testOutlet.createComponent(componentFactory);
          ref.changeDetectorRef.detectChanges();
        },
        error: err => {
          console.warn(err);
        }
      });
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

  showDialog() {
    this.dialog.open(DialogComponent);
  }
}
