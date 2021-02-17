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
    console.log('this.chartData', this.chartData);
  }

  clickedItem(content) {
    const dialogConfig = new MatDialogConfig();
    const modalId = 'modal02';
    const modalData = content.title;
    const allNewsData = this.newsData;
    dialogConfig.disableClose = false;
    dialogConfig.height = "222px";
    dialogConfig.width = "598px";
    dialogConfig.data = {
      modalId: modalId,
      modalData: modalData,
      allNewsData: allNewsData,
    };
   this.matDialog.open(DataModalComponent, dialogConfig);
  }
  viewAllNews(){
    const dialogConfig = new MatDialogConfig();
    const modalId = "modal02";
    // const modalData = content.title;
    const modalExpand = true
    const allNewsData = this.newsData;
    dialogConfig.disableClose = false;
    dialogConfig.height = "222px";
    dialogConfig.width = "598px";
    dialogConfig.data = {
      modalId: modalId,
      modalExpand: modalExpand,
      allNewsData:allNewsData
    }
    this.matDialog.open(DataModalComponent, dialogConfig);
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

            let dateAxis = this.chart.xAxes.push(new am4charts.CategoryAxis());

            dateAxis.dataFields.category = 'month';
            dateAxis.renderer.opposite = false;
            dateAxis.renderer.minGridDistance = 30;
            dateAxis.renderer.labels.template.rotation = 270;
            dateAxis.renderer.grid.template.disabled = true;
            dateAxis.renderer.labels.template.verticalCenter = 'middle';
            dateAxis.renderer.labels.template.horizontalCenter = 'right';

            dateAxis.renderer.labels.template.fontSize = '11.5px';
            dateAxis.renderer.labels.template.fontWeight = '600';
            dateAxis.renderer.labels.template.fontWeight = '600';
            let valueAxis = this.chart.yAxes.push(new am4charts.ValueAxis());
            valueAxis.renderer.grid.template.disabled = false;
            // valueAxis.renderer.minLabelPosition = 0.02;
            valueAxis.min = 550;
            // Create series
            let series = this.chart.series.push(new am4charts.LineSeries());
            series.dataFields.valueY = 'closingbalance';
            series.dataFields.categoryX = 'month';
            series.strokeWidth = 2;
            series.minBulletDistance = 15;
            // Drop-shaped tooltips
            series.tooltip.background.strokeOpacity = 0;
            series.tooltip.background.cornerRadius = 0;
            // series.tooltip.background.strokeOpacity = 0;
            series.tooltip.getFillFromObject = false;
            series.tooltip.pointerOrientation = 'vertical';
            series.tooltip.label.minWidth = 40;
            series.tooltip.label.minHeight = 20;
            series.tooltip.label.fontSize = 12;
            series.tooltip.label.textAlign = 'middle';
            series.tooltip.background.fill = am4core.color('#00000000');
            series.tooltip.autoTextColor = false;
            series.tooltip.label.fill = am4core.color('#000000');
            // Make bullets grow on hover
            let bullet = series.bullets.push(new am4charts.CircleBullet());
            bullet.tooltipText = '{valueY}';
            bullet.showTooltipOn = 'always';
            // bullet.circle.strokeWidth = 2;
            bullet.circle.radius = 4;
            // bullet.circle.fill = am4core.color('#fff');

            // let bullethover = bullet.states.create('hover');
            // bullethover.properties.scale = 1.3;

            // Make a panning cursor
            this.chart.cursor = new am4charts.XYCursor();
            this.chart.cursor.xAxis = dateAxis;

            break;
          case 'barChart':
            am4core.useTheme(am4themes_animated);
            let newchart = am4core.create(
              this.chartData.idName,
              am4charts.XYChart
            );
            newchart.colors.step = 2;
            newchart.data = this.chartData.data;
            newchart.legend = new am4charts.Legend();
            newchart.legend.position = 'bottom';
            newchart.legend.paddingBottom = 20;
            newchart.legend.fontSize = '11.5px';
            newchart.legend.fontWeight = '400';
            // newchart.legend.labels.template.maxWidth = 95

            let xAxis = newchart.xAxes.push(new am4charts.CategoryAxis());
            xAxis.dataFields.category = 'month';
            xAxis.renderer.cellStartLocation = 0.1;
            xAxis.renderer.cellEndLocation = 0.8;
            xAxis.renderer.labels.template.rotation = 270;
            xAxis.renderer.grid.template.location = 0;
            xAxis.renderer.grid.template.disabled = true;
            xAxis.renderer.minGridDistance = 30;
            xAxis.renderer.labels.template.verticalCenter = 'middle';
            let yAxis = newchart.yAxes.push(new am4charts.ValueAxis());
            yAxis.min = 0;
            yAxis.renderer.grid.template.disabled = true;

            function createSeries(value, name) {
              let series = newchart.series.push(new am4charts.ColumnSeries());
              series.dataFields.valueY = value;
              series.dataFields.categoryX = 'month';
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
            let newchart3 = am4core.create(
              this.chartData.idName,
              am4charts.XYChart
            );
            newchart3.data = this.chartData.data;
            newchart3.colors.list = [
              am4core.color('#CF6684'),
              am4core.color('#6771DC'),
              am4core.color('#000000'),
              am4core.color('#E07C24'),
            ];
            this.categoryAxis = newchart3.xAxes.push(
              new am4charts.CategoryAxis()
            );
            this.categoryAxis.dataFields.category = 'month';
            this.categoryAxis.renderer.opposite = false;
            this.categoryAxis.renderer.minGridDistance = 30;
            this.categoryAxis.renderer.labels.template.rotation = 270;
            this.categoryAxis.renderer.grid.template.disabled = true;
            this.categoryAxis.renderer.labels.template.verticalCenter =
              'middle';
            this.categoryAxis.renderer.labels.template.horizontalCenter =
              'right';
            this.categoryAxis.renderer.labels.template.fontSize = '11.5px';
            this.categoryAxis.renderer.labels.template.fontWeight = '600';
            this.categoryAxis.renderer.labels.template.fontWeight = '600';
            // Create value axis
            this.valueAxis = newchart3.yAxes.push(new am4charts.ValueAxis());
            this.valueAxis.renderer.inversed = false;
            this.valueAxis.renderer.grid.template.disabled = false;
            // this.valueAxis.title.text = 'Place taken';
            // this.valueAxis.min = 10;
            this.valueAxis.renderer.minLabelPosition = 0.01;

            // Create series
            let series1 = newchart3.series.push(new am4charts.LineSeries());
            series1.dataFields.valueY = 'Seperated';
            series1.dataFields.categoryX = 'month';
            series1.name = 'All';
            // series1.tooltipText ='{valueY}';
            this.bullet = series1.bullets.push(new am4charts.CircleBullet());
            this.bullet.tooltipText = '{valueY}';
            // this.bullet.showTooltipOn = "always";
            // series1.legendSettings.valueText = '{valueY}';
            series1.visible = false;

            let series2 = newchart3.series.push(new am4charts.LineSeries());
            series2.dataFields.valueY = 'voluntary';
            series2.dataFields.categoryX = 'month';
            series2.name = 'Voluntary';
            // series2.bullets.push(new am4charts.CircleBullet());
            // series2.tooltipText ='{valueY}';
            this.bullet = series2.bullets.push(new am4charts.CircleBullet());
            this.bullet.tooltipText = '{valueY}';
            // this.bullet.showTooltipOn = "always";
            // series2.legendSettings.valueText = '{valueY}';

            let series3 = newchart3.series.push(new am4charts.LineSeries());
            series3.dataFields.valueY = 'involuntary';
            series3.dataFields.categoryX = 'month';
            series3.name = 'Involuntary';
            // series3.bullets.push(new am4charts.CircleBullet());
            // series3.tooltipText ='{valueY}';
            this.bullet = series3.bullets.push(new am4charts.CircleBullet());
            this.bullet.tooltipText = '{valueY}';
            // this.bullet.showTooltipOn = "always";
            // series3.legendSettings.valueText = '{valueY}';
            let series4 = newchart3.series.push(new am4charts.LineSeries());
            series4.dataFields.valueY = 'absconding';
            series4.dataFields.categoryX = 'month';
            series4.name = 'Abscond';
            // series4.bullets.push(new am4charts.CircleBullet());
            // series4.tooltipText ='{valueY}';
            this.bullet = series4.bullets.push(new am4charts.CircleBullet());
            this.bullet.tooltipText = '{valueY}';
            // this.bullet.showTooltipOn = "always";
            // Add chart cursor
            newchart3.cursor = new am4charts.XYCursor();
            newchart3.cursor.behavior = 'zoomY';

            let hs1 = series1.segments.template.states.create('hover');
            hs1.properties.strokeWidth = 5;
            series1.segments.template.strokeWidth = 1;

            let hs2 = series2.segments.template.states.create('hover');
            hs2.properties.strokeWidth = 5;
            series2.segments.template.strokeWidth = 1;

            let hs3 = series3.segments.template.states.create('hover');
            hs3.properties.strokeWidth = 5;
            series3.segments.template.strokeWidth = 1;

            // Add legend
            newchart3.legend = new am4charts.Legend();

            break;
          case 'barChart2':
            am4core.useTheme(am4themes_animated);
            // this.chart = am4core.create(
            //   this.chartData.idName,
            //   am4charts.XYChart
            // );
            let newChart2 = am4core.create(
              this.chartData.idName,
              am4charts.XYChart
            );
            newChart2.data = this.chartData.data;
            newChart2.padding(30, 20, 20, 30);
            // newChart2.paddingTop = 20;
            newChart2.responsive.enabled = true;
            let categoryAxis = newChart2.xAxes.push(
              new am4charts.CategoryAxis()
            );
            categoryAxis.renderer.grid.template.location = 0;
            categoryAxis.dataFields.category = 'account';
            categoryAxis.renderer.minGridDistance = 40;
            categoryAxis.renderer.labels.template.rotation = 270;
            categoryAxis.renderer.inversed = true;
            categoryAxis.renderer.grid.template.disabled = true;
            categoryAxis.renderer.labels.template.verticalCenter = 'middle';

            this.valueAxis = newChart2.yAxes.push(new am4charts.ValueAxis());
            this.valueAxis.min = 0;
            // this.valueAxis.max = 100;
            // this.valueAxis.extraMax = 0.1;
            this.valueAxis.renderer.grid.template.disabled = true;
            //valueAxis.rangeChangeEasing = am4core.ease.linear;
            //valueAxis.rangeChangeDuration = 1500;

            this.series = newChart2.series.push(new am4charts.ColumnSeries());
            this.series.dataFields.categoryX = 'account';
            this.series.dataFields.valueY = 'attrition';
            this.series.tooltipText = '{valueY.value}';
            this.series.columns.template.strokeOpacity = 0;
            // this.series1.columns.template.width = am4core.percent(50);
            // this.series.columns.template.column.cornerRadiusTopRight = 10;
            // this.series.columns.template.column.cornerRadiusTopLeft = 10;
            //series.interpolationDuration = 1500;
            //series.interpolationEasing = am4core.ease.linear;
            let labelBullet = this.series.bullets.push(
              new am4charts.LabelBullet()
            );
            labelBullet.label.verticalCenter = 'bottom';
            labelBullet.label.dy = -5;
            labelBullet.label.text =
              "{values.valueY.workingValue.formatNumber('#.')}%";

            // newChart2.zoomOutButton.disabled = true;
            // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
            this.series.columns.template.adapter.add(
              'fill',
              function (fill, target) {
                return newChart2.colors.getIndex(target.dataItem.index);
              }
            );
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

            this.pieSeries = this.pieChart.series.push(
              new am4charts.PieSeries()
            );
            this.pieSeries.dataFields.value = 'voluntaryattrition';
            this.pieSeries.dataFields.category = 'secondaryreason';
            this.pieSeries.labels.template.text = 
            "{category}: {value.percent.formatNumber('#.#')}%  ({value})";
            // Let's cut a hole in our Pie chart the size of 30% the radius
            this.pieChart.innerRadius = am4core.percent(45);

            // Put a thick white border around each Slice
            this.pieSeries.slices.template.stroke = am4core.color('#fff');
            this.pieSeries.slices.template.strokeWidth = 2;
            this.pieSeries.slices.template.strokeOpacity = 1;
            // change the cursor on hover to make it apparent the object can be interacted with
            this.pieSeries.slices.template.cursorOverStyle = [
              {
                property: 'cursor',
                value: 'pointer',
              },
            ];
            this.pieSeries.colors.list = [
              am4core.color('#8067DC'),
              am4core.color('#E76DBD'),
              am4core.color('#67B7DC')
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
            ); // normally we have to create the hover state, in this case it already exists

            // Slightly shift the shadow and make it more prominent on hover
            var hoverShadow = hoverState.filters.push(
              new am4core.DropShadowFilter()
            );
            hoverShadow.opacity = 0.7;
            hoverShadow.blur = 5;

            break;
          case 'pieChart':
            am4core.useTheme(am4themes_animated);
            let container = am4core.create(
              this.chartData.idName,
              am4core.Container
            );
            container.width = am4core.percent(90);
            container.height = am4core.percent(100);
            container.layout = 'horizontal';

            let chart = container.createChild(am4charts.PieChart);
            chart.data = this.chartData.data;
            chart.paddingTop = 40;
            // Add and configure Series
            let pieSeries = chart.series.push(new am4charts.PieSeries());
            pieSeries.dataFields.value = 'value';
            pieSeries.dataFields.category = 'Resion';
            pieSeries.slices.template.states.getKey(
              'active'
            ).properties.shiftRadius = 0;
            pieSeries.colors.list = [
              am4core.color('#E76DBD'),
              am4core.color('#67B7DC'),
              am4core.color('#9865A4'),
            ];
            pieSeries.labels.template.text = 
            "{category}: {value.percent.formatNumber('#.#')}% ({value})";
            pieSeries.slices.template.tooltipText =
              "{value.percent.formatNumber('#.#')}% ({value.value})";
            //pieSeries.labels.template.text = "{category}\n{value.percent.formatNumber('#.#')}%";

            pieSeries.slices.template.events.on('hit', function (event) {
              selectSlice(event.target.dataItem);
            });

            let chart2 = container.createChild(am4charts.PieChart);
            chart2.width = am4core.percent(30);
            chart2.radius = am4core.percent(80);
            chart2.paddingTop = 50;
            // Add and configure Series
            let pieSeries2 = chart2.series.push(new am4charts.PieSeries());
            pieSeries2.dataFields.value = 'value';
            pieSeries2.dataFields.category = 'name';
            pieSeries2.slices.template.states.getKey(
              'active'
            ).properties.shiftRadius = 0;
            pieSeries2.labels.template.text = 
            "{category}: {value.percent.formatNumber('#.#')}% ({value})";
            pieSeries2.slices.template.tooltipText =
              " {value.percent.formatNumber('#.#')}% ({value.value})";
            //pieSeries2.labels.template.radius = am4core.percent(50);
            //pieSeries2.labels.template.inside = true;
            //pieSeries2.labels.template.fill = am4core.color("#ffffff");
            pieSeries2.labels.template.disabled = false;
            pieSeries2.ticks.template.disabled = false;
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
              }, 800);
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
