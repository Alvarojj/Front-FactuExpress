import { AfterContentInit, Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../../shared/components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { MatFormField, MatFormFieldControl } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { ServiceService } from '../../shared/service/service.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NavBarComponent, RouterModule, MatFormField, FormsModule, MatInput],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements AfterContentInit{
  show:any = true
  constructor(public dialog: MatDialog,private service:ServiceService ) {}
  ahorro:number = 0
  ngAfterContentInit(): void {
    this.service.getUserForEmail(localStorage.getItem("Email"))
    .subscribe((response: any) => {
      if(response != null) {
        localStorage.setItem("Id", response.id)
        this.service.getAhorro(localStorage.getItem("Id"))
        .subscribe((response: any) => {
          this.ahorro=response
          console.log(this.ahorro)
        })
      } else {
        this.show = true
        const dialogRef = this.dialog.open(DialogComponent, {
          height: '400px',
          width: '850px',
          disableClose: true
        });
      }
    })
  }
}
