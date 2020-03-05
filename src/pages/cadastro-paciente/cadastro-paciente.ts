import { PacienteService } from './../../services/domain/paciente.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PacienteDTO } from '../../models/paciente.dto';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the CadastroPacientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-paciente',
  templateUrl: 'cadastro-paciente.html',
})
export class CadastroPacientePage {

  paciente: PacienteDTO;
  formGroup: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public servicePaciente: PacienteService) {
    this.formGroup = this.formBuilder.group({
      nome: ['', [Validators.required]],
      telefone1: ['',[]],
      endereco: [''],
      nascimento: [''],
      email: ['', [Validators.required]]
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPacientePage');
  }

  insert(paciente: PacienteDTO) {
    this.servicePaciente.insert(this.formGroup.value).subscribe(response =>{

    },error => {});

  }


}
