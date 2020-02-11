import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TelaMenuPage } from './tela-menu';

@NgModule({
  declarations: [
    TelaMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(TelaMenuPage),
  ],
})
export class TelaMenuPageModule {}
