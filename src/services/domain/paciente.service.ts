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

    insert(paciente: PacienteDTO){
       return this.http.post(`${API_CONFIG.baseUrl}/paciente`, paciente ,{
            observe: 'response',
            responseType: 'text'
        });
    }

    delete(paciente: PacienteDTO ){
        return this.http.delete(`${API_CONFIG.baseUrl}/pacintes/${paciente.id}`).subscribe(
            response => {}
        ,error => {});
    }

}