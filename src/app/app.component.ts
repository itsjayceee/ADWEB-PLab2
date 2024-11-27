import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BgdComponent } from './bgd/bgd.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BgdComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prelim_lab_2';
}
