import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogClose} from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { usuario } from '../../../shared/Models/model';

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
    public dialogRef: MatDialogRef<DialogComponent>) {
      this.data = {};
    }


    public guardarUsuario(){
      console.log(this.data)
      this.dialogRef.close();
    }

}
