import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  usuario: string;

  constructor(
    private authService: AuthService,
    private route: Router) { }

  ngOnInit() {
    this.usuario = localStorage.getItem('ACCESS_TOKEN');
  }

  logout(){
    this.authService.logout()
    this.route.navigateByUrl('/login')
  }

}
