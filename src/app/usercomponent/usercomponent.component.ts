import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../services/dataservice.service';

/*
export class User {
  id: string;
  name: string;
  surname: string;
  birthDate: string;
  phone: string;
  city: string;
  street: string;
  numbers: string;
}

const USERS: User[] = [
  {
    id: "0",
    name: "name0",
    surname: "surname0",
    birthDate: "24-8-1981",
    phone: "634523125",
    city: "Wroclaw",
    street: "Mydlana",
    numbers: "1"
},
{
    id: "1",
    name: "name1",
    surname: "surname1",
    birthDate: "28-9-1983",
    phone: "812312312",
    city: "Warsaw",
    street: "Domaniewska",
    numbers: "2"
},
{
    id: "2",
    name: "name2",
    surname: "surname2",
    birthDate: "01-6-1983",
    phone: "987654412",
    city: "Wroclaw",
    street: "Mydlana",
    numbers: "2"
},
{
    id: "3",
    name: "name3",
    surname: "surname3",
    birthDate: "05-5-1978",
    phone: "812312312",
    city: "Wroclaw",
    street: "Himalajska",
    numbers: "2"
}
];
*/
@Component({
  selector: 'app-usercomponent',
  templateUrl: './usercomponent.component.html',
  styleUrls: ['./usercomponent.component.css']
})
export class UsercomponentComponent implements OnInit {
  heroes ;  
  stars ;
  constructor(private _data : DataserviceService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
      this.stars = this._data.get_allusers();
      this.heroes = this.stars.slice(1, 5);
  }
  
}
