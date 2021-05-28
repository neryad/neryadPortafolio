import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoPageComponent } from './components/no-page/no-page.component';

@NgModule({
  declarations: [NoPageComponent],
  imports: [CommonModule],
  exports: [NoPageComponent],
})
export class SharedModule {}
