import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getList(callback) {
    //todo : chnage with real webservice
    const list=[
      new Coffee("DOuble Espresso","sunny cafe",new PlaceLocation("123 Marketv street","san francisco")),
      new Coffee("carmel american","starcoffee",new PlaceLocation("Grav  via 34","Madrid"))
    ];

    callback(list);
  }

  save(coffee,callback) {
    //todo : chnage with real webservice
  callback(true);
  }
}
