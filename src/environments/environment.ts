// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //apiURL: 'http://10.250.5.12:8080/api', //frontend
  apiURL: 'http://saludback.herokuapp.com/api',
  //host: 'http://10.250.5.31:8100',
  userCode: 100, //100: Igor Dito,  50: Maria Garcia, 120:Alberto Fuerte
  systemDate: new Date("2019/11/17 00:00:00") //17/11/2019 15:30:00:000 
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
