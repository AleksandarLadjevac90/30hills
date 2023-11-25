import { Component, OnInit } from '@angular/core';
import { ProductinfoService } from '../productinfo.service';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  jsonData = this.productServiceInfo.getData();
  availableCategories: string[] = this.getUniqueCategories();
  selectedCategory: string = ''; 

  constructor(private productServiceInfo:ProductinfoService) { }
  
  ngOnInit(): void {
  }

  getUniqueCategories(): string[] {
    return [...new Set(this.jsonData.products.data.items.map(item => item.category))];
  }

  filterProductsByCategory(category: string): any[] {
    return this.jsonData.products.data.items.filter(item => item.category === category);
  }
}

