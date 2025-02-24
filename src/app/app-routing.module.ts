import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './Container/container.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CartGuardService } from "./Services/cart-guard.service";
import { CanDeactivateGuardService } from "./Services/can-deactivate-guard.service";
import { ProductsComponent } from "./products/products.component";
import { ProductResolveService } from "./Services/product-resolve.service";



const appRoutes: Routes = [
    {path: '', component: ContainerComponent},
    {path: 'products', component: ProductsComponent, resolve: {products: ProductResolveService}},
    {path: 'about', component: AboutComponent},
    {path: 'contact', canDeactivate: [CanDeactivateGuardService], component: ContactComponent},
    {path: 'cart', component: CartComponent, canActivate: [CartGuardService]},
    {path: '**', component: NotFoundComponent},
  ]
  

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)   
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule{


    
}