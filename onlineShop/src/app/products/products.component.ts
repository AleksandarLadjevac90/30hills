import { Component, OnInit } from '@angular/core';
import { ProductinfoService } from '../productinfo.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  jsonData = this.productServiceInfo.getData();
  showTable:boolean=false;
  productId:string='';
  shoppingCart:any[]=[];
  
  buttonClicked(param:string){
  this.showTable=!this.showTable;
  this.productId=param;
 }


 addToCart(product:any){
  const productCopy = { ...product };
  this.shoppingCart.push(productCopy)

 }

 removeFromCart(product: any) {
  const index = this.shoppingCart.findIndex(cartProduct => cartProduct === product);

  if (index !== -1) {
    this.shoppingCart.splice(index, 1);
  }
}

  constructor(private productServiceInfo:ProductinfoService) { }

  ngOnInit(): void {
  }
  // ---NOT WORKING DUE TO CORS POLICY-----      
  // getData (){
   //   fetch("https://30hills.com/api/products.json",{ mode: 'no-cors'})
   //   .then((response)=>
   //   response.json())
   //   .then((data)=>
   //   console.log(data))
   //   .catch((err)=>
   //   console.log(err));
   // ---NOT WORKING DUE TO CORS POLICY-----    
  

}
