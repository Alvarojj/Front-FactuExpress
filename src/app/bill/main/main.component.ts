import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../../shared/components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { MatFormField, MatFormFieldControl } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NavBarComponent, RouterModule, MatFormField, FormsModule, MatInput],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit{
  show:any = false
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    if (!this.show) {
      const dialogRef = this.dialog.open(DialogComponent, {
        height: '400px',
        width: '850px',
        disableClose: true
      });
    }
  }
}
