import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../shared/service/auth.service';


@Component({
  selector: 'app-aftermain',
  standalone: true,
  imports: [MatSlideToggleModule, MatToolbarModule, MatButtonModule],
  templateUrl: './aftermain.component.html',
  styleUrl: './aftermain.component.css'
})
export class AftermainComponent {
  constructor(private auth:AuthService) {}
  show:any = false

  login() {
    this.auth.login()
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }

}
