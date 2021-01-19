import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebRequestService } from 'src/services/web-request.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DataModalComponent } from 'src/app/reusable/components/data-modal/data-modal.component';

@Component({
  selector: 'ev-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss'],
})
export class DashboardContainerComponent implements OnInit {
  chartData: any = {};
  chartData2: any = {};
  isDataLoaded: any = false;
  isOtherNavSelected: any = false;
  chartData3: any = {};
  summeryData: any = {};
  pageHeader: any = 'Management Dashboard';
  isDataLoadedPractice: any = false;
  summeryDataLoaded: any = false;
  currentUser = sessionStorage.getItem('user');
  newsLetterData: any = [];
  AccountWiseEmpData = [
    {​​​​​​​
    "id": "5f841caa03356a95d0aeeff4",
    "master1": "Billable",
    "employee_employee_id": "2",
    "employee_company_name": "Hari Babu Madduluri",
    "employee_date_of_joining": "11/17/03",
    "employee_mail_id": "hmadduluri@evoketechnologies.com",
    "personal_gender": "Male",
    "employee_ou_name": "Alliance",
    "employee_grade_name": "C2",
    "employee_designation_name": "Delivery Manager",
    "master3": "Delivery",
    "employee_functional_reporting_to": "Ramesh Madala",
    "employee_department_name": "CSC",
    "employee_reporting_to": "Ramesh Madala"
}​​​​​​​,
{​​​​​​​
    "id": "5f841caa03356a95d0aeeff5",
    "master1": "Billable",
    "employee_employee_id": "12",
    "employee_company_name": "Dayanand Lingampally",
    "employee_date_of_joining": "3/20/04",
    "employee_mail_id": "dlingampally@evoketechnologies.com",
    "personal_gender": "Male",
    "employee_ou_name": "Clopay Support",
    "employee_grade_name": "C2",
    "employee_designation_name": "Delivery Manager",
    "master3": "Oracle Practice",
    "employee_functional_reporting_to": "Prasad Kotikalapudi",
    "employee_department_name": "Clopay",
    "employee_reporting_to": "Venkat Naidu"
}​​​​​​​,
{​​​​​​​
    "id": "5f841caa03356a95d0aeeff6",
    "master1": "Billable",
    "employee_employee_id": "15",
    "employee_company_name": "Venkata Srinivas Surla",
    "employee_date_of_joining": "7/14/04",
    "employee_mail_id": "vsurla@evoketechnologies.com",
    "personal_gender": "Male",
    "employee_ou_name": "Project - Multiple",
    "employee_grade_name": "C1",
    "employee_designation_name": "Project Manager",
    "master3": "Delivery",
    "employee_functional_reporting_to": "Ramesh Madala",
    "employee_department_name": "CSC",
    "employee_reporting_to": "Ramesh Madala"
}​​​​​​​]

  constructor(private router: Router, public service: WebRequestService, public matDialog: MatDialog) {}
  ngOnInit() {
    this.service.getAccountGraphData().then((res) => {
      if (res['statusCode'] === 200) {
        this.chartData['idName'] = 'overAllChart3';
        this.chartData['title'] = 'Accounts Wise Resource Utilization';
        this.chartData['series1'] = 'billableCount';
        this.chartData['series2'] = 'nonBillableCount';
        this.chartData['legendName1'] = 'Billable';
        this.chartData['legendName2'] = 'Non Billable';
        this.chartData['colorCode'] = '#92b7f2';
        this.chartData['label'] = true;
        this.chartData['labelData1'] = {
          name: 'Billable',
          count: '---',
          calss: 'positive',
        };
        this.chartData['labelData2'] = {
          name: 'Non Billable',
          count: '---',
          calss: 'positive',
        };
        this.chartData['isLegend'] = true;

        // this.chartData['height'] = '500px';
        this.chartData['type'] = 'normal';
        // 797FC8
        this.chartData['data'] = res['data'];
        this.isDataLoaded = true;
      } else {
        throw new console.error('Something went wrong');
      }
    });
    this.service.getSummeryCount().then((res) => {
      if (res['statusCode'] === 200) {
        // this.chartData['idName'] = 'overAllChart3';
        // this.chartData['title'] = 'Accounts Wise Resource Utilization';
        // this.chartData['colorCode'] = '#797FC8';
        // this.chartData['height'] = '500px';
        // this.chartData['type'] = 'normal';
        // 797FC8
        this.summeryData['data'] = res['data']['data'];
        this.chartData.labelData1.count = res['data']['result']['billingCount'];
        this.chartData.labelData2.count =
          res['data']['result']['nonBillingCount'];
        console.log(this.summeryData);
        this.summeryDataLoaded = true;
      }
    });
    this.service.getPracticeGraphData().then((res) => {
      console.log('getPracticeGraphData', res);
      if (res['statusCode'] === 200) {
        this.chartData2['idName'] = 'overAllChart4';
        this.chartData2['title'] = 'Resource Engagement';
        this.chartData2['series1'] = 'count';
        this.chartData2['legendName1'] = 'Practices';
        this.chartData2['legendName2'] = '';
        this.chartData2['data'] = res['data'];
        this.chartData2['height'] = '300px';
        this.chartData2['colorCode'] = '#797FC8';
        this.chartData2['isLegend'] = false;
        this.chartData2['type'] = 'extended';
        this.chartData2['label'] = false;
        this.chartData2.labelData = [
          {
            name: 'Billable',
            count: 730,
          },
          {
            name: 'Non Billable',
            count: 23,
          },
        ];
        this.isDataLoadedPractice = true;
      } else {
        throw new console.error('Something went wrong');
      }
    });

    this.chartData3 = {
      idName: 'overAllChart5',
      title: 'Overall Attendance',
      series1: 'litres',
      legendName1: 'Practices',
      type: 'extended',
      label: true,
      labelData1: {
        name: 'Present',
        count: 686,
        calss: 'positive',
      },
      labelData2: {
        name: 'Absent',
        count: 23,
        calss: 'positive',
      },

      colorCode: '#797FC8',
      data: [
        {
          _id: 'Present',
          count: 686,
          color: '#7CC1E8',
        },
        {
          _id: 'Absent',
          count: 23,
          color: '#FF4A6B',
        },
      ],
    };

    for (var i = 0; i < 10; i++) {
      this.newsLetterData.push({
        title:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      });
    }
  }
  openLogoutModal() {
    const dialogConfig = new MatDialogConfig();
    const modalId = "modal01";
    const employeeData = this.AccountWiseEmpData;
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    // dialogConfig.id = "modal-component";
    dialogConfig.height = "100%";
    dialogConfig.width = "100% ";
    dialogConfig.data = {
      modalId: modalId,
      employeeData:employeeData 
      // name: "logout",
      // title: "Are you sure you want to logout?",
      // description: "Pretend this is a convincing argument on why you shouldn't logout :)",
      // actionButtonText: "Logout",
    }
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(DataModalComponent, dialogConfig);
  }
}
