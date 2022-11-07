import { Component, OnInit } from '@angular/core';
import { LogoutService } from '../../services/logout.service';

@Component({
  selector: 'app-categoria-father',
  templateUrl: './categoria-father.component.html',
  styleUrls: ['./categoria-father.component.scss']
})
export class CategoriaFatherComponent implements OnInit {

  constructor(private Logout:LogoutService) { }

  ngOnInit(): void {
  }

  returnMenu(){
    this.Logout.returnMainMenu();
  }

}
