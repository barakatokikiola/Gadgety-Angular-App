import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ContainerComponent } from './Container/container.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { NotificationComponent } from './notification/notification.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { FilterComponent } from './filter/filter.component';
import { DemoComponent } from './demo/demo.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { AppRoutingModule } from './app-routing.module';
import { CartGuardService } from './Services/cart-guard.service';
import { ProductsService } from './Services/products.service';
import { AuthService } from './Services/auth.service';
import { CanDeactivateGuardService } from './Services/can-deactivate-guard.service';
import { ProductResolveService } from './Services/product-resolve.service';
import { BestsellersComponent } from './bestsellers/bestsellers.component';
import { TemplateFormComponent } from './Services/template-form/template-form.component';




@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavComponent,
    HeaderComponent,
    NotificationComponent,
    SearchComponent,
    ProductsComponent,
    FilterComponent,
    DemoComponent,
    CustomerListComponent,
    ContactComponent,
    AboutComponent,
    CartComponent,
    BestsellersComponent,
    TemplateFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule                                                                                                                          ,
  ],
  providers: [ProductsService, CartGuardService,
    ProductResolveService, AuthService, CanDeactivateGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
