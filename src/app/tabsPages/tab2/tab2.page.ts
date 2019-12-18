import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/User';

import { environment } from '../../../environments/environment'

declare var google;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  user: User = new User();
  edad: number = undefined;

  fechaActual: Date = environment.systemDate;
  
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.edad = 0;
    
    this.userService.getUserInfo().subscribe(datos => {
      this.user = datos[0];
      this.user.fechaNacimiento = new Date(this.user.fechaNacimiento);
      this.edad = Math.floor(
        (this.fechaActual.getTime()- this.user.fechaNacimiento.getTime()) /
        (1000 * 3600 * 24 *365)
      );
    });

    

    //this.showChart();
    //this.showChart2();
    //this.showChart3();
  }

  showChart () {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
      ['Mushrooms', 3],
      ['Onions', 1],
      ['Olives', 1],
      ['Zucchini', 1],
      ['Pepperoni', 2]
    ]);

    // Set chart options
    var options = {'title':'How Much Pizza I Ate Last Night',
                  'width':400,
                  'height':300};

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  }

  showChart2 () {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
      ['Mushrooms', 3],
      ['Onions', 1],
      ['Olives', 1],
      ['Zucchini', 1],
      ['Pepperoni', 2]
    ]);
    
    // Set chart options
    var options = {'title':'How Much Pizza I Ate Last Night',
                    'width':400,
                    'height':300};
    
    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div2'));
    chart.draw(data, options);
  }

  showChart3 () {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
      ['Mushrooms', 3],
      ['Onions', 1],
      ['Olives', 1],
      ['Zucchini', 1],
      ['Pepperoni', 2]
    ]);
      
    // Set chart options
    var options = {'title':'How Much Pizza I Ate Last Night',
                    'width':400,
                    'height':300};
      
    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.Histogram(document.getElementById('chart_div3'));
    chart.draw(data, options);
  }

}
