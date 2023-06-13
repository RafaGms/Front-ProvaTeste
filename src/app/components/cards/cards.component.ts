
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CardService } from 'src/app/service/card.service';
import { Carros } from './card';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  carros: Carros[] = [];
  formGroupAnuncio: FormGroup;

  constructor(private cardservice: CardService, private formBuilder: FormBuilder) {

    this.formGroupAnuncio = formBuilder.group({
      id: [''],
      name: [''],
      valor: [''],
      ano: [''],
      descricao: [''],
      imagem: ['']

    });
  }    // para o componente chamar o serviço

  ngOnInit(): void {
    this.loadAnuncio();
  }

  loadAnuncio() {
    this.cardservice.getCarros().subscribe({
      next: data => this.carros = data,                         //next pega os carros
      error: (error) => console.log('Error ao chamar o endpoint' + error)
    })
  }

  saveCarros() {
    this.cardservice.saveCarros(this.formGroupAnuncio.value).subscribe({
      next: data => {
        this.carros.push(data);
        this.formGroupAnuncio.reset();
      }
    })
  }

}
