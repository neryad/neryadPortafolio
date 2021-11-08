import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoPageComponent } from './components/no-page/no-page.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [NoPageComponent],
  imports: [CommonModule, ComponentsModule],
  exports: [NoPageComponent],
})
export class SharedModule {}
