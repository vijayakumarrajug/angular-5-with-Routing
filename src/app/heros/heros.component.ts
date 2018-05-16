import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  heroes ;  
  constructor(private _data : DataserviceService) { }

  ngOnInit() {
    this.heroes = this._data.get_allusers();
  }

}
