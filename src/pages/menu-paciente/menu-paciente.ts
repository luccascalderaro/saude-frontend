import { PacienteService } from './../../services/domain/paciente.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PacienteDTO } from '../../models/paciente.dto';

/**
 * Generated class for the MenuPacientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu-paciente',
  templateUrl: 'menu-paciente.html',
})
export class MenuPacientePage {

  pacientes: PacienteDTO[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public pacienteService: PacienteService) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPacientePage');
    this.pacienteService.findall().subscribe(response => {
      this.pacientes = response;
    },error => {});

  }



}
