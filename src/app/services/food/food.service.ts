import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';
import { Tag } from '../../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number):Food{
    return this.getAll().find(food=>food.id==id)!;
  }
   
  getAllFoodBySearchTerm(searchTerm:string):Food[]{
    return this.getAll().filter(food=>
      food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
  getAllTags():Tag[]{
    return [
      { name: 'All' ,count:15},
      { name: 'FastFood' ,count:4},
      { name: 'Pizza' ,count:2},
      { name: 'SlowFood' ,count:3},
      { name: 'Soup' ,count:1},
      { name: 'Lunch' ,count:4},
      { name: 'Hamburger' ,count:1},
      { name: 'Fry' ,count:1},
    ];
  }
  
  getAllFoodsByTag(tag:string):Food[]{

    return tag=="All"?
    this.getAll():
    this.getAll().filter(food=>food.tags?.includes(tag));
  
  }
  getAll():Food[]{
    return[
      {
        id:1,
        name:'Pizza Pepperconi',
        price:200,
        cookTime:'10-20',
        favorite:false,
        origins:['germany', 'us'],
        stars:3.5,
        imageUrl:'/assets/images/foods/food1.png',
        tags:['FastFood','Hamburger'],
      },
      {
        id:2,
        name:'Meat',
        price:200,
        cookTime:'10-20',
        favorite:false,
        origins:['germany', 'us'],
        stars:3.5,
        imageUrl:'/assets/images/foods/food2.jpg',
        tags:['FastFood','Hamburger'],
      },
      {
        id:3,
        name:'burger',
        price:200,
        cookTime:'10-20',
        favorite:false,
        origins:['germany', 'us'],
        stars:3.5,
        imageUrl:'/assets/images/foods/food3.png',
        tags:['Hamburger'],
      },
      {
        id:4,
        name:'Pizza Pepperconi',
        price:200,
        cookTime:'10-20',
        favorite:false,
        origins:['germany', 'us'],
        stars:3.5,
        imageUrl:'/assets/images/foods/food4.jpg',
        tags:['Hamburger'],
      },
      {
        id:5,
        name:'Pizza Pepperconi',
        price:200,
        cookTime:'10-20',
        favorite:false,
        origins:['germany', 'us'],
        stars:3.5,
        imageUrl:'/assets/images/foods/food5.png',
        tags:['Hamburger'],
      },
      {
        id:6,
        name:'Pizza Pepperconi',
        price:200,
        cookTime:'10-20',
        favorite:false,
        origins:['germany', 'us'],
        stars:3.5,
        imageUrl:'/assets/images/foods/food6.png',
        tags:['Hamburger'],
      },
    ]
  }
}
