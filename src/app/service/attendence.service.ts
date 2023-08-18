import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";
import { ApiEndpoints } from "../core/config/api-endpoints";
@Injectable({
    providedIn: "root",
})
export class AttendenceServiceComponent {
    constructor(private http: HttpClient) {}
    getAttendence(): Observable<any> {
        return this.http.get<any>(ApiEndpoints.EMPLOYEEATTENDENCES);
    }
}
