import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CardsComponent } from '../components/cards/cards.component';
import { Carros } from '../components/cards/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http: HttpClient) { }

  url ="http://localhost:3000/carros";

  getCarros():Observable <Carros[]>{

    return this.http.get<Carros[]>(this.url) //metodo GET do HTTP para requisição
  }

  saveCarros(carros: Carros): Observable<Carros>{
    return this.http.post<Carros>(this.url, carros);
  }

}
