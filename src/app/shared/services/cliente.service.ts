import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private readonly API_URL = 'https://bff.rocketconsultoria.tec.br/sso/auth';

  constructor(private httpClient: HttpClient) {}

  teste() {
    return 'teste';
  }

  public consultarClientesTop(): Observable<any> {
    return this.httpClient.get<any>(`${this.API_URL}/clientes`, {
      observe: 'response',
    });
  }
}
