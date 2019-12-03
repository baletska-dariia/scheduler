import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from './widgets/alert/alert.component';
import { ModalComponent } from './widgets/modal/modal.component';
import { DemoMaterialModule } from '../material.module';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
    declarations: [AlertComponent, ModalComponent],
    imports: [CommonModule, FormsModule, DemoMaterialModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [HttpClient]
        }
    })],
    exports: [ModalComponent, TranslateModule],
    entryComponents: [ModalComponent],
})
export class SharedModule {}
