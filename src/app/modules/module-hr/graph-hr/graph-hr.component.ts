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
import { DataModalComponent } from 'src/app/reusable/components/data-modal/data-modal.component';

@Component({
  selector: 'ev-graph-hr',
  templateUrl: './graph-hr.component.html',
  styleUrls: ['./graph-hr.component.scss'],
})
export class GraphHrComponent implements OnInit {
  private chart: am4charts.XYChart;
  private pieChart: am4charts.PieChart;
  // private pieOfPieChart: am4charts.Container;
  @Input() chartData: any;
  @Input() chartType: any;
  @Input() dataLoaded: any;
  @Input() newsData: any;
  @Input() isNoGraphShown: any;
  @Input() titleCommon: any;
  xAxis: any;
  yAxis: any;
  dateAxis: any;
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
    // console.log('this.chartData', this.chartData);
    // console.log('this.dataLoaded', this.dataLoaded);
  }

  clickedItem(content) {
    const dialogConfig = new MatDialogConfig();
    const modalId = 'modal02';
    const modalData = content.title;
    const allNewsData = this.newsData;
    dialogConfig.disableClose = false;
    dialogConfig.height = '42%';
    dialogConfig.width = '44% ';
    dialogConfig.data = {
      modalId: modalId,
      modalData: modalData,
      allNewsData: allNewsData,
    };
    const modalDialog = this.matDialog.open(DataModalComponent, dialogConfig);
  }

  ngAfterViewInit() {
    // Chart code goes in here
    if (this.dataLoaded)
      this.browserOnly(() => {
        switch (this.chartType) {
          case 'lineChart':
            am4core.useTheme(am4themes_animated);
            this.chart = am4core.create(
              this.chartData.idName,
              am4charts.XYChart
            );
            this.chart.data = this.chartData.data;
            // Set input format for the dates
            this.chart.dateFormatter.inputDateFormat = 'yyyy-MM-dd';

            // Create axes
            let dateAxis = this.chart.xAxes.push(new am4charts.DateAxis());
            let valueAxis = this.chart.yAxes.push(new am4charts.ValueAxis());

            // Create series
            let series = this.chart.series.push(new am4charts.LineSeries());
            series.dataFields.valueY = 'value';
            series.dataFields.dateX = 'date';
            series.tooltipText = '{value}';
            series.strokeWidth = 2;
            series.minBulletDistance = 15;

            // Drop-shaped tooltips
            series.tooltip.background.cornerRadius = 20;
            series.tooltip.background.strokeOpacity = 0;
            series.tooltip.pointerOrientation = 'vertical';
            series.tooltip.label.minWidth = 40;
            series.tooltip.label.minHeight = 40;
            series.tooltip.label.textAlign = 'middle';
            series.tooltip.label.textValign = 'middle';

            // Make bullets grow on hover
            let bullet = series.bullets.push(new am4charts.CircleBullet());
            bullet.circle.strokeWidth = 2;
            bullet.circle.radius = 4;
            bullet.circle.fill = am4core.color('#fff');

            let bullethover = bullet.states.create('hover');
            bullethover.properties.scale = 1.3;

            // Make a panning cursor
            this.chart.cursor = new am4charts.XYCursor();
            this.chart.cursor.behavior = 'panXY';
            this.chart.cursor.xAxis = dateAxis;
            this.chart.cursor.snapToSeries = series;

            // Create vertical scrollbar and place it before the value axis
            this.chart.scrollbarY = new am4core.Scrollbar();
            this.chart.scrollbarY.parent = this.chart.leftAxesContainer;
            this.chart.scrollbarY.toBack();

            // Create a horizontal scrollbar with previe and place it underneath the date axis
            this.chart.scrollbarX = new am4charts.XYChartScrollbar();
            // this.chart.scrollbarX.series.push(series);
            this.chart.scrollbarX.parent = this.chart.bottomAxesContainer;

            dateAxis.start = 0.79;
            dateAxis.keepSelection = true;
            break;
          case 'barChart':
            am4core.useTheme(am4themes_animated);
            // this.chart = am4core.create(
            //   this.chartData.idName,
            //   am4charts.XYChart
            // );
            let newchart = am4core.create(
              this.chartData.idName,
              am4charts.XYChart
            );
            newchart.colors.step = 2;
            newchart.data = this.chartData.data;
            newchart.legend = new am4charts.Legend();
            newchart.legend.position = 'top';
            newchart.legend.paddingBottom = 20;
            // newchart.legend.labels.template.maxWidth = 95

            let xAxis = newchart.xAxes.push(new am4charts.CategoryAxis());
            xAxis.dataFields.category = 'category';
            xAxis.renderer.cellStartLocation = 0.1;
            xAxis.renderer.cellEndLocation = 0.5;
            xAxis.renderer.grid.template.location = 0;

            let yAxis = newchart.yAxes.push(new am4charts.ValueAxis());
            yAxis.min = 0;

            function createSeries(value, name) {
              let series = newchart.series.push(new am4charts.ColumnSeries());
              series.dataFields.valueY = value;
              series.dataFields.categoryX = 'category';
              series.name = name;
              let bullet = series.bullets.push(new am4charts.LabelBullet());
              bullet.interactionsEnabled = false;
              bullet.dy = 30;
              bullet.label.text = '{valueY}';
              bullet.label.fill = am4core.color('#ffffff');
              return series;
            }
            createSeries('Onboarded', 'Onboarded');
            createSeries('Seperated', 'Seperated');

            break;
          case 'lineChart2':
            am4core.useTheme(am4themes_animated);
            this.chart = am4core.create(
              this.chartData.idName,
              am4charts.XYChart
            );
            break;
          case 'barChart2':
            am4core.useTheme(am4themes_animated);
            this.chart = am4core.create(
              this.chartData.idName,
              am4charts.XYChart
            );
            this.chart.data = this.chartData.data;
            this.chart.padding(40, 40, 40, 40);
            let categoryAxis = this.chart.xAxes.push(
              new am4charts.CategoryAxis()
            );
            categoryAxis.renderer.grid.template.location = 0;
            categoryAxis.dataFields.category = 'Account';
            categoryAxis.renderer.minGridDistance = 60;
            categoryAxis.renderer.labels.template.rotation = 270;
            categoryAxis.renderer.inversed = true;
            categoryAxis.renderer.grid.template.disabled = true;

            this.valueAxis = this.chart.yAxes.push(new am4charts.ValueAxis());
            this.valueAxis.min = 0;
            this.valueAxis.extraMax = 0.1;

            // this.valueAxis.strictMinMax = true;
            // this.valueAxis.calculateTotals = true;
            // this.valueAxis.renderer.minWidth = 50;

            this.series = this.chart.series.push(new am4charts.ColumnSeries());
            this.series.dataFields.categoryX = 'Account';
            this.series.dataFields.valueY = 'attrition';
            this.series.tooltipText = '{valueY.value}';
            this.series.columns.template.strokeOpacity = 0;
            this.series.columns.template.column.cornerRadiusTopRight = 10;
            this.series.columns.template.column.cornerRadiusTopLeft = 10;

            let labelBullet = this.series.bullets.push(
              new am4charts.LabelBullet()
            );
            labelBullet.label.verticalCenter = 'bottom';
            labelBullet.label.dy = -10;
            labelBullet.label.text =
              "{values.valueY.workingValue.formatNumber('#.')}";
            this.chart.zoomOutButton.disabled = true;
            categoryAxis.sortBySeries = this.series;
            break;
          case 'donutChart':
            am4core.useTheme(am4themes_animated);
            this.pieChart = am4core.create(
              this.chartData.idName,
              am4charts.PieChart
            );
            this.pieChart.responsive.enabled = true;
            this.pieChart.data = this.chartData.data;

            // this.pieChart.legend = new am4charts.Legend();
            // Add and configure Series
            this.pieSeries = this.pieChart.series.push(
              new am4charts.PieSeries()
            );
            this.pieSeries.dataFields.value = 'size';
            this.pieSeries.dataFields.category = 'sector';
            // Add label
            this.pieChart.innerRadius = 100;
            let label = this.pieChart.seriesContainer.createChild(
              am4core.Label
            );
            label.text = '2020';
            label.horizontalCenter = 'middle';
            label.verticalCenter = 'middle';
            label.fontSize = 30;
            break;
          case 'pieChart':
            am4core.useTheme(am4themes_animated);
            let container = am4core.create(
              this.chartData.idName,
              am4core.Container
            );
            container.width = am4core.percent(80);
            container.height = am4core.percent(80);
            container.layout = 'horizontal';

            let chart = container.createChild(am4charts.PieChart);
            chart.data = this.chartData.data;

            // Add and configure Series
            let pieSeries = chart.series.push(new am4charts.PieSeries());
            pieSeries.dataFields.value = 'value';
            pieSeries.dataFields.category = 'Resion';
            pieSeries.slices.template.states.getKey(
              'active'
            ).properties.shiftRadius = 0;
            //pieSeries.labels.template.text = "{category}\n{value.percent.formatNumber('#.#')}%";

            pieSeries.slices.template.events.on('hit', function (event) {
              selectSlice(event.target.dataItem);
            });

            let chart2 = container.createChild(am4charts.PieChart);
            chart2.width = am4core.percent(30);
            chart2.radius = am4core.percent(80);

            // Add and configure Series
            let pieSeries2 = chart2.series.push(new am4charts.PieSeries());
            pieSeries2.dataFields.value = 'value';
            pieSeries2.dataFields.category = 'name';
            pieSeries2.slices.template.states.getKey(
              'active'
            ).properties.shiftRadius = 0;
            //pieSeries2.labels.template.radius = am4core.percent(50);
            //pieSeries2.labels.template.inside = true;
            //pieSeries2.labels.template.fill = am4core.color("#ffffff");
            pieSeries2.labels.template.disabled = true;
            pieSeries2.ticks.template.disabled = true;
            pieSeries2.alignLabels = false;
            pieSeries2.events.on('positionchanged', updateLines);

            let interfaceColors = new am4core.InterfaceColorSet();

            let line1 = container.createChild(am4core.Line);
            line1.strokeDasharray = '2,2';
            line1.strokeOpacity = 0.5;
            line1.stroke = interfaceColors.getFor('alternativeBackground');
            line1.isMeasured = false;

            let line2 = container.createChild(am4core.Line);
            line2.strokeDasharray = '2,2';
            line2.strokeOpacity = 0.5;
            line2.stroke = interfaceColors.getFor('alternativeBackground');
            line2.isMeasured = false;

            let selectedSlice;

            function selectSlice(dataItem) {
              selectedSlice = dataItem.slice;

              let fill = selectedSlice.fill;

              let count = dataItem.dataContext.subData.length;
              pieSeries2.colors.list = [];
              for (var i = 0; i < count; i++) {
                pieSeries2.colors.list.push(fill.brighten((i * 2) / count));
              }

              chart2.data = dataItem.dataContext.subData;
              pieSeries2.appear();

              let middleAngle = selectedSlice.middleAngle;
              let firstAngle = pieSeries.slices.getIndex(0).startAngle;
              let animation = pieSeries.animate(
                [
                  { property: 'startAngle', to: firstAngle - middleAngle },
                  { property: 'endAngle', to: firstAngle - middleAngle + 360 },
                ],
                600,
                am4core.ease.sinOut
              );
              animation.events.on('animationprogress', updateLines);

              selectedSlice.events.on('transformed', updateLines);
            }

            function updateLines() {
              if (selectedSlice) {
                let p11 = {
                  x:
                    selectedSlice.radius *
                    am4core.math.cos(selectedSlice.startAngle),
                  y:
                    selectedSlice.radius *
                    am4core.math.sin(selectedSlice.startAngle),
                };
                let p12 = {
                  x:
                    selectedSlice.radius *
                    am4core.math.cos(
                      selectedSlice.startAngle + selectedSlice.arc
                    ),
                  y:
                    selectedSlice.radius *
                    am4core.math.sin(
                      selectedSlice.startAngle + selectedSlice.arc
                    ),
                };

                p11 = am4core.utils.spritePointToSvg(p11, selectedSlice);
                p12 = am4core.utils.spritePointToSvg(p12, selectedSlice);

                let p21 = { x: 0, y: -pieSeries2.pixelRadius };
                let p22 = { x: 0, y: pieSeries2.pixelRadius };

                p21 = am4core.utils.spritePointToSvg(p21, pieSeries2);
                p22 = am4core.utils.spritePointToSvg(p22, pieSeries2);

                line1.x1 = p11.x;
                line1.x2 = p21.x;
                line1.y1 = p11.y;
                line1.y2 = p21.y;

                line2.x1 = p12.x;
                line2.x2 = p22.x;
                line2.y1 = p12.y;
                line2.y2 = p22.y;
              }
            }

            chart.events.on('datavalidated', function () {
              setTimeout(function () {
                selectSlice(pieSeries.dataItems.getIndex(0));
              }, 1000);
            });

            break;
        }
      });
  }

  ngOnDestroy() {
    this.browserOnly(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }
}
