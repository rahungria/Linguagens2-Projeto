import { Component, OnInit } from '@angular/core';
import { Seguro } from "../model/seguro";
import { Input } from "@angular/core";

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
