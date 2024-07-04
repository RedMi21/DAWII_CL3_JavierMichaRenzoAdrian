import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../../Services/rick-and-morty.service';

@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styleUrl: './question1.component.css'
})
export class Question1Component implements OnInit {

  humanCharacters: any[] = [];

  constructor(private rickAndMortyService: RickAndMortyService) { }

  ngOnInit(): void {
    this.rickAndMortyService.getHumanCharacters().subscribe(data => {
      this.humanCharacters = data;
    });
  }
}
