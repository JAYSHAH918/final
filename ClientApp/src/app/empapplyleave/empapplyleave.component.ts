import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empapplyleave',
  templateUrl: './empapplyleave.component.html',
  styleUrls: ['./empapplyleave.component.css']
})
export class EmpapplyleaveComponent implements OnInit {

  constructor() { }

  ltypes=['Casual','Sick','Others'];
  ngOnInit(): void {
    //this.quals=['bachelors','honours','masters','doctoral'];
  }

}
