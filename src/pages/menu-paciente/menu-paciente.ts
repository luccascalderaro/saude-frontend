import { PacienteService } from './../../services/domain/paciente.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PacienteDTO } from '../../models/paciente.dto';
import { isBlank } from 'ionic-angular/umd/util/util';
import { FormGroup, FormBuilder } from '@angular/forms';

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
  pacienteDto: PacienteDTO = {id: '',nome:'',telefone1:'',endereco:'',email:'',nascimento: '' } ;
  formGroup: FormGroup;
  nomeP: String;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder,
    public pacienteService: PacienteService) {

      this.formGroup = this.formBuilder.group({
        nome: ['']
      })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPacientePage');
    this.carregarLista();

  }

  carregarLista(){
    this.pacienteService.findall().subscribe(response => {
      this.pacientes = response;
    },error => {});

  }


  toCadastroPaciente(){
    this.navCtrl.setRoot('CadastroPacientePage',{paciente: this.pacienteDto});
  }

  toEditPaciente(paciente: PacienteDTO){

    this.navCtrl.setRoot('CadastroPacientePage',{paciente: paciente});
  }

  pesquisar(){

    this.nomeP = this.formGroup.controls['nome'].value;
    console.log(this.nomeP);

    this.pacienteService.findByNome(this.nomeP).subscribe(response =>{
      this.pacientes = response;
      
    },error =>{});

  }

  



}
