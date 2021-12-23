import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { CommonService } from 'src/services/common.service';
import { WebRequestService } from 'src/services/web-request.service';

@Component({
  selector: 'ev-dashboard-hr',
  templateUrl: './dashboard-hr.component.html',
  styleUrls: ['./dashboard-hr.component.scss'],
})
export class DashboardHrComponent implements OnInit {
  summeryData: any;
  PostEngagementData: any;
  PostEngagementDataConnected: any;
  getEmployeeEngagementData: any;
  headerDataLoaded: any = false;
  chartData3: any = {};
  chartData2: any = {};
  chartData1: any = {};
  chartData4: any = {};
  chartData5: any = {};
  chartData6: any = {};
  isDataLoadedPractice: any = false;
  isOtherNavSelected: any = false;
  newsLetterData: any = [];
  constructor(
    public service: WebRequestService,
    public commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.service.getPublishNewsData().then((res: any) => {
      this.newsLetterData = res
    })
    this.totalWorkingAndAverageData();
    this.getOnboardAndSeperateData();
    this.getAccountWiseEmployeeAttrition();
    this.getHeadcountDemographicsData();
    this.getTopThreeReasonData();
    this.getEmpAttrationData();
    // this.getVoluntaryAnalysisInfo();
    this.getEmpEngagementData();
    this.getPostEngagementData();

    this.chartData5 = {
      idName: 'overAllChart7',
      title: 'Voluntary Attrition Analysis',
      month: 'Year to Date ',
      series1: 'litres',
      legendName1: 'Practices',
      type: 'extended',
      label: true,
      data: [
        {
          Resion: 'Better Career Growth',
          totalcount: 37,
          subdata: [
            { name: 'A', value: 200 },
            { name: 'B', value: 150 },
            { name: 'C', value: 100 },
            { name: 'D', value: 50 },
          ],
        },
        {
          Resion: 'Personal Reasons',
          totalcount: 12,
          subdata: [
            { name: 'A', value: 150 },
            { name: 'B', value: 100 },
            { name: 'C', value: 50 },
          ],
        },
        {
          Resion: 'Work Enviornment',
          totalcount: 10,
          subdata: [
            { name: 'A', value: 110 },
            { name: 'B', value: 60 },
            { name: 'C', value: 30 },
          ],
        },
      ],
    };
  }
  handleDates = (list, prop) => {
    console.log(list, prop)
    return list.map((item) => {
      const obj = Object.assign({}, item);
      console.log(obj, 135, obj[prop].slice(4, 7))
      obj[prop] = obj[prop].slice(4, 7)
      return obj;
    });
  };

  handleAccountWisData = (list, prop) => {
    return list.map((item) => {
      const obj = Object.assign({}, item);
      const modifyObj = Number(obj[prop]) * 100;
      obj[prop] = modifyObj;
      return obj;
    });
  };

  displayThreeReason = (items) => {
    return items.filter(function (e) {
      return ["Better Compensation", "Technology exposure", "Better role"].includes(e.secondaryreason)
    });
  }

