import { EspecialidadeService } from './../../services/domain/especialidade.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CadastroEspecialidadePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-especialidade',
  templateUrl: 'cadastro-especialidade.html',
})
export class CadastroEspecialidadePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public especialidadeService: EspecialidadeService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroEspecialidadePage');
  }

  

}
