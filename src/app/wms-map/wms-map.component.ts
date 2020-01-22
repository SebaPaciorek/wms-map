import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-wms-map',
  templateUrl: './wms-map.component.html',
  styleUrls: ['./wms-map.component.css']
})
export class WmsMapComponent implements OnInit {

  x: string;
  y: string;
  

  constructor(private route: ActivatedRoute) {


    this.route.paramMap.subscribe(params => {

      if(params.has('latitude') && params.has('longitude')){

      }

    });

  }

  ngOnInit() {

  }

}
