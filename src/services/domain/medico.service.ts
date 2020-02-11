import { API_CONFIG } from '../../config/api.config';
import { MedicoDTO } from '../../models/medico.dto';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";


@Injectable()
    export class MedicoService{
        constructor(public http: HttpClient){

        }


        findAll() : Observable<MedicoDTO[]> {
            return this.http.get<MedicoDTO[]>(`${API_CONFIG.baseUrl}/medico`);
        }
    }

