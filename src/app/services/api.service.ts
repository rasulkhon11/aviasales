import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class ApiService {
  api = 'https://front-test.beta.aviasales.ru/';
  constructor(private http: HttpClient) {
  }

  getData() {
    return this.http.get(`${this.api}search`);
  }

  getTickets(searchId) {
    return this.http.get(`${this.api}tickets?searchId=${searchId}`);
  }
}
