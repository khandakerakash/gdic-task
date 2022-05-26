import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmployeeResModel } from 'src/app/core/models/response';
import { EmployeeCreateReqModel } from 'src/app/core/models/request';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  isCompleted!: boolean;

  selectedName!: number;
  infoLable: string = 'List Of';
  listBtn: boolean = false;
  createBtn: boolean = true;
  listElement: boolean = true;
  showHideCreateElement: boolean = false;
  employeeData: EmployeeResModel[] = [];
  createRequest: EmployeeCreateReqModel = new EmployeeCreateReqModel();

  today = new Date();
  maxNgbDate: NgbDateStruct  = {year: this.today.getFullYear(), month: this.today.getMonth() + 1, day: this.today.getDate()};
  minNgbDate: NgbDateStruct  = {year: this.today.getFullYear(), month: this.today.getMonth() + 1, day: this.today.getDate()-1};

  constructor(
    private _toastrService: ToastrService,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getEmployeeList();
  }

  getEmployeeList() {
    this._activatedRoute.data.subscribe((res: any) => {
      this.employeeData = res.employeeData.data;
      if (this.employeeData.length == 0) {
        this._toastrService.warning('No data found! Please try again.', 'Warning', {
          progressBar: true,
          closeButton: true
        });
      }
    });
  }

  elementShowHide(x: string) {
    if (x == 'create') {
      this.infoLable = 'Create';
      this.createBtn = false;
      this.listBtn = true;
      this.listElement = false;
      this.showHideCreateElement = true;
      this.createRequest = new EmployeeCreateReqModel();
    }

    if (x == 'list') {
      this.infoLable = 'List Of';
      this.listBtn = false;
      this.createBtn = true;
      this.listElement = true;
      this.showHideCreateElement = false;
    }
  }

  highlightedRow(x: number) {
    this.selectedName = x;
  }

  onComplete(event: any) {
    this.isCompleted = true;
  }
}

