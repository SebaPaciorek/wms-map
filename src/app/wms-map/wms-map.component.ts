import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-wms-map',
  templateUrl: './wms-map.component.html',
  styleUrls: ['./wms-map.component.css']
})
export class WmsMapComponent implements OnInit {

  x: Number;
  y: Number;


  constructor(private route: ActivatedRoute) {



    this.route.paramMap.subscribe(params => {

      if (params.has('latitude') && params.has('longitude')) {

        if (isNaN(Number(params.get('latitude'))) === false) this.x = Number(params.get('latitude'));

        if (isNaN(Number(params.get('longitude'))) === false) this.y = Number(params.get('longitude'));

      }

    });

  }

  ngOnInit() {

  }

}
