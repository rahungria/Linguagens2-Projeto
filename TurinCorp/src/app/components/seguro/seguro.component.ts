import { Component, OnInit } from '@angular/core';

import { Seguro } from 'src/app/model/seguro/seguro';

@Component({
  selector: 'app-seguro',
  templateUrl: './seguro.component.html',
  styleUrls: ['./seguro.component.css']
})
export class SeguroComponent implements OnInit {

  seguro : Seguro = 
    {_id : "1",
    name : "Seguro 1 abcdef",
    imgurl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
    brief: "Description Seguro 1 lorem lorem lorem lorem",
    description: "empty"}
  

  constructor() { }

  ngOnInit(): void {
  }

}
