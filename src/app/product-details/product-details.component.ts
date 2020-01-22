import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Variable } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  
  
  private index: any ;
  private index2: any ;

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.index = params.get('productId');
      this.index2 = params.get('test');
    });

  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.index = params.get('productId');
      this.index2 = params.get('test');
    });
  }


}
