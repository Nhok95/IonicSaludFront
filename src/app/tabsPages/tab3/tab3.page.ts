import { Component, OnInit, HostListener } from '@angular/core';

declare var google

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  scrHeight:any;
  scrWidth:any;

  @HostListener('window:resize', ['$event'])
  
  getScreenSize(event?) {
      this.scrHeight = window.innerHeight;
      this.scrWidth = window.innerWidth;
  }

  constructor() {}

  ngOnInit(){

    this.getScreenSize();
    this.mostrarGrafico();
  
  }
   
  mostrarGrafico() {  
      var data = google.visualization.arrayToDataTable([
        ['Dias', 'Tu', 'Base'],
        ['0',  50,      50],
        ['5',  50,      50],
        ['10',  50,      50],
        ['15',  46,      50],
        ['20',  42,      50],
        ['25',  38,      50],
        ['30',  35,      50],
      ]);
   
      var options = {
        title: 'Descuento con tus buenos hábitos',
        hAxis: {title: 'Días del mes',  titleTextStyle: {color: '#111'}},
        vAxis: {minValue: 0},
        width: this.scrWidth
        
      };
   
      var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
      chart.draw(data, options);
  }
  

}

