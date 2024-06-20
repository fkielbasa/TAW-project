import {Component, Inject, Input} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DataService} from "../../services/data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent {
  constructor(
    public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: DataService,
  ) {}
  ngOnInit(){
    console.log(this.data.id)
  }
  onCancel(): void {
    this.dialogRef.close();
  }

  onConfirm(): void {
    this.service.deletePost(this.data.id).subscribe()
    this.dialogRef.close(true);
    window.location.reload();
  }
}
