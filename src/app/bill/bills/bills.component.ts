import { Component } from '@angular/core';
import { NavBarComponent } from '../../shared/components/nav-bar/nav-bar.component';
import {MatExpansionModule} from '@angular/material/expansion'; 
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { ListMonYearComponent } from './list-mon-year/list-mon-year.component';
import { DialogDetalleComponent } from './dialog-detalle/dialog-detalle.component';

@Component({
  selector: 'app-bills',
  standalone: true,
  imports: [NavBarComponent, MatExpansionModule,MatListModule, MatDividerModule, ListMonYearComponent, DialogDetalleComponent],
  templateUrl: './bills.component.html',
  styleUrl: './bills.component.css'
})
export class BillsComponent {
  panelOpenState = false;
}
