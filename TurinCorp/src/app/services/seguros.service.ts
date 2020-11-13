import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Seguro } from '../model/seguro/seguro';

@Injectable({
  providedIn: 'root'
})
export class SegurosService {

  constructor(private http:HttpClient) { }

  public fetchSeguro(name:string) {
    return this.http.get
    <{
      meta: {
        statusCode: Number,
        message: String,
      },
      content: {
        seguro: Seguro
      }
    }>
    (`${environment.protocol}://${environment.api_uri}/api/seguro/${name}`);
  }
}
