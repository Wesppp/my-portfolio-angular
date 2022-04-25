import { Injectable } from '@angular/core';
import {Review} from "./shared/interfaces/review";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
    const reviews = [
      {name: 'Ruslan Drozdov', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, natus?', email: 'ruslan@mail.ru', id: 11},
      {name: 'Jenya Jacovsev', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cus, fugit.', email: 'jenya@mail.ru', id: 12},
      {name: 'Vladisa Yarosh', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, eos.', email: 'vlada@mail.ru', id: 13}
    ];
    return {reviews};
  }

  genId(reviews: Review[]): number {
    return reviews.length > 0 ? Math.max(...reviews.map(review => review.id)) + 1 : 11;
  }
}
