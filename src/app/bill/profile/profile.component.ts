import { Component } from '@angular/core';
import { NavBarComponent } from '../../shared/components/nav-bar/nav-bar.component';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NavBarComponent, MatIconModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
