import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AboutProductsComponent } from './about-products/about-products.component';



@NgModule({
  declarations: [
    AboutCompanyComponent,
    AboutUsComponent,
    AboutProductsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AboutUsModule { }
