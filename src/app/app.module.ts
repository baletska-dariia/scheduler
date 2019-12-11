import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from './dashboard/dashboard.module';
import { DemoMaterialModule } from './material.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MatDialogModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import {
  DynamicComponentLoaderModule,
  DynamicComponentManifest
} from './dynamic-component-loader/dynamic-component-loader.module';
import { DialogComponent } from './dynamic-modules/dialog/dialog.component';
import { DialogModule } from './dynamic-modules/dialog/dialog.module';

const manifests: DynamicComponentManifest[] = [
  {
    componentId: 'message',
    path: 'dynamic-message', // some globally-unique identifier, used internally by the router
    loadChildren: () => import('./dynamic-modules/message/message.module').then(m => m.MessageModule)
  },
  {
    componentId: 'dialog',
    path: 'dialog',
    loadChildren: () => import('./dynamic-modules/dialog/dialog.module').then(m => m.DialogModule)
  }
];
// This array defines which "componentId" maps to which lazy-loaded module.

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DashboardModule,
    DemoMaterialModule,
    AuthModule,
    HttpClientModule,
    SharedModule,
    NgbModule,
    CommonModule,
    BrowserModule,
    DialogModule,

    MatDialogModule,
    NoopAnimationsModule,

    DynamicComponentLoaderModule.forRoot(manifests)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [NgbModule],
})
export class AppModule {
}
