import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'syllabus-9th',
  templateUrl: './syllabus9th.component.html',
  styleUrls: ['./syllabus9th.component.css']
})
export class Syllabus9thComponent implements OnInit {

  types = `<span class="math-tex">\\({1 \\over a+b \\sqrt x } and {1 \\over \\sqrt x + \\sqrt y } \\)</span>`

  constructor() { }

  ngOnInit(): void {
  
  }

}
