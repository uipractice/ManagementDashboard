import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebRequestService } from 'src/services/web-request.service';

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
  constructor(private router: Router, public service: WebRequestService) {}
  ngOnInit() {
    this.service.getAccountGraphData().then((res) => {
      console.log(res);
      if (res['statusCode'] === 200) {
        this.chartData['idName'] = 'overAllChart3';
        this.chartData['title'] = 'Accounts Wise Resource Utilization';
        this.chartData['series1'] = 'billableCount';
        this.chartData['series2'] = 'nonBillableCount';
        this.chartData['legendName1'] = 'Billable';
        this.chartData['legendName2'] = 'Non Billable';
        this.chartData['colorCode'] = '#7cc1e8';
        this.chartData['label'] = true;
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
      console.log(res);
      if (res['statusCode'] === 200) {
        // this.chartData['idName'] = 'overAllChart3';
        // this.chartData['title'] = 'Accounts Wise Resource Utilization';
        // this.chartData['colorCode'] = '#797FC8';
        // this.chartData['height'] = '500px';
        // this.chartData['type'] = 'normal';
        // 797FC8
        this.summeryData['data'] = res['data']['data'];
        console.log(this.summeryData);
        this.summeryDataLoaded = true;
      }
    });
    this.service.getPracticeGraphData().then((res) => {
      console.log(res);
      if (res['statusCode'] === 200) {
        this.chartData2['idName'] = 'overAllChart4';
        this.chartData2['title'] = 'Resource Engagement';
        this.chartData2['series1'] = 'count';
        this.chartData2['legendName1'] = 'Practices';
        this.chartData2['legendName2'] = '';
        this.chartData2['data'] = res['data'];
        this.chartData2['height'] = '300px';
        this.chartData2['colorCode'] = '#797FC8';
        this.chartData2['type'] = 'extended';
        this.chartData2['label'] = false;
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
      label: false,

      colorCode: '#797FC8',
      data: [
        {
          _id: 'Present',
          count: 700,
          color: '#7CC1E8',
        },
        {
          _id: 'Absent',
          count: 9,
          color: '#FF4A6B',
        },
      ],
    };

    for (var i = 0; i < 6; i++) {
      this.newsLetterData.push({
        title:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      });
    }

    // this.chartData = {
    //   idName: 'overAllChart3',
    //   title: 'Overall attendence',
    //   data: [
    //     {
    //       country: 'CSC',
    //       marketing: 250,
    //       sales: 199,
    //     },
    //     {
    //       country: 'CSC_BPO',

    //       marketing: 222,
    //       sales: 251,
    //     },
    //     {
    //       country: 'Caring Transistions',

    //       marketing: 170,
    //       sales: 199,
    //     },
    //     {
    //       country: 'Clopay',

    //       marketing: 122,
    //       sales: 90,
    //     },
    //     {
    //       country: 'Kaakateeya',

    //       marketing: 99,
    //       sales: 252,
    //     },
    //     {
    //       country: 'Crisil',

    //       marketing: 85,
    //       sales: 84,
    //     },
    //     {
    //       country: 'Dominion',

    //       marketing: 93,
    //       sales: 142,
    //     },
    //     {
    //       country: 'Dorman',

    //       marketing: 50,
    //       sales: 55,
    //     },
    //     {
    //       country: 'Inside Sales',

    //       marketing: 42,
    //       sales: 25,
    //     },
    //     {
    //       country: 'PMO',

    //       marketing: 99,
    //       sales: 252,
    //     },
    //     {
    //       country: 'Prime',

    //       marketing: 85,
    //       sales: 84,
    //     },
    //     {
    //       country: 'Ritas',

    //       marketing: 93,
    //       sales: 142,
    //     },
    //     {
    //       country: 'SVD',

    //       marketing: 50,
    //       sales: 55,
    //     },
    //     {
    //       country: 'TracyLocke',

    //       marketing: 42,
    //       sales: 25,
    //     },
    //     {
    //       country: 'Wright',

    //       marketing: 93,
    //       sales: 142,
    //     },
    //     {
    //       country: 'Red',

    //       marketing: 50,
    //       sales: 55,
    //     },
    //     {
    //       country: 'QA',

    //       marketing: 42,
    //       sales: 25,
    //     },
    //   ],
    // };
  }
  navigationClicked(event) {
    console.log(event);
    if (event !== 'Dashboard') {
      this.pageHeader = event + ' Dashboard ';
      this.isOtherNavSelected = true;
    } else {
      this.pageHeader = 'Management Dashboard ';
      this.isOtherNavSelected = false;
    }
  }
}
