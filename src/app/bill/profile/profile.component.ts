import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../../shared/components/nav-bar/nav-bar.component';
import {MatIconModule} from '@angular/material/icon';
import { ServiceService } from '../../shared/service/service.service';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NavBarComponent, MatIconModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  constructor(private service:ServiceService) {}
  ngOnInit(): void {
    this.service.getInfoUser()
    .subscribe((response: any) => {
      console.log(response);
    })
  }
}
