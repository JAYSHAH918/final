import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  private productUrl = 'api/employee/employee.json';
  constructor() { }

  ngOnInit(): void {
  }

}
