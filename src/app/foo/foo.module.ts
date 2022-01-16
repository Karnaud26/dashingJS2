import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooComponent } from './foo.component';
import { BarComponent } from './bar/bar.component';
import { FooDirective } from '../foo.directive';



@NgModule({
  declarations: [FooComponent, BarComponent, FooDirective],
  imports: [
    CommonModule
  ],
  exports: [
    BarComponent,
    FooComponent
  ]
})
export class FooModule { }
