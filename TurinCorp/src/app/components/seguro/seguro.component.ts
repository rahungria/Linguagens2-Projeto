import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Seguro } from 'src/app/model/seguro/seguro';
import { SegurosService } from 'src/app/services/seguros.service';

@Component({
  selector: 'app-seguro',
  templateUrl: './seguro.component.html',
  styleUrls: ['./seguro.component.css']
})
export class SeguroComponent implements OnInit {

  loading: boolean = true;

  seguro : Seguro =
    {_id : "1",
    name : "Seguro 1 abcdef",
    imgurl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
    brief: "Description Seguro 1 lorem lorem lorem lorem",
    description: "empty"}

  constructor(private route:ActivatedRoute, private segurosService:SegurosService) { }

  ngOnInit(): void {
    this.loading = true;
    this.route.paramMap.subscribe( (params) => {
      if (params.has("id")){
        this.segurosService.fetchSeguro(params.get("id")).subscribe(
          response => {
            this.seguro = response.content.seguro;
            this.loading = false;
          },
          error => {
            console.log(error.error);
            // redirect to some 404 screen
          }
        )
      }
    })
  }

}
