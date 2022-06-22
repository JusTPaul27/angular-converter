import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {

  value: BehaviorSubject<number> = new BehaviorSubject<number>(0);


  constructor() { }


  fahrenheitValue(){
    return this.value.pipe(
      map(v => (v * 9/5 + 32))
    )
  }


  kelvinValue(){
    return this.value.pipe(
      map(v => (v + 273.15))
    )
  }


  nextFahrenheit(fValue: number){
    const newValue = (fValue - 32 ) * 5/9;
    this.value.next(newValue);
  }

  nextKelvin(kValue: number){
    const newValue = kValue - 273.15;
    this.value.next(newValue);
  }


  round(value: number){
    return parseFloat(value.toFixed(3));
  }
}
