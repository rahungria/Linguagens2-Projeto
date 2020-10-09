import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core";

import { Seguro } from 'src/app/model/seguro/seguro';

@Component({
  selector: 'app-seguro-card',
  templateUrl: './seguro-card.component.html',
  styleUrls: ['./seguro-card.component.css']
})
export class SeguroCardComponent implements OnInit {

  @Input() seguro : Seguro;

  constructor() { }

  ngOnInit(): void {
  }

}
