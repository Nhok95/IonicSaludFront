import { Component, OnInit } from '@angular/core';

declare var google

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  constructor() {}

  ngOnInit(){
 
    this.mostrarGrafico();
   
    
  }
   
  mostrarGrafico() {  
      var data = google.visualization.arrayToDataTable([
        ['Dias', '+', '-'],
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
        hAxis: {title: 'Días del mes',  titleTextStyle: {color: '#100'}},
        vAxis: {minValue: 0}
      };
   
      var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
      chart.draw(data, options);
  }
  

}

