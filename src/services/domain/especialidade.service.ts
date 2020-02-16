import { API_CONFIG } from './../../config/api.config';
import { EspecialidadeDTO } from './../../models/especialidade.dto';
import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from "@angular/core";


@Injectable()

export class EspecialidadeService {

    constructor(public http: HttpClient) {

    }

    findAll(): Observable<EspecialidadeDTO[]> {
        return this.http.get<EspecialidadeDTO[]>(`${API_CONFIG.baseUrl}/especialidades`)
    }

    insert(obj: EspecialidadeDTO) {
        return this.http.post(`${API_CONFIG.baseUrl}/especialidades`,
            obj,
            {
                observe: 'response',
                responseType: 'text'
            }
        );
    }

}
