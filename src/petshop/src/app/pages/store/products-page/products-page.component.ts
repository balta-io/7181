import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {
  products$: Observable<any[]> = null;

  constructor(private service: DataService) { }

  ngOnInit() {
    this.products$ = this.service.getProducts();
    console.log(this.products$);
  }

}
