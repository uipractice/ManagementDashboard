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

@Component({
  selector: 'ev-data-graph',
  templateUrl: './data-graph.component.html',
  styleUrls: ['./data-graph.component.scss'],
})
export class DataGraphComponent implements OnInit {
  private chart: am4charts.XYChart;
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
  constructor(@Inject(PLATFORM_ID) private platformId, private zone: NgZone) {}
  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }
  ngOnInit(): void {}
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
            am4core.useTheme(am4themes_animated);

            this.chart = am4core.create(
              this.chartData.idName,
              am4charts.XYChart
            );
            this.chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

            this.chart.data = this.chartData.data;

            this.chart.colors.step = 2;
            this.chart.padding(30, 30, 10, 30);
            this.chart.legend = new am4charts.Legend();

            this.categoryAxis = this.chart.xAxes.push(
              new am4charts.CategoryAxis()
            );
            this.categoryAxis.dataFields.category = 'category';
            this.categoryAxis.renderer.grid.template.location = 0;

            this.valueAxis = this.chart.yAxes.push(new am4charts.ValueAxis());
            this.valueAxis.min = 0;
            // this.valueAxis.max = 100;
            this.valueAxis.strictMinMax = true;
            this.valueAxis.calculateTotals = true;
            this.valueAxis.renderer.minWidth = 50;

            this.series = this.chart.series.push(new am4charts.ColumnSeries());
            this.series.columns.template.width = am4core.percent(80);
            this.series.columns.template.tooltipText =
              "{name}: {valueY.totalPercent.formatNumber('#.00')}";
            this.series.name = 'Series 1';
            this.series.dataFields.categoryX = 'category';
            this.series.dataFields.valueY = 'value1';
            // #ce0c0c
            this.series.dataFields.valueYShow = 'totalPercent';
            this.series.dataItems.template.locations.categoryX = 0.5;
            this.series.stacked = true;
            this.series.tooltip.pointerOrientation = 'vertical';

            this.bullet1 = this.series.bullets.push(
              new am4charts.LabelBullet()
            );
            this.bullet1.label.text =
              "{valueY.totalPercent.formatNumber('#.00')}";
            this.bullet1.label.fill = am4core.color('#ffffff');
            this.bullet1.locationY = 0.5;

            this.series2 = this.chart.series.push(new am4charts.ColumnSeries());
            this.series2.columns.template.width = am4core.percent(80);
            this.series2.columns.template.tooltipText =
              "{name}: {valueY.totalPercent.formatNumber('#.00')}";
            this.series2.name = 'Series 2';
            this.series2.dataFields.categoryX = 'category';
            this.series2.dataFields.valueY = 'value2';
            this.series2.dataFields.valueYShow = 'totalPercent';
            this.series2.dataItems.template.locations.categoryX = 0.5;
            this.series2.stacked = true;
            this.series2.tooltip.pointerOrientation = 'vertical';

            this.bullet2 = this.series2.bullets.push(
              new am4charts.LabelBullet()
            );
            this.bullet2.label.text =
              "{valueY.totalPercent.formatNumber('#.00')}";
            this.bullet2.locationY = 0.5;
            this.bullet2.label.fill = am4core.color('#ffffff');
            this.categoryAxis.renderer.grid.template.disabled = true;
            this.valueAxis.renderer.grid.template.disabled = true;
            this.series2.strokeWidth = 3;

            // this.series3 = this.chart.series.push(new am4charts.ColumnSeries());
            // this.series3.columns.template.width = am4core.percent(80);
            // this.series3.columns.template.tooltipText =
            //   "{name}: {valueY.totalPercent.formatNumber('#.00')}%";
            // this.series3.name = 'Series 3';
            // this.series3.dataFields.categoryX = 'category';
            // this.series3.dataFields.valueY = 'value3';
            // this.series3.dataFields.valueYShow = 'totalPercent';
            // this.series3.dataItems.template.locations.categoryX = 0.5;
            // this.series3.stacked = true;
            // this.series3.tooltip.pointerOrientation = 'vertical';

            // this.bullet3 = this.series3.bullets.push(new am4charts.LabelBullet());
            // this.bullet3.label.text =
            //   "{valueY.totalPercent.formatNumber('#.00')}";
            // this.bullet3.locationY = 0.5;
            // this.bullet3.label.fill = am4core.color('#ffffff');

            // this.chart.scrollbarX = new am4core.Scrollbar();
            break;

          case 'multiColorBarChartMultiLevel':
            console.log(this.chartData);
            this.chartData.data[3] = {};
            // alert(this.chartData.data.findIndex((el) => el._id === 'CSC'));
            // this.chartData.data.splice(
            //   this.chartData.data.findIndex((el) => el._id === 'CSC'),
            //   1
            // );
            console.log(
              this.chartData.data.sort((a, b) => {
                console.log(a, b);
                return a._id > b._id;
              })
            );
            this, this.chartData.data.sort();
            let color = ['#9c66cf', '#d669a9', '#cfc666', '#7d85ce'];
            // this.chartData.data.map((val, index) => {
            //   console.log(color[Math.floor(Math.random() * 4)]);
            //   this.chartData.data[index]['color'];
            // });

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

            // this.categoryAxis.renderer.labels.template.fontColor = am4core.color(
            //   '#7b7b7b'
            // );

            this.categoryAxis.renderer.cellStartLocation = 0.2;
            this.categoryAxis.renderer.cellEndLocation = 0.8;
            this.valueAxis = this.chart.yAxes.push(new am4charts.ValueAxis());
            this.valueAxis.renderer.labels.template.fontSize = '9px';

            this.valueAxis.title.text = '';
            // this.valueAxis.min = this.valueAxis.minZoomed;
            // this.valueAxis.max = this.valueAxis.maxZoomed;
            // this.valueAxis.max = 'auto';
            // this.valueAxis.min = 0.1;
            this.valueAxis.renderer.minGridDistance = 10;
            this.valueAxis.strictMinMax = true;

            // Create series
            // this.series = this.chart.series.push(new am4charts.ColumnSeries());
            // this.series.dataFields.valueY = 'research';
            // this.series.dataFields.categoryX = 'country';
            // this.series.name = 'Research';
            // this.series.tooltipText = '{name}: [bold]{valueY}[/]';
            // This has no effect
            // series.stacked = true;
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
              // min: am4core.color('#a657e6'),
              // max: am4core.color('#1946a2'),
              dataField: 'valueY',
            });
            // this.series2.columns.template.adapter.add('fill', function (
            //   fill,
            //   target
            // ) {
            //   return this.chart.colors.getIndex(target.dataItem.index);
            // });
            // Do not try to stack on top of previous series
            // series2.stacked = true;
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

              this.series3.strokeWidth = 3;
              this.chart.legend.position = 'bottom';
              this.chart.legend.fontSize = '11.5px';
              this.chart.legend.fontWeight = '400';
              // this.chart.legend.disabled = true;
            }

            // this.chartData.series2
            //   ? (this.chart.legend.disabled = true)
            //   : (this.chart.legend.disabled = false);
            // this.chart.scrollbarX = new am4core.Scrollbar();
            // this.series3
            break;

          case 'donutChart':
            am4core.useTheme(am4themes_animated);

            this.pieChart = am4core.create(
              this.chartData.idName,
              am4charts.PieChart
            );
            this.pieChart.responsive.enabled = true;
            this.pieChart.data = this.chartData.data;
            // // this.pieSeries.labels.template.disabled = true;
            // // this.pieSeries.ticks.template.disabled = true;
            // this.pieSeries = this.pieChart.series.push(
            //   new am4charts.PieSeries()
            // );
            // this.pieSeries.dataFields.value = 'count';
            // this.pieSeries.dataFields.category = '_id';
            // this.pieSeries.dataFields.fontSize = '9px';
            // this.pieSeries.slices.template.propertyFields.fill = 'color';
            // // Let's cut a hole in our Pie chart the size of 40% the radius
            // this.pieChart.innerRadius = am4core.percent(70);

            // // Set up fills
            // this.pieSeries.slices.template.fillOpacity = 1;

            // var hs = this.pieSeries.slices.template.states.getKey('hover');
            // hs.properties.scale = 1;
            // hs.properties.fillOpacity = 0.5;
            // this.pieChart.legend = new am4charts.Legend();
            // this.pieChart.legend.position = 'top';
            // this.pieChart.legend.fontSize = '10px';
            this.pieSeries = this.pieChart.series.push(
              new am4charts.PieSeries()
            );
            this.pieChart.numberFormatter.numberFormat = '#.';
            this.pieSeries.dataFields.value = 'count';
            this.pieSeries.dataFields.category = '_id';
            this.pieSeries.labels.template.disabled = true;
            this.pieSeries.ticks.template.disabled = true;
            this.pieSeries.slices.template.propertyFields.fill = 'color';
            this.pieChart.seriesContainer.zIndex = -1;

            this.pieChart.legend = new am4charts.Legend();
            // this.pieChart.legend.position = 'center';
            this.pieChart.legend.position = 'bottom';
            this.pieChart.legend.fontSize = '11.5px';
            this.pieChart.legend.fontWeight = '400';
            this.pieChart.legend.marginBottom = 15;

            this.pieChart.innerRadius = am4core.percent(70);
            // this.pieChart.legend.disabled = true;
            var container = new am4core.Container();
            container.parent = this.pieSeries;
            container.horizontalCenter = 'middle';
            container.verticalCenter = 'middle';

            // var label = new am4core.Label();
            // label.parent = container;
            // // label.text = 'SUM: ${values.value.sum}';
            // label.horizontalCenter = 'middle';
            // label.verticalCenter = 'middle';
            // label.fontSize = 30;

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
