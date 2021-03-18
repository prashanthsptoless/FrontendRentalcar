import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  brands : Brand[] = [];
  currentBrand : Brand ;
  allBrand : Brand ;
  constructor(private brandService:BrandService,private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.getBrands();
  }

  setCurrentBrand(brand:Brand)
  {
    this.currentBrand = brand;
  
   
  }
  setAllBrand()
  {
    this.currentBrand = this.allBrand;
  
    
    
  }
  getBrands(){
    this.brandService.getBrands().subscribe((response) => 
    {
      this.brands = response.data;
    
    });
    }
  getCurrentBrandClass(brand:Brand)
  {
    if(this.currentBrand == brand)
    {
      return "list-group-item active, list-group-item-info"
    }
    else{
      return "list-group-item"
    }
  }
  getAllCar()
  {
    if(!this.currentBrand)
    {
      return "list-group-item active, list-group-item-info" 
    }
    return "list-group-item"
  }




  }


