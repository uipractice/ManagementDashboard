import {
  Component,
  OnInit,
  Inject,
  NgZone,
  PLATFORM_ID,
  Input,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import am4themes_kelly from '@amcharts/amcharts4/themes/animated';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DataModalComponent } from '../data-modal/data-modal.component';

@Component({
  selector: 'ev-data-graph',
  templateUrl: './data-graph.component.html',
  styleUrls: ['./data-graph.component.scss'],
})
export class DataGraphComponent implements OnInit {
  // private chart: am4charts.XYChart;
  chart: any;
  private pieChart: am4charts.PieChart;
  @Input() chartData: any;
  @Input() chartType: any;
  @Input() dataLoaded: any;
  @Input() newsData: any;
  @Input() isNoGraphShown: any;
  @Input() titleCommon: any;
  categoryAxis: any;
  valueAxis: any;
  series: any;
  series2: any;
  bullet1: any;
  bullet: any;
  series1: any;
  bullet2: any;
  series3: any;
  bullet3: any;
  pieSeries: any;
  AccountWiseEmpData = [
    {
      id: '5f841caa03356a95d0aeeff4',
      master1: 'Billable',
      employee_employee_id: '2',
      employee_company_name: 'Hari Babu Madduluri',
      employee_date_of_joining: '11/17/03',
      employee_mail_id: 'hmadduluri@evoketechnologies.com',
      personal_gender: 'Male',
      employee_ou_name: 'Alliance',
      employee_grade_name: 'C2',
      employee_designation_name: 'Delivery Manager',
      master3: 'Delivery',
      employee_functional_reporting_to: 'Ramesh Madala',
      employee_department_name: 'CSC',
      employee_reporting_to: 'Ramesh Madala',
    },
    {
      id: '5f841caa03356a95d0aeeff5',
      master1: 'Billable',
      employee_employee_id: '12',
      employee_company_name: 'Dayanand Lingampally',
      employee_date_of_joining: '3/20/04',
      employee_mail_id: 'dlingampally@evoketechnologies.com',
      personal_gender: 'Male',
      employee_ou_name: 'Clopay Support',
      employee_grade_name: 'C2',
      employee_designation_name: 'Delivery Manager',
      master3: 'Oracle Practice',
      employee_functional_reporting_to: 'Prasad Kotikalapudi',
      employee_department_name: 'Clopay',
      employee_reporting_to: 'Venkat Naidu',
    },
    {
      id: '5f841caa03356a95d0aeeff6',
      master1: 'Billable',
      employee_employee_id: '15',
      employee_company_name: 'Venkata Srinivas Surla',
      employee_date_of_joining: '7/14/04',
      employee_mail_id: 'vsurla@evoketechnologies.com',
      personal_gender: 'Male',
      employee_ou_name: 'Project - Multiple',
      employee_grade_name: 'C1',
      employee_designation_name: 'Project Manager',
      master3: 'Delivery',
      employee_functional_reporting_to: 'Ramesh Madala',
      employee_department_name: 'CSC',
      employee_reporting_to: 'Ramesh Madala',
    },
  ];
  accountWiseProject = [
    {
      _id: 'Valaris',
      projects: [
        { projectName: 'Matter Management' },
        { projectName: 'Datawarehousing' },
        { projectName: 'Entity Management' },
        { projectName: 'Alliance' },
        { projectName: 'RIM' },
        { projectName: 'Datamasters' },
        { projectName: 'Financials' },
      ],
    },
    {
      _id: 'CSC',
      projects: [
        { projectName: 'CSC-Pega Support' },
        { projectName: 'Fraud Analysis' },
        { projectName: 'Entity Management' },
        { projectName: 'NetNames' },
        { projectName: 'RIM' },
        { projectName: 'Datamasters' },
        { projectName: 'Financials' },
      ],
    },
  ];
  constructor(
    @Inject(PLATFORM_ID) private platformId,
    private zone: NgZone,
    public matDialog: MatDialog
  ) {}
  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }
  ngOnInit(): void {
    // console.log("chartData : ",this.chartData);
  }
  clickedItem(content) {
    const dialogConfig = new MatDialogConfig();
    const modalId = 'modal02';
    const modalData = content.messageDescription;
    const allNewsData = this.newsData;
    dialogConfig.disableClose = false;
    dialogConfig.height = '222px';
    dialogConfig.width = '598px';
    dialogConfig.data = {
      modalId: modalId,
      modalData: modalData,
      allNewsData: allNewsData,
    };
    this.matDialog.open(DataModalComponent, dialogConfig);
  }
  viewAllNews() {
    const dialogConfig = new MatDialogConfig();
    const modalId = 'modal02';
    // const modalData = content.title;
    const modalExpand = true;
    const allNewsData = this.newsData;
    dialogConfig.disableClose = false;
    dialogConfig.height = '222px';
    dialogConfig.width = '598px';
    dialogConfig.data = {
      modalId: modalId,
      modalExpand: modalExpand,
      allNewsData: allNewsData,
    };
    this.matDialog.open(DataModalComponent, dialogConfig);
  }

  ngAfterViewInit() {
    // Chart code goes in here
    if (this.dataLoaded)
      this.browserOnly(() => {
        switch (this.chartType) {
          case 'barChart':
            am4core.useTheme(am4themes_animated);
            this.chart = am4core.create(
              this.chartData.idName,
              am4charts.XYChart
            );

            this.chart.data = this.chartData.data;

            this.categoryAxis = this.chart.xAxes.push(
              new am4charts.CategoryAxis()
            );

            this.categoryAxis.dataFields.category = 'country';

            this.categoryAxis.title.text = 'Accounts';

            this.valueAxis = this.chart.yAxes.push(new am4charts.ValueAxis());

            this.valueAxis.title.text = 'Members';
            this.series = this.chart.series.push(new am4charts.ColumnSeries());
            this.series.dataFields.valueY = 'litres';
            this.series.dataFields.categoryX = 'country';
            this.series.name = 'Sales';
            this.series.columns.template.tooltipText =
              'Series: {name}\nCategory: {categoryX}\nValue: {valueY}';
            this.series.columns.template.fill = am4core.color('#104547');

            this.series2 = this.chart.series.push(new am4charts.LineSeries());
            this.series2.name = 'Units';
            this.series2.stroke = am4core.color('#CDA2AB');
            this.series2.strokeWidth = 3;
            this.series2.dataFields.valueY = 'units';
            this.series2.dataFields.categoryX = 'country';
            this.categoryAxis.renderer.grid.template.disabled = true;
            this.valueAxis.renderer.grid.template.disabled = true;
            this.chart = this.chart;

            break;
          case 'multiDataChart':
            // am4core.useTheme(am4themes_animated);

            // this.chart = am4core.create(
            //   this.chartData.idName,
            //   am4charts.XYChart
            // );
            // this.chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

            // this.chart.data = this.chartData.data;

            // this.chart.colors.step = 2;
            // this.chart.padding(30, 30, 10, 30);
            // this.chart.legend = new am4charts.Legend();

            // this.categoryAxis = this.chart.xAxes.push(
            //   new am4charts.CategoryAxis()
            // );
            // this.categoryAxis.dataFields.category = 'category';
            // this.categoryAxis.renderer.grid.template.location = 0;

            // this.valueAxis = this.chart.yAxes.push(new am4charts.ValueAxis());
            // this.valueAxis.min = 0;
            // // this.valueAxis.max = 100;
            // this.valueAxis.strictMinMax = true;
            // this.valueAxis.calculateTotals = true;
            // this.valueAxis.renderer.minWidth = 50;

            // this.series = this.chart.series.push(new am4charts.ColumnSeries());
            // this.series.columns.template.width = am4core.percent(80);
            // this.series.columns.template.tooltipText =
            //   "{name}: {valueY.totalPercent.formatNumber('#.00')}";
            // this.series.name = 'Series 1';
            // this.series.dataFields.categoryX = 'category';
            // this.series.dataFields.valueY = 'value1';
            // // #ce0c0c
            // this.series.dataFields.valueYShow = 'totalPercent';
            // this.series.dataItems.template.locations.categoryX = 0.5;
            // this.series.stacked = true;
            // this.series.tooltip.pointerOrientation = 'vertical';

            // this.bullet1 = this.series.bullets.push(
            //   new am4charts.LabelBullet()
            // );
            // this.bullet1.label.text =
            //   "{valueY.totalPercent.formatNumber('#.00')}";
            // this.bullet1.label.fill = am4core.color('#ffffff');
            // this.bullet1.locationY = 0.5;

            // this.series2 = this.chart.series.push(new am4charts.ColumnSeries());
            // this.series2.columns.template.width = am4core.percent(80);
            // this.series2.columns.template.tooltipText =
            //   "{name}: {valueY.totalPercent.formatNumber('#.00')}";
            // this.series2.name = 'Series 2';
            // this.series2.dataFields.categoryX = 'category';
            // this.series2.dataFields.valueY = 'value2';
            // this.series2.dataFields.valueYShow = 'totalPercent';
            // this.series2.dataItems.template.locations.categoryX = 0.5;
            // this.series2.stacked = true;
            // this.series2.tooltip.pointerOrientation = 'vertical';

            // this.bullet2 = this.series2.bullets.push(
            //   new am4charts.LabelBullet()
            // );
            // this.bullet2.label.text =
            //   "{valueY.totalPercent.formatNumber('#.00')}";
            // this.bullet2.locationY = 0.5;
            // this.bullet2.label.fill = am4core.color('#ffffff');
            // this.categoryAxis.renderer.grid.template.disabled = true;
            // this.valueAxis.renderer.grid.template.disabled = true;
            // this.series2.strokeWidth = 3;
            break;

          case 'multiColorBarChartMultiLevel':
            let matDialog = this.matDialog;
            let employeeData = this.AccountWiseEmpData;
            let projectList = this.accountWiseProject;
            // console.log(this.chartData);
            this.chartData.data[3] = {};

            // alert(this.chartData.data.findIndex((el) => el._id === 'CSC'));
            // this.chartData.data.splice(
            //   this.chartData.data.findIndex((el) => el._id === 'CSC'),
            //   1
            // );
            // console.log(
            //   this.chartData.data.sort((a, b) => {
            //     console.log(a, b);
            //     return a._id > b._id;
            //   })
            // );
            this.chartData.data.sort();

            am4core.useTheme(am4themes_animated);
            am4core.useTheme(am4themes_kelly);

            // Create chart instance
            this.chart = am4core.create(
              this.chartData.idName,
              am4charts.XYChart
            );
            this.chart.responsive.enabled = true;
            // Add data
            this.chart.data = this.chartData.data;
            // Create axes
            this.categoryAxis = this.chart.xAxes.push(
              new am4charts.CategoryAxis()
            );
            this.categoryAxis.dataFields.category = '_id';
            // this.categoryAxis.title.text = 'Local country offices';
            this.categoryAxis.renderer.grid.template.location = 0;
            this.categoryAxis.renderer.minGridDistance = 10;
            this.categoryAxis.renderer.labels.template.rotation = 270;
            this.categoryAxis.renderer.labels.template.verticalCenter =
              'middle';
            this.categoryAxis.renderer.labels.template.horizontalCenter =
              'right';
            this.categoryAxis.renderer.labels.template.fontSize = '11.5px';
            this.categoryAxis.renderer.labels.template.fontWeight = '600';
            this.categoryAxis.renderer.labels.template.fontWeight = '600';
            this.categoryAxis.renderer.labels.template.cursorOverStyle =
              am4core.MouseCursorStyle.pointer;
            if (this.chartData.title == 'Accounts Wise Resource Utilization') {
              // console.log('this.chart.data', this.chartData.data);
              let accountList = this.chartData.data;
              this.categoryAxis.renderer.labels.template.events.on(
                'hit',
                function (ev) {
                  matDialog.open(DataModalComponent, {
                    width: '100%',
                    height: '100%',
                    data: {
                      clickedLeabel: ev.target.dataItem.category,
                      modalId: 'modal01',
                      employeeData: employeeData,
                      accountList: accountList,
                      // projectList: projectList,
                    },
                  });
                }
              );
            }
            // function openLabelModal(clickedLabel) {
            //   const dialogConfig = new MatDialogConfig();
            //   const modalId = "modal01";
            //   // const empData = employeeData
            //   dialogConfig.disableClose = true;
            //   // dialogConfig.id = "modal-component";
            //   dialogConfig.height = "100%";
            //   dialogConfig.width = "100% ";
            //   dialogConfig.data = {
            //     modalId: modalId,
            //     employeeData:employeeData,
            //     clickedLabel:clickedLabel
            //   }
            //   matDialog.open(DataModalComponent, dialogConfig);
            // }

            this.categoryAxis.renderer.cellStartLocation = 0.2;
            this.categoryAxis.renderer.cellEndLocation = 0.8;
            this.valueAxis = this.chart.yAxes.push(new am4charts.ValueAxis());
            this.valueAxis.renderer.labels.template.fontSize = '9px';

            // function clickedXaxisValue(ev) {
            //   console.log('this.chart', this.chart)
            //   this.chart.series.each(function(series) {
            //     if (series instanceof am4charts.ColumnSeries) {
            //       series.columns.each(function(column) {
            //     console.log(column);
            //     console.log(ev.target.dataItem.category);
            //       //  if (column.dataItem.categoryX == ev.target.dataItem.category) {
            //       //     column.isActive = true;
            //       // console.log(column.dataItem.categoryX)
            //       //   }
            //       })
            //     }
            //   })
            // }

            this.valueAxis.title.text = '';

            this.valueAxis.renderer.minGridDistance = 10;
            this.valueAxis.strictMinMax = true;

            this.series2 = this.chart.series.push(new am4charts.ColumnSeries());
            this.series2.dataFields.valueY = this.chartData.series1;
            this.series2.dataFields.categoryX = '_id';

            // this.pieSeries.template.maxWidth = 20;
            this.series2.fontSize = '11.5px';
            this.series2.fontWeight = '600';
            if (this.chartData.series2) {
              this.series2.name = this.chartData.legendName1;
            }
            this.series2.tooltipText = '[bold][font-size: 10px]{valueY}[/]';
            this.series2.heatRules.push({
              target: this.series2.columns.template,
              property: 'fill',
              dataField: 'valueY',
            });

            this.series2.columns.template.strokeWidth = 0;
            this.series2.columns.template.fontSize = '11.5px';
            this.series2.tooltip.pointerOrientation = 'vertical';
            this.series2.fill = am4core.color(this.chartData.colorCode);
            // this.series1.columns.template.width = am4core.percent(70);
            // this.series2.columns.template.column.cornerRadiusTopLeft = 10;
            // this.series2.columns.template.column.cornerRadiusTopRight = 10;
            this.series2.columns.template.column.fillOpacity = 0.8;
            if (this.chartData.series2) {
              // this.chart.legend.markers.template.disabled = true;
              this.series3 = this.chart.series.push(
                new am4charts.ColumnSeries()
              );
              this.series3.dataFields.valueY = this.chartData.series2;
              this.series3.dataFields.categoryX = '_id';
              this.series3.name = this.chartData.legendName2;
              this.series3.stroke = am4core.color('#EE5873');
              // this.series3.fontSize = '10px';
              this.series3.fontSize = '11.5px';
              // this.series3.fontWeight = '600';
              this.series3.fill = am4core.color('#EE5873');
              this.series3.tooltipText = '[bold][font-size: 10px]{valueY}[/]';
              // this.series3.tooltipText.fontSize = '9px';
              this.series3.stacked = true;
              this.series3.tooltip.pointerOrientation = 'vertical';
            }

            // Add cursor
            this.chart.cursor = new am4charts.XYCursor();

            // Add legend
            this.categoryAxis.renderer.grid.template.disabled = true;
            this.valueAxis.renderer.grid.template.disabled = true;
            if (this.chartData.isLegend) {
              this.chart.legend = new am4charts.Legend();
              // this.chart.legend.valueLabels.template.text = "({value.value})";
              this.series3.strokeWidth = 2;
              this.chart.legend.position = 'bottom';
              this.chart.legend.fontSize = '13px';
              this.chart.legend.fontWeight = '400';
              this.series2.name = `Billable (${this.chartData.labelData1.count})`;
              this.series3.name = `Non Billable  (${this.chartData.labelData2.count})`;

              // this.chart.scrollbarX = new am4core.Scrollbar();
              // this.chart.dragGrip.autoHideDelay = 5000;
              this.chart.tapToActivate = true;
              // this.chart.responsive.useDefault = false
              this.chart.responsive.enabled = true;
            }

            break;

          case 'donutChart':
            am4core.useTheme(am4themes_animated);

            this.pieChart = am4core.create(
              this.chartData.idName,
              am4charts.PieChart
            );
            this.pieChart.responsive.enabled = true;
            this.pieChart.data = this.chartData.data;
            this.pieSeries = this.pieChart.series.push(
              new am4charts.PieSeries()
            );
            // this.pieChart.numberFormatter.numberFormat = '#.';
            this.pieSeries.dataFields.value = 'count';
            this.pieSeries.dataFields.category = '_id';
            this.pieSeries.labels.template.text =
              "{category}: {value.percent.formatNumber('#.#')}% ({value})";
            this.pieChart.innerRadius = am4core.percent(65);
            this.pieSeries.slices.template.stroke = am4core.color('#fff');
            this.pieSeries.slices.template.strokeWidth = 2;
            this.pieSeries.slices.template.strokeOpacity = 1;

            this.pieSeries.slices.template.cursorOverStyle = [
              {
                property: 'cursor',
                value: 'pointer',
              },
            ];
            this.pieSeries.colors.list = [
              am4core.color('#6FC1D3'),
              am4core.color('#EE5873'),
            ];
            this.pieSeries.alignLabels = false;
            this.pieSeries.labels.template.bent = true;
            this.pieSeries.labels.template.radius = 3;
            this.pieSeries.labels.template.padding(0, 0, 0, 0);
            this.pieSeries.slices.template.tooltipText =
              "{value.percent.formatNumber('#.#')}% ({value.value})";
            this.pieSeries.ticks.template.disabled = true;

            var shadow = this.pieSeries.slices.template.filters.push(
              new am4core.DropShadowFilter()
            );
            shadow.opacity = 0;
            // Create hover state
            var hoverState = this.pieSeries.slices.template.states.getKey(
              'hover'
            );
            var hoverShadow = hoverState.filters.push(
              new am4core.DropShadowFilter()
            );
            hoverShadow.opacity = 0.7;
            hoverShadow.blur = 5;
            var container = new am4core.Container();
            container.parent = this.pieSeries;
            container.horizontalCenter = 'middle';
            container.verticalCenter = 'middle';

            break;
        }
      });
  }

  ngOnDestroy() {
    // Clean up chart when the component is removed
    this.browserOnly(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }
}
