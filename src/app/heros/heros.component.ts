import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {


  constructor() { }
  //Creating a hero with type Hero and assigning the values
  hero : Hero = 
  {
    id : 1, 
    name : "Mani"
  }

  ngOnInit(): void {
  }

}
