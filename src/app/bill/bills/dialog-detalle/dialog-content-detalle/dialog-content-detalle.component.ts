import { Component } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { ProductTableContentComponent } from '../product-table-content/product-table-content.component';

@Component({
  selector: 'app-dialog-content-detalle',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, ProductTableContentComponent],
  templateUrl: './dialog-content-detalle.component.html',
  styleUrl: './dialog-content-detalle.component.css'
})
export class DialogContentDetalleComponent {
  

}
