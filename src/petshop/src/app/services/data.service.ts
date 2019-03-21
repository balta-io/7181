import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private http: HttpClient) { }

    getProducts() {
        return this.http.get<any[]>('http://localhost:3000/v1/products');
    }
}