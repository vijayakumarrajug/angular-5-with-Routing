import { Injectable } from '@angular/core';

export class User {
  id: string;
  name: string;
  surname: string;
  birthDate: string;
  phone: string;
  city: string;
  street: string;
  number: string;
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
    number: "1"
},
{
    id: "1",
    name: "name1",
    surname: "surname1",
    birthDate: "28-9-1983",
    phone: "812312312",
    city: "Warsaw",
    street: "Domaniewska",
    number: "2"
},
{
    id: "2",
    name: "name2",
    surname: "surname2",
    birthDate: "01-6-1983",
    phone: "987654412",
    city: "Wroclaw",
    street: "Mydlana",
    number: "2"
},
{
    id: "3",
    name: "name3",
    surname: "surname3",
    birthDate: "05-5-1978",
    phone: "812312312",
    city: "Wroclaw",
    street: "Himalajska",
    number: "2"
}
];

@Injectable()
export class DataserviceService {
  users = USERS;  
  constructor() { }

  get_allusers(){
    return this.users;
  }

}
