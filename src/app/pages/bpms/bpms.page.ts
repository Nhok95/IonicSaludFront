import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Chart } from 'chart.js';

// Models
import { BpmInfo } from 'src/app/models/BpmInfo';

// Services
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-bpms',
  templateUrl: './bpms.page.html',
  styleUrls: ['./bpms.page.scss'],
})
export class BpmsPage implements OnInit {

  @ViewChild("barCanvas", {static:true}) barCanvas: ElementRef;
  
  private barChart: Chart;

  registrosPulsaciones:BpmInfo[] = [];
  hoy:Date = environment.systemDate;
  deltaTime = 0;

  dataGraficoPulsaciones = {
    datasets: [{
      label: 'Pulsaciones por minuto',
      data: [],
      backgroundColor: 'rgb(205, 65, 65)', 
      borderColor: 'rgb(230, 10, 10)',
      borderWidth: 1,
      barPercentage:1
    }]
  }

  datos:any = {
    type: "bar",
    data: this.dataGraficoPulsaciones,
    options: {
      scales: {
          xAxes: [{
              type: 'time',
              distribution : 'series'
          }],
          yAxes:[{
            ticks : {beginAtZero:true}
          }]
      }
    }
  }
  
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    //Obtenemos los datos del usuario predefinido
    this.userService.getUserInfo().subscribe(datos => {
      console.log(datos);
    })

    this.userService.getPulsaciones(new Date(this.hoy.getTime() - 86400000),this.hoy).subscribe(datos => {
      this.registrosPulsaciones = datos;

      let parsedDatos = [];
      datos.forEach(element => {
        parsedDatos.push({x:element.datetime , y:element.bpm})
        
      });
      this.dataGraficoPulsaciones.datasets[0].data = parsedDatos;
      //console.log(parsedDatos)
      
      this.showBpmTiempo("dia");
    })

  }

  initGraph(datos){
    this.barChart = new Chart(this.barCanvas.nativeElement, datos);
  }

  removeData() {
    this.barChart.data.datasets.forEach((dataset) => {
      dataset.data = [];
    });
    this.barChart.update(0);
  }

  showBpmTiempo(lapso:string){

    if (typeof(this.barChart) != "undefined") {
      this.removeData();
    }
    
    if (lapso === "semana"){
      this.deltaTime = 604800000
      
    } else if (lapso === "dia") {
      this.deltaTime = 86400000
    }

    this.userService.getPulsaciones(new Date(this.hoy.getTime() - this.deltaTime),this.hoy).subscribe(datos => {
      
      let parsedDatosDia = [];
      let fechasref = []
      
      datos.forEach(element => {
        let anyo = new Date(element.datetime).getUTCFullYear();
        let mes = new Date(element.datetime).getUTCMonth();
        let dia = new Date(element.datetime).getUTCDay();
        let hora = new Date(element.datetime).getUTCHours();

        let fecha = new Date(anyo + "/" + mes + "/" + dia + " " + hora + ":00:00")

        if (lapso === "semana"){
          fecha = new Date(anyo + "/" + mes + "/" + dia + " " + "00:00:00")
          
        } else if (lapso === "dia") {
          fecha = new Date(anyo + "/" + mes + "/" + dia + " " + hora + ":00:00")
        }

        parsedDatosDia.push({x:fecha, y:element.bpm})

        if (!fechasref.includes(fecha)){
          fechasref.push(fecha)
        }
        
      })

      let nuevaArrayAgrupada = []
      let dia = parsedDatosDia[0].x;
      //console.log(parsedDatosDia[0].x.getTime() === parsedDatosDia[1].x.getTime())
      let valores = [];
      for (let i = 0; i < parsedDatosDia.length; i++){

        if(parsedDatosDia[i].x.getTime() === dia.getTime()){
          
          valores.push(parsedDatosDia[i].y);

        } else {
          // else {if(cond) } => else if(cond)
          if(valores.length > 0){
            let suma = valores.reduce((total,amount) => total + amount)
            nuevaArrayAgrupada.push({x:dia, y:(Math.round(suma/valores.length))})
            dia = parsedDatosDia[i].x;
            suma = 0
            valores = []
          }
        }
      }
      if(valores.length > 0){

        let suma = valores.reduce((total,amount) => total + amount)
        nuevaArrayAgrupada.push({x:dia, y:(Math.round(suma/valores.length))})
        
        dia = parsedDatosDia[parsedDatosDia.length-1].x;
        
        suma = 0
        valores = []
      }

      this.dataGraficoPulsaciones.datasets[0].data = nuevaArrayAgrupada;
      this.initGraph(this.datos);
    })
  }
}
