import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { config } from 'src/app/core/config/config';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private readonly API_URL = `${config['authUrl']}`;

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
