import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tela-menu',
  templateUrl: 'tela-menu.html',
})
export class TelaMenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TelaMenuPage');
  }

  medico(){
    this.navCtrl.push('MedicoPage');
  }

  cadMedico(){
    this.navCtrl.push('CadastroMedicoPage');
  }

  menuEspecialidadePage(){
    this.navCtrl.push('MenuEspecialidadePage');
  }

  menuPacientePage(){
    this.navCtrl.push('MenuPacientePage');
  }

}
