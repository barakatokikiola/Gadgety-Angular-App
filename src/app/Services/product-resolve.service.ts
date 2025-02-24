import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root'
 }) 
//  This injectable is important here because we're using service inside service
export class ProductResolveService implements Resolve<any> {

  constructor(private productService: ProductsService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.productService.getProducts().then((data) => {
      return data;
    });
  }
  
}
