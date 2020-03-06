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
  pacienteParam: PacienteDTO;

  nome: String = "";
  telefone1: String = "";
  endereco: String = "";
  nascimento: String = "";
  email: String = "";


  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public servicePaciente: PacienteService) {

    this.formGroup = this.formBuilder.group({
      nome: ['', [Validators.required]],
      telefone1: ['', []],
      endereco: [''],
      nascimento: [''],
      email: ['', [Validators.required]]
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPacientePage');
    this.pacienteParam = this.navParams.get('paciente');
    console.log(this.pacienteParam);
    this.carregarObjeto();
    this.edit();
  }

  insert() {
    this.servicePaciente.insert(this.formGroup.value).subscribe(response => {

    }, error => { });


  }

  insertOrUpdate(){
    if(this.pacienteParam.id == ""){
      this.insert();
    }
    else{
      this.update();
    }
  }

  update() {
    this.servicePaciente.update(this.pacienteParam.id, this.formGroup.value).subscribe(
      response => { this.pacienteParam.id = "";

      }, error => { }
    );
  }

  carregarObjeto() {
    this.nome = this.pacienteParam.nome;
    this.telefone1 = this.pacienteParam.telefone1;
    this.endereco = this.pacienteParam.endereco;
    this.nascimento = this.pacienteParam.nascimento;
    this.email = this.pacienteParam.email;
    console.log(this.nome);
  }

  edit() {
    this.formGroup = this.formBuilder.group({
      nome: [this.nome, [Validators.required]],
      telefone1: [this.telefone1, []],
      endereco: [this.endereco],
      nascimento: [this.nascimento],
      email: [this.email, [Validators.required]]
    })
  }

  voltar(){
    this.navCtrl.setRoot('MenuPacientePage');
  }


}
