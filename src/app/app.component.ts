import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports : [
    UpperCasePipe,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nom: string = '';
  police: string = 'Arial';
  taille: number = 16;
  alignement: string = 'left';
  polices: string[] = ['Arial', 'Verdana', 'Times New Roman'];

  updateAlignment(alignment: string) {
    this.alignement = alignment;
  }
}

