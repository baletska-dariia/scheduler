import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './widgets/button/button.component';
import { DeadlinePipe } from './pipes/deadline-pipe.pipe';

@NgModule({
  declarations: [ButtonComponent, DeadlinePipe],
  imports: [CommonModule]
})
export class SharedModule {}
