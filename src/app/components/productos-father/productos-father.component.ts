import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos-father',
  templateUrl: './productos-father.component.html',
  styleUrls: ['./productos-father.component.scss']
})
export class ProductosFatherComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  returnMenu(){
    this.router.navigate(['mainmenu']);
  }

}
