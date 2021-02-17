import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/services/common.service';
import { WebRequestService } from 'src/services/web-request.service';

@Component({
  selector: 'ev-dashboard-hr',
  templateUrl: './dashboard-hr.component.html',
  styleUrls: ['./dashboard-hr.component.scss'],
})
export class DashboardHrComponent implements OnInit {
  summeryData: any;
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
  ) {}

  ngOnInit(): void {
    for (var i = 0; i < 10; i++) {
      this.newsLetterData.push({
        title:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      });
    }
    this.totalWorkingAndAverageData();
    // this.getOnboardAndSeperateData();
    this.getAccountWiseEmployeeAttrition();
    this.getHeadcountDemographicsData();
    this.getTopThreeReasonData();
    this.getEmpAttrationData();

    this.chartData2 = {
      idName: 'overAllChart2',
      title: 'Onboarded and Seperated',
      series1: 'litres',
      legendName1: 'Practices',
      // type: 'extended',
      label: true,
      // colorCode: '#797FC8',
      data: [
        {
          month: 'Jan',
          Onboarded: 40,
          Seperated: 55,
        },
        {
          month: 'Feb',
          Onboarded: 30,
          Seperated: 78,
        },
        {
          month: 'March',
          Onboarded: 50,
          Seperated: 40,
        },
      ],
    };
    // this.chartData3 = {
    //   idName: 'overAllChart5',
    //   title: ' Voluntary Attrition : Top 3 Reason',
    //   month: 'January',
    //   series1: 'litres',
    //   legendName1: 'Practices',
    //   type: 'extended',
    //   label: true,
    //   colorCode: '#797FC8',
    //   data: [
    //     { sector: 'Onsite Opportunity', size: 20 },
    //     { sector: 'Technology Exposure', size: 15 },
    //     { sector: 'Better Compensation', size: 30 },
    //   ],
    // };
    this.chartData5 = {
      idName: 'overAllChart7',
      title: 'Voluntary Attrition Analysis',
      month: 'January',
      series1: 'litres',
      legendName1: 'Practices',
      type: 'extended',
      label: true,
      data: [
        {
          Resion: 'Better Career Growth',
          value: 37,
          subData: [
            { name: 'A', value: 200 },
            { name: 'B', value: 150 },
            { name: 'C', value: 100 },
            { name: 'D', value: 50 },
          ],
        },
        {
          Resion: 'Personal Reasons',
          value: 12,
          subData: [
            { name: 'A', value: 150 },
            { name: 'B', value: 100 },
            { name: 'C', value: 50 },
          ],
        },
        {
          Resion: 'Work Enviornment',
          value: 10,
          subData: [
            { name: 'A', value: 110 },
            { name: 'B', value: 60 },
            { name: 'C', value: 30 },
          ],
        },
      ],
    };
  }
  handleDates = (list, prop)=>{
    return list.map((item) => {
      const obj = Object.assign({}, item);
      obj[prop] = obj[prop].slice(0, -3);
      return obj;
    });
  };

  handleAccountWisData = (list, prop)=>{
    return list.map((item) => {
      const obj = Object.assign({}, item);
      const modifyObj = Number(obj[prop]) * 100;
      // obj[prop] =  `${modifyObj}%`
      obj[prop] = modifyObj;
      return obj;
    });
  };
  
  displayThreeReason = (items)=>{
    return items.filter(function(e) {
      return ["Better Compensation","Technology exposure","Better role"].includes(e.secondaryreason)
    });
  }

  totalWorkingAndAverageData = ()=>{
    this.service.getSummeryCount().then((res) => {
      this.commonService.transferData(res['data']['result']);
      this.getHrHeaderData();
      this.headerDataLoaded = true;
    });
  };
  getHrHeaderData = ()=>{
    this.service.getHrHeaderData().then((res: any) => {
      this.summeryData = res;
      console.log('Header response', this.summeryData);
    });
  };
  getOnboardAndSeperateData = ()=>{
    this.service.getOnboardAndSeperateData().then((res: any) => {
      console.log('OnboardAndSeperateData', res[0]);
      if (res) {
        this.chartData2['idName'] = 'overAllChart2';
        this.chartData2['title'] = 'Onboarded and Seperated';
        this.chartData2['series1'] = 'litres';
        this.chartData2['legendName1'] = 'Practices';
        this.chartData2['label'] = true;
        this.chartData2['data'] = this.handleDates(res[0], 'month');
        this.isDataLoadedPractice = true;
      }
      console.log('response', this.chartData2);
    });
  };
  getAccountWiseEmployeeAttrition = ()=>{
    this.service.getAccountWiseEmployeeData().then((res: any) => {
      console.log('AccountWiseEmployeeData', res[0]);
      if (res) {
        this.chartData4['idName'] = 'overAllChart6';
        this.chartData4['title'] = 'Account wise Employee Attrition';
        this.chartData4['month'] = 'January';
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
    console.log('this.chartData4', this.chartData4);
  };
  getHeadcountDemographicsData = ()=>{
    this.service.getHeadcountData().then((res: any) => {
      console.log('HeadcountDemographicsData', res);
      if (res) {
        this.chartData1['idName'] = 'overAllChart1';
        this.chartData1['title'] = 'Headcount Demographics';
        this.chartData1['series1'] = 'count';
        this.chartData1['legendName1'] = 'Practices';
        this.chartData1['type'] = 'extended';
        this.chartData1['label'] = true;
        this.chartData1['data'] = this.handleDates(res[0], 'month');
        this.isDataLoadedPractice = true;
      }
    });
  };
  getTopThreeReasonData = ()=>{
    this.service.getTopThreeReasonData().then((res: any)=>{
      console.log('getTopThreeReasonData',res)
      if (res) {
          this.chartData3['idName'] = 'overAllChart5';
          this.chartData3['title'] = 'Voluntary Attrition : Top 3 Reason';
          this.chartData3['month'] = 'January';
          this.chartData3['series1'] = 'count';
          this.chartData3['legendName1'] = 'Practices';
          this.chartData3['type'] = 'extended';
          this.chartData3['label'] = true;
          this.chartData3['data'] = this.displayThreeReason(res)
          this.isDataLoadedPractice = true;
        }
    })
  }
  getEmpAttrationData = ()=>{
    this.service.getEmployeeAttritionData().then((res: any)=>{
      if (res) {
          this.chartData6['idName'] = 'overAllChart3';
          this.chartData6['title'] = 'Employee Attrition';
          this.chartData6['series1'] = 'litres';
          this.chartData6['legendName1'] = 'Practices';
          this.chartData6['type'] = 'extended';
          this.chartData6['label'] = true;
          this.chartData6['data'] = this.handleDates(res,'month');
          this.isDataLoadedPractice = true;
        }
    })
  }
}
