import { API_CONFIG } from './../../config/api.config';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MedicoService } from '../../services/domain/medico.service';
import { MedicoDTO } from '../../models/medico.dto';


/**
 * Generated class for the MedicoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



@IonicPage()
@Component({
  selector: 'page-medico',
  templateUrl: 'medico.html',
})
export class MedicoPage {
  bucketUrl: string = API_CONFIG.baseUrl;
  items: MedicoDTO[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public medicoService: MedicoService) {
  }

  ionViewDidLoad() {
    this.medicoService.findAll().subscribe(response => {
      this.items = response
    }, error => { });

  }



}
