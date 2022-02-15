import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product.model';


@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})
export class ProductsTableComponent implements OnInit {

  public selectedProduct?: Product;

  public myProducts: Product[] = [
    {
      id: 1001,
      title: "acer aspire 7",
      amount: 55000,
      rating: 4.5,
      availability: true
    },
    {
      id: 1002,
      title: "acer aspire 5",
      amount: 45000,
      rating: 3.5,
      availability: true
    },
    {
      id: 1003,
      title: "acer aspire 3",
      amount: 35000,
      rating: 4.1,
      availability: false
    },
    {
      id: 1005,
      title: "lenovo Ideapad",
      amount: 30000,
      rating: 3.5,
      availability: false
    },
    {
      id: 1007,
      title: "lenovo Thickpad",
      amount: 65000,
      rating: 4.6,
      availability: true
    },
    {
      id: 2007,
      title: "macbook Air",
      amount: 95000,
      rating: 4.8,
      availability: true
    },
    {
      id: 2001,
      title: "macbook pro",
      amount: 160000,
      rating: 4.2,
      availability: true
    },
  ]

  public date: Date = new Date();

  constructor() {
    setInterval(() => {
      this.date = new Date();
    }, 1);
  }

  ngOnInit(): void {
  }

  public trackByProductId(index: number, productItem: Product): number {
    return productItem.id;
  }

  public onSelect(productItem: Product) {
    this.selectedProduct = productItem;
  }
}
