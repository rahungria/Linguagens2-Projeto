import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Seguro } from '../model/seguro/seguro';

import { pipe } from "rxjs"
import { map } from "rxjs/operators"

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
      content?: {
        seguro: Seguro
      }
    }>
    (`${environment.protocol}://${environment.api_uri}/api/seguro/${name}`);
  }

  public fetchAllSeguros(limit:number=3)
  {
    return this.http.get
    <{
      meta: {
        statusCode: Number,
        msg: String
      },
      content?: {
        seguros: Seguro[]
      }
    }>
    (`${environment.protocol}://${environment.api_uri}/api/seguro?limit=${limit}`)
    .pipe(
      map(res => {
        if (res.content)
          return res.content.seguros
      })
    )
  }
}