  totalWorkingAndAverageData = () => {
    this.service.getSummeryCount().then((res) => {
      this.commonService.transferData(res['data']['result']);
      this.getHrHeaderData();
      this.headerDataLoaded = true;
    });
  };
  getHrHeaderData = () => {
    this.service.getHrHeaderData().then((res: any) => {
      this.summeryData = res;
     });
  };
  getOnboardAndSeperateData = () => {
    this.service.getOnboardAndSeperateData().then((res: any) => {
      if (res) {
        this.chartData2['idName'] = 'overAllChart2';
        this.chartData2['title'] = 'Onboarded and Seperated';
        this.chartData2['series1'] = 'litres';
        this.chartData2['legendName1'] = 'Practices';
        this.chartData2['label'] = true;
        this.chartData2['data'] = this.handleDates(res[0], 'month');
        this.chartData2['data'].sort(function (a, b) {
          var MONTH = { Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11 };
          return MONTH[a.month] - MONTH[b.month];
        });
        this.isDataLoadedPractice = true;
      }
      // console.log('response', this.chartData2);
    });
  };
  getAccountWiseEmployeeAttrition = () => {
    this.service.getAccountWiseEmployeeData().then((res: any) => {
      if (res) {
        this.chartData4['idName'] = 'overAllChart6';
        this.chartData4['title'] = 'Account wise Employee Attrition';
        this.chartData4['month'] = 'Year to Date ';
        this.chartData4['series1'] = 'litres';
        this.chartData4['legendName1'] = 'Practices';
        this.chartData4['type'] = 'extended';
        this.chartData4['label'] = true;
        this.chartData4['data'] = this.handleAccountWisData(
          res[0],
          'attrition'
        );
        this.isDataLoadedPractice = true;
      }
    });
   };
  getHeadcountDemographicsData = () => {
    this.service.getHeadcountData().then((res: any) => {
      if (res) {
        this.chartData1['idName'] = 'overAllChart1';
        this.chartData1['title'] = 'Headcount Demographics';
        this.chartData1['series1'] = 'count';
        this.chartData1['legendName1'] = 'Practices';
        this.chartData1['type'] = 'extended';
        this.chartData1['label'] = true;
        this.chartData1['data'] = this.handleDates(res[0], 'month');
        this.chartData1['data'].sort(function (a, b) {
          var MONTH = { Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11 };
          return MONTH[a.month] - MONTH[b.month];
        });
        this.isDataLoadedPractice = true;
      }
    });
  };
  getTopThreeReasonData = () => {
    this.service.getTopThreeReasonData().then((res: any) => {
     if (res) {
        this.chartData3['idName'] = 'overAllChart5';
        this.chartData3['title'] = 'Voluntary Attrition : Top 3 Reason';
        this.chartData3['month'] = 'Year to Date ';
        this.chartData3['series1'] = 'count';
        this.chartData3['legendName1'] = 'Practices';
        this.chartData3['type'] = 'extended';
        this.chartData3['label'] = true;
        this.chartData3['data'] = this.displayThreeReason(res)
        this.isDataLoadedPractice = true;
      }
    })
  }
  getEmpAttrationData = () => {
    this.service.getEmployeeAttritionData().then((res: any) => {
      if (res) {
        this.chartData6['idName'] = 'overAllChart3';
        this.chartData6['title'] = 'Employee Attrition';
        this.chartData6['series1'] = 'litres';
        this.chartData6['legendName1'] = 'Practices';
        this.chartData6['type'] = 'extended';
        this.chartData6['label'] = true;
        this.chartData6['data'] = this.handleDates(res, 'month');
        this.chartData6['data'].sort(function (a, b) {
          var MONTH = { Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11 };
          return MONTH[a.month] - MONTH[b.month];
        });
        this.isDataLoadedPractice = true;
      }
    })
  }
  getVoluntaryAnalysisInfo = () => {
    this.service.getVoluntaryAnalysisData().then((res: any) => {
      let newResponse = res.map(item => {
        let subdata = item.subdata.slice(0, item.subdata.length - 1);
        return { ...item, subdata };
      });
      if (res) {
        this.chartData5['idName'] = 'overAllChart7';
        this.chartData5['title'] = 'Voluntary Attrition Analysis';
        this.chartData5['month'] = 'Year to Date ';
        this.chartData5['series1'] = 'litres';
        this.chartData5['legendName1'] = 'Practices';
        this.chartData5['type'] = 'extended';
        this.chartData5['label'] = true;
        this.chartData5['data'] = newResponse;
        this.isDataLoadedPractice = true;
      }
    })
  }
  getEmpEngagementData = () => {
    this.service.getEmployeeEngagementData().then((res: any) => {
     this.getEmployeeEngagementData = res;
      this.isDataLoadedPractice = true;
    })
  }
  getPostEngagementData = () => {
    this.service.getPostEngagementData().then((res: any) => {
      this.PostEngagementData = res[0].data;
      this.PostEngagementDataConnected = res[1].data;
      this.isDataLoadedPractice = true;
    })
  }

}
