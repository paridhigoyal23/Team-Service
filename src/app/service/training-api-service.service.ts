import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TrainingApiServiceService {

  constructor(private http:HttpClient) { }
  getTrainingData():Observable<any[]>{
    return this.http.get<any[]>('http://localhost:3000/trainingData')
  }
  saveTrainingData(data: any) {
    console.log("trainingData", data);
    return this.http.post('http://localhost:3000/trainingData', data);
}
updateTraining(data:any):Observable<any>{
return this.http.put<any>(`${'http://localhost:3000/trainingData'}/${data.id}`,data)
}
}
