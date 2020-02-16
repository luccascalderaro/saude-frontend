import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroEspecialidadePage } from './cadastro-especialidade';

@NgModule({
  declarations: [
    CadastroEspecialidadePage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroEspecialidadePage),
  ],
})
export class CadastroEspecialidadePageModule {}
