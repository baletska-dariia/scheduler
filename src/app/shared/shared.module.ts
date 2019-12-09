import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './widgets/alert/alert.component';
import { ModalComponent } from './widgets/modal/modal.component';
import { DemoMaterialModule } from '../material.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
    declarations: [AlertComponent, ModalComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, DemoMaterialModule,
        HttpClientModule, BrowserAnimationsModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [HttpClient]
        }
    })],
    exports: [
        HttpClientModule,
        CommonModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        DemoMaterialModule,
        ModalComponent,
        TranslateModule],
    entryComponents: [ModalComponent],
})
export class SharedModule {}
