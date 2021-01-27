import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ev-dashboard-hr',
  templateUrl: './dashboard-hr.component.html',
  styleUrls: ['./dashboard-hr.component.scss']
})
export class DashboardHrComponent implements OnInit {
  summeryData:any
  chartData3: any = {};
  chartData2: any = {};
  chartData1: any = {};
  chartData4: any = {};
  chartData5: any = {};
  chartData6: any = {}
  isDataLoadedPractice: any = true;
  isOtherNavSelected: any = false;
  newsLetterData: any = [];
  constructor() { }

  ngOnInit(): void {
    for (var i = 0; i < 10; i++) {
      this.newsLetterData.push({
        title:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      });
    }
    this.summeryData = [
      {title: "HeadCount", count: 709, flag: 1, staticAvailable: false, icon: "people.svg"},
      {title: "Onboarded", count: 30, flag: 1, staticAvailable: false, icon: "onboarded.svg"},
      {title: "Seperated", count: 10, flag: 1, staticAvailable: false, icon: "Seperated.svg"},
      {title: "Billable ", count: 51, flag: 1, staticAvailable: false, icon: "billable.svg"},
      {title: "Non Billable", count: 125, flag: 1, staticAvailable: false, icon: "non-billable.svg"}
      ];
      this.chartData1 = {
        idName: 'overAllChart1',
        title: 'Headcount Demographics',
        series1: 'count',
        legendName1: 'Practices',
        type: 'extended',
        label: true,
        data :[{
          "date": new Date(2020, 0, 1),
          "value": 13
        }, {
          "date": new Date(2020, 1, 1),
          "value": 11
        }, {
          "date": new Date(2020, 2, 1),
          "value": 15
        }, {
          "date": new Date(2020, 3, 1),
          "value": 16
        }, {
          "date": new Date(2020, 4, 1),
          "value": 18
        }, {
          "date": new Date(2020, 5, 1),
          "value": 13
        }, {
          "date": new Date(2020, 6, 1),
          "value": 22
        }, {
          "date": new Date(2020, 7, 1),
          "value": 23
        }, {
          "date": new Date(2020, 8, 1),
          "value": 20
        }, {
          "date": new Date(2020, 9, 1),
          "value": 17
        }, {
          "date": new Date(2020, 10, 1),
          "value": 16
        }, {
          "date": new Date(2020, 11, 1),
          "value": 18
        }],
      };
     
      this.chartData2 = {
        idName: 'overAllChart2',
        title: 'Onboarded and Seperated',
        series1: 'litres',
        legendName1: 'Practices',
        // type: 'extended',
        label: true,
        // colorCode: '#797FC8',
        data :[
          { 
          category: 'Jan',
          Onboarded: 40,
          Seperated: 55
          },
          {
           category: 'Feb',
           Onboarded: 30,
           Seperated: 78
           },
          {
           category: 'March',
           Onboarded: 50,
           Seperated: 40
           }
        ]
      };
      this.chartData3 = {
        idName: 'overAllChart5',
        title: ' Voluntary Attrition : Top 3 Reason',
        series1: 'litres',
        legendName1: 'Practices',
        type: 'extended',
        label: true,
        colorCode: '#797FC8',
        data: [
          { "sector": "Onsite Opportunity", "size": 20 },
          { "sector": "Technology Exposure", "size": 15 },
          { "sector": "Better Compensation", "size": 30 }
      ],
      };
      this.chartData4 = {
        idName: 'overAllChart6',
        title: 'Account wise Employee Attrition',
        series1: 'litres',
        legendName1: 'Practices',
        type: 'extended',
        label: true,
        // colorCode: '#797FC8',
        data:[{
          "Account": "CSC",
          "attrition": 5
         }, {
          "Account": "Dorman",
          "attrition": 10
         }, {
          "Account": "Medical Solutions",
          "attrition": 15
         }, {
          "Account": "Microsoft Practice",
          "attrition": 20
         }, {
          "Account": "SVD",
          "attrition": 7
         }, {
          "Account": "Crisil",
          "attrition": 5
         }, {
          "Account": "Dover",
          "attrition": 8
         }, {
          "Account": "Clopay",
          "attrition": 22
         }],
      };
      this.chartData5 = {
        idName: 'overAllChart7',
        title: 'Voluntary Attrition Analysis',
        series1: 'litres',
        legendName1: 'Practices',
        type: 'extended',
        label: true,
        data : [{
          "Resion": "Better Career Growth",
          "value": 37,
          "subData": [{ name: "A", value: 200 }, { name: "B", value: 150 }, { name: "C", value: 100 }, { name: "D", value: 50 }]
        }, {
          "Resion": "Personal Reasons",
          "value": 12,
          "subData": [{ name: "A", value: 150 }, { name: "B", value: 100 }, { name: "C", value: 50 }]
        }, {
          "Resion": "Work Enviornment",
          "value": 10,
          "subData": [{ name: "A", value: 110 }, { name: "B", value: 60 }, { name: "C", value: 30 }]
        }],
      }
      this.chartData6 = {
        idName: 'overAllChart3',
        title: 'Employee Attrition',
        series1: 'litres',
        legendName1: 'Practices',
        type: 'extended',
        label: true,
        colorCode: '#797FC8',
        data: [
          {
            date: 'Jan',
            allEmpAttrition: 10,
            abscondEmpAttrition: 4,
            voluntaryEmpAttrition: 6,
          },
          {
            date: 'Feb',
            allEmpAttrition: 15,
            abscondEmpAttrition: 5,
            voluntaryEmpAttrition: 10,
          },
          {
            date: 'March',
            allEmpAttrition: 3,
            abscondEmpAttrition: 0,
            voluntaryEmpAttrition: 3,
          },
          {
            date: 'April',
            allEmpAttrition: 8,
            abscondEmpAttrition: 2,
            voluntaryEmpAttrition: 6,
          },
          {
            date:'May',
            allEmpAttrition: 7,
            abscondEmpAttrition: 3,
            voluntaryEmpAttrition: 4,
          },
          {
            date: 'June',
            allEmpAttrition: 11,
            abscondEmpAttrition: 0,
            voluntaryEmpAttrition: 11,
          },
          {
            date: 'July',
            allEmpAttrition: 10,
            abscondEmpAttrition: 0,
            voluntaryEmpAttrition: 10,
          },
          {
            date:'August',
            allEmpAttrition: 7,
            abscondEmpAttrition: 2,
            voluntaryEmpAttrition: 5,
          },
          {
            date: 'Sept',
            allEmpAttrition: 6,
            abscondEmpAttrition: 1,
            voluntaryEmpAttrition: 5,
          },
          {
            date: 'Oct',
            allEmpAttrition: 5,
            abscondEmpAttrition: 0,
            voluntaryEmpAttrition: 5,
          },
          {
            date:'Nove',
            allEmpAttrition: 20,
            abscondEmpAttrition: 9,
            voluntaryEmpAttrition: 11,
          },
          {
            date: 'Dec',
            allEmpAttrition: 10,
            abscondEmpAttrition: 6,
            voluntaryEmpAttrition: 4,
          },
        ],
      };
  }

}
