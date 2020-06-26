import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }

  isNullOrEmpty(obj: any): boolean {
    if (obj === undefined || obj === null || obj === '') {
      return true;
    }
    return false;
  }
  
}
