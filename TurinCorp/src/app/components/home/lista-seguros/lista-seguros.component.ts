import { Component, OnInit } from '@angular/core';
import { Seguro } from "src/app/model/seguro/seguro";
import { SegurosService } from 'src/app/services/seguros.service';

@Component({
  selector: 'app-lista-seguros',
  templateUrl: './lista-seguros.component.html',
  styleUrls: ['./lista-seguros.component.css']
})
export class ListaSegurosComponent implements OnInit {

  loading: boolean;
  // placeholder, will be replaced at runtime
  seguros : Seguro[] = [
    {_id : "1",
    name : "Seguro 1",
    imgurl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
    brief: "Description Seguro 1 lorem lorem lorem lorem",
    description: "empty"},

    {_id : "2",
    name : "Seguro 2",
    imgurl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
    brief: "Description Seguro 2 lorem lorem lorem lorem",
    description: "empty"},

    {_id : "3",
    name : "Seguro 3",
    imgurl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
    brief: "Description Seguro 3 lorem lorem lorem lorem",
    description: "empty"},
  ];

  constructor(private seguroService:SegurosService) { }

  ngOnInit(): void {
    this.loading = true;
    this.seguroService.fetchAllSeguros()
    .subscribe(seguros => {
      this.seguros = seguros
      this.loading = false
    })
  }

}
