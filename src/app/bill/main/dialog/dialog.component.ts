import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogClose } from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { usuario } from '../../../shared/Models/model';
import { ServiceService } from '../../../shared/service/service.service';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MatFormField, FormsModule, MatDialogClose, MatInput],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
  public data: usuario
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>, private service: ServiceService) {
    this.data = {};
  }


  public guardarUsuario() {
    this.data.correo = localStorage.getItem("Email")
    this.service.postUsuario(this.data).subscribe((response => {
      if (response == null) {
        this.service.getUserForEmail(localStorage.getItem("Email"))
        .subscribe((response: any) => {
          if (response != null) {
            localStorage.setItem("Id", response.id)
            this.dialogRef.close();
          }
        })
      }
    }))
  }       
}
