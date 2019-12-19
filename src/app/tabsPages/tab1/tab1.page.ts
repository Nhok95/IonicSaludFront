import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/User';
import { BpmInfo } from 'src/app/models/BpmInfo';


import { environment } from  '../../../environments/environment';
import { EstadoInfo } from 'src/app/models/EstadoInfo';


declare var google;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  
  procesoID = undefined;
  

  //BPMs
  currentBPM : number = Math.floor(Math.random() * 5 + 57);
  maxBPM: number = this.currentBPM;

  TodayBPMs: BpmInfo[] = [];
  TodayEstados: EstadoInfo[] = [];

  //hostBPMs: string = environment.host + "/bpms" ;

  //Steps
  steps: number = 6798;
  goal: number = 10000;
  progressValue: number = (this.steps/this.goal)

  sizeBar: number = 4;
  rowsBar: number[] = Array(this.sizeBar).fill(0);

  //hostSteps: string = environment.host + "/pasos" ;

  //Calorias
  caloriesBurned: number = 578;
  calories: number = 578;


  user: User = new User();

  hoy: Date = environment.systemDate
  ayer: Date = new Date(this.hoy.getTime() - 86400000);

  URL: string = environment.apiURL;

  constructor(private userService: UserService) {

    console.log(this.hoy);
    console.log(this.ayer);

    this.userService.getUserInfo().subscribe(datos => {
      this.user = datos[0];
    });

    this.userService.getPulsaciones(this.ayer,this.hoy).subscribe(datos => {
      //
    });

    this.userService.getPasos(this.ayer,this.hoy).subscribe(datos => {
      //
    });

    this.userService.getEstados(this.ayer,this.hoy).subscribe(datos => {
      this.TodayEstados = datos;
      this.showChartSuenyoMiDia();
    });
  }
  

  ngOnInit(): void {

    
    //this.showChartSteps();

    this.procesoID = setInterval(() => {
        //Calculos BPMs
        this.currentBPM = Math.floor(Math.random() * 4 + 57);
        if (this.currentBPM >= this.maxBPM) this.maxBPM = this.currentBPM;
        
        //Calculo pasos

        //Calculo calorias
        this.caloriesBurned += this.caloriesFormula(); 
        this.calories = Math.floor(10*this.caloriesBurned)/10;

        
    }, 5000);

  }

  ngOnDestroy() {
    if (this.procesoID) {
      clearInterval(this.procesoID);
    }
  }

  caloriesFormula() {
    let UserAge = 20;//this.user.fechaNacimiento
    if (this.user.sexo == "Hombre"){
      return Math.floor(
        1000*(-55.0969 + (0.6309 * this.currentBPM) + (0.1988 * this.user.peso) + (0.2017 * UserAge)) / 
        (4.184*12) //intervalos de 5s
      )/1000
    }
    else {
      return Math.floor(
        1000*(-20.4022 + (0.4472 * this.currentBPM) - (0.1263 * this.user.peso) + (0.074 * UserAge)) /
        (4.184*12) //intervalos de 5s
      )/1000
    }
  }

  // Charts

  showChartSuenyoMiDia () {

    //console.log(this.TodayEstados);

    //let estadosLength = this.TodayEstados.length;

    // Create the data.
    let data = google.visualization.arrayToDataTable([
      ['Type', 'Hours per Day'],
      ['Sueño ligero', this.TodayEstados.filter(x => x.estado==2).length*5 ],
      ['Sueño profundo', this.TodayEstados.filter(x => x.estado==1).length*5],
      ['Despierto', this.TodayEstados.filter(x => x.estado != 1 && x.estado!=2).length*5]
    ]);
    /*let data = google.visualization.arrayToDataTable([
      ['Type', 'Hours per Day'],
      ['Sueño ligero', 
        Math.round(this.TodayEstados.filter(x => x.estado==2).length*1440/estadosLength) ],
      ['Sueño profundo', 
        Math.round(this.TodayEstados.filter(x => x.estado==1).length*1440 /estadosLength)],
      ['Despierto', 
        Math.round(this.TodayEstados.filter(x => x.estado != 1 && x.estado!=2).length*1440/estadosLength)]
    ]);*/
  
    // Set chart options
    let options = {
      title: 'Dreaming donut',
      pieHole: 0.8,
      pieSliceText: 'value',
      pieSliceTextStyle: {
        color: 'black',
      },
      chartArea: {
        left:30,top:30,width:'70%',height:'70%'
      },
      legend:{position: 'labeled'},
      colors: ['lightblue', 'DodgerBlue', 'MediumOrchid']
    }
                    
  
    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_SuenoMiDia'));
    chart.draw(data, options);
   
  }

  //Routing Functions

  /*gotoPulsaciones(){
    this.router.navigateByUrl('tab3');
  }*/

}
