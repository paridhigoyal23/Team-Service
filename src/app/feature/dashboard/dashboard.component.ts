import { Component, OnInit } from "@angular/core";
import { RestapiService } from "src/app/service/restapi.service";
import { ChartType, ChartOptions, ChartConfiguration } from "chart.js";
import { TrainingApiServiceService } from "src/app/service/training-api-service.service";
// import  {Labels} from 'ng2-charts'
@Component({
    selector: "app-dashboard",
    templateUrl: "./dashboard.component.html",
    styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
    constructor(
        private service: RestapiService,
        private trainingService: TrainingApiServiceService
    ) {}
    numberOfEmployees: number;
    projects: number;
    title = "ng2-charts-demo";
    trainingsToday: number = 0;
    trainingsThisWeek: number = 0;
    ngOnInit(): void {
        this.service.getEmployee().subscribe((res: any[]) => {
            console.log("res", res);
            this.numberOfEmployees = res.length;
            
            this.numberOfEmployees = res.length;

            
            this.projects = res.reduce((total, employee) => {
               
                const projectsArray = employee.Project.split(",").map(
                    (project: any) => project.trim()
                );

               
                const nonEmptyProjects = projectsArray.filter(
                    (project: any) => project !== ""
                );

                return total + nonEmptyProjects.length;
            }, 0);
        });
        this.trainingService.getTrainingData().subscribe((data: any[]) => {
            console.log("data", data);
      
            const today = new Date();
            const startOfWeek = new Date(today);
            startOfWeek.setDate(today.getDate() - today.getDay());
            startOfWeek.setHours(0, 0, 0, 0);
      
            const endOfWeek = new Date(today);
            endOfWeek.setDate(today.getDate() + (6 - today.getDay()));
            endOfWeek.setHours(23, 59, 59, 999);
      
            this.trainingsToday = data.filter((training: any) => {
              const startDate = new Date(training.StartDate);
              const endDate = new Date(training.EndDate);
              return startDate <= today && today <= endDate;
            }).length;
      
            this.trainingsThisWeek = data.filter((training: any) => {
                const startDate = new Date(training.StartDate);
                return startDate >= startOfWeek && startDate <= endOfWeek;
              }).length;
          });
        }
        }
        
    
         
        
