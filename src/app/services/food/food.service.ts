import { Injectable } from '@angular/core';
// import { find } from 'rxjs';
// import { StringifyOptions } from 'querystring';
// import { importExpr } from '@angular/compiler/src/output/output_ast';
import { Food } from '../../shared/models/Food';
import { Tag } from '../../shared/models/Tag';

@Injectable({
  providedIn: 'root',
})
export class FoodService {

  constructor() { }

      getFoodById(id: number): Food{
        return this.getAll().find(food => food.id == id)!;
      }

      getAllFoodsBySearchTerm(searchTerm:String) :Food[]{
        return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));
      }

      getAllTags():Tag[]{
        return [
          {name: 'All', count: 14},
          {name: 'FastFood', count: 2},
          {name: 'Pizza', count: 2},
          {name: 'Lunch', count: 1},
          {name: 'SlowFood', count: 2},
          {name: 'Fry', count: 3},
          {name: 'Hamburguer', count: 1},
          {name: 'Salad', count: 4},
        ];
      }

      getAllFoodsByTag(tag:string): Food[]{
        // statement?doJob:doJob2
          return tag == 'All'?
           this.getAll() :
           this.getAll().filter(food => food.tags?.includes(tag));

        // if(tag == 'All')
        // return this.getAll();
        // else
        // return this.getAll().filter(food => food.tags?.includes(tag));
      }

  getAll(): Food[] {
    return [
      {
        id: 1,
        name: 'Pasta al Pesto',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/images/food/food1.jpg',
        tags: ['SlowFOod', 'Spagetti', 'Lunch'],
      },
      {
        id: 2,
        name: 'Gordon Blue east',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['persia', 'middle east', 'china'],
        stars: 4.7,
        imageUrl: '/assets/images/food/food2.jpg',
        tags: ['SlowFood', 'Lunch', 'salad'],
      },
      {
        id: 3,
        name: 'Pizza Napolitana',
        price: 5,
        cookTime: '10-15',
        favorite: false,
        origins: ['germany', 'us'],
        stars: 3.5,
        imageUrl: '/assets/images/food/food3.jpg',
        tags: ['FastFood', 'pizza'],
      },
      {
        id: 4,
        name: 'Hamburguesa mix',
        price: 2,
        cookTime: '15-20',
        favorite: true,
        origins: ['belgium', 'france'],
        stars: 3.3,
        imageUrl: '/assets/images/food/food4.jpg',
        tags: ['FastFood', 'Fry'],
      },
      {
        id: 5,
        name: 'Marquesa',
        price: 11,
        cookTime: '40-50',
        favorite: false,
        origins: ['india', 'asia'],
        stars: 3.0,
        imageUrl: '/assets/images/food/food5.jpg',
        tags: ['Dessert', 'postre'],
      },
      {
        id: 6,
        name: 'Papas fritas',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: '/assets/images/food/food6.jpg',
        tags: ['FastFood', 'papas', 'Lunch'],
      },
    ];
  }
}
