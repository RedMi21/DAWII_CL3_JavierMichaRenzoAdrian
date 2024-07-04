import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  private apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private httpClient: HttpClient) { }

  getHumanCharacters(): Observable<any[]> {
    return this.httpClient.get<any>(this.apiUrl).pipe(
      map(response => response.results.filter((character: any) => character.species === 'Human'))
    );
  }
}
