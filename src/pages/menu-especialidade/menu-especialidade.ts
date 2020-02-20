import { EspecialidadeDTO } from './../../models/especialidade.dto';
import { API_CONFIG } from './../../config/api.config';
import { EspecialidadeService } from './../../services/domain/especialidade.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-menu-especialidade',
  templateUrl: 'menu-especialidade.html',
})
export class MenuEspecialidadePage {

  baseUrl: string = API_CONFIG.baseUrl;
  items: EspecialidadeDTO[];
  formGroup: FormGroup;
  especialidade: EspecialidadeDTO;


  constructor(public especialidadeService: EspecialidadeService,public formBuilder: FormBuilder,public navCtrl: NavController){
    this.formGroup = this.formBuilder.group({
      nome: ['',[Validators.required]]
    });


  }

  ionViewDidLoad(){
   this.especialidadeService.findAll()
    .subscribe(response => {
      this.items = response
    },
    error => {});
  }

  cadastrarEspecialidade(){
    this.especialidadeService.insert(this.formGroup.value)
      .subscribe(response => {
        console.log("Registrou");
        
        this.items.push(this.formGroup.value);
       this.ionViewDidLoad();
      },error => {});
  }

  delete(obj: EspecialidadeDTO){
    let position = this.items.findIndex(x => x.id == obj.id)

    this.especialidadeService.delete(obj)
      .subscribe(response => {
        console.log(position);
        console.log("deletou");
       this.items.splice(position,1);
      },error => {console.log("erro")})

  }


}
