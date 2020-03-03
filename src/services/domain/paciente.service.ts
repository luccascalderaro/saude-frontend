import { Observable } from 'rxjs';
import { PacienteDTO } from './../../models/paciente.dto';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from '../../config/api.config';

@Injectable()

export class PacienteService{
    constructor(public http: HttpClient){

    }

    findall(): Observable<PacienteDTO[]>{
        return this.http.get<PacienteDTO[]>(`${API_CONFIG.baseUrl}/paciente`)
    }
    

    



}