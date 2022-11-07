import { Component, OnInit } from '@angular/core';
import { LogoutService } from 'src/app/services/logout.service';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.scss']
})
export class MarcasComponent implements OnInit {
  
  constructor(private Logout:LogoutService) { }

  ngOnInit(): void {
  }

  returnMenu(){
    this.Logout.returnMainMenu();
  }
}
