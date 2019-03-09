import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.css']
})
export class ParagraphComponent implements OnInit {
  display = true;
  timestamps = [];

  constructor() { }

  ngOnInit() {
  }

  toggleDisplay() {
    this.display = !this.display;
    this.timestamps.push(Date());
  }
}
