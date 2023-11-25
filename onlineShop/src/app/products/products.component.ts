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
  showOrderedItems:boolean=false;
  totalPrice:number=0;
  itemCount:number=0;
  closeDetails:string="View/Close";
  searchQuery:string= "";

  buttonClicked(param:string){
  this.showTable=!this.showTable;
  this.productId=param;
 }


 addToCart(product:any, id:string){
  const productCopy = { ...product };
  this.shoppingCart.push(productCopy)
  this.productId=id;
  this.showOrderedItems=true;
  this.totalPrice += parseFloat(product.price);
  this.itemCount++;
 }

 removeFromCart(product: any) {
  const index = this.shoppingCart.findIndex(cartProduct => cartProduct === product);

  if (index !== -1) {
    this.totalPrice -= parseFloat(product.price);
    this.shoppingCart.splice(index, 1);
  }
  this.itemCount--

  if (this.itemCount < 0) {
    this.itemCount = 0;
  }
  if(this.itemCount==0){
    this.totalPrice=0;
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
  
//addToCart(this.jsonData.products.data.items[i],this.jsonData.products.data.items[i].id
}
