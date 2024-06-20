import { Component, Input } from '@angular/core';
import {SummaryPipe} from "../../pipes/summary.pipe";
import {RouterModule} from "@angular/router";
import {MatIcon} from "@angular/material/icon";
import {MatDialog} from "@angular/material/dialog";
import {PopupComponent} from "../popup/popup.component";

@Component({
  selector: 'blog-item-text',
  standalone: true,
  imports: [SummaryPipe, RouterModule, MatIcon],
  templateUrl: './blog-item-text.component.html',
  styleUrl: './blog-item-text.component.css'
})
export class BlogItemTextComponent {
  @Input() text?: string;
  @Input() id?: string;
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '250px',
      data: { id: this.id }
    });
  }
}
