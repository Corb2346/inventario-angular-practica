import { Component, OnInit } from '@angular/core';
import { LogoutService } from 'src/app/services/logout.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  
  constructor(private Logout:LogoutService) { }

  ngOnInit(): void {
  }

  returnMenu(){
    this.Logout.returnMainMenu();
  }

}
