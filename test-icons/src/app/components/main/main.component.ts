import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import {
  fas,
  IconDefinition,
  IconName,
  IconPrefix,
} from '@fortawesome/free-solid-svg-icons';
import { timer } from 'rxjs';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FontAwesomeModule, NgFor, NgIf],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  arr: IconDefinition[];
  prefix: IconPrefix;
  name: IconName;
  constructor(private library: FaIconLibrary) {
    this.library.addIconPacks(fas);
    this.arr = Object.values(fas);
  }

  generateRandomIcon() {
    const index = Math.floor(Math.random() * this.arr.length);
    timer(3000).subscribe(() => {
      this.prefix = this.arr[index].prefix;
      this.name = this.arr[index].iconName;
    });
  }
}
