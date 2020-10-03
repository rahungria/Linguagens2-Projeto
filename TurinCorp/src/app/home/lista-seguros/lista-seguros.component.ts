import { Component, OnInit } from '@angular/core';
import { Seguro } from "../../model/seguro";

@Component({
  selector: 'app-lista-seguros',
  templateUrl: './lista-seguros.component.html',
  styleUrls: ['./lista-seguros.component.css']
})
export class ListaSegurosComponent implements OnInit {

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
  constructor() { }

  ngOnInit(): void {
  }

}
