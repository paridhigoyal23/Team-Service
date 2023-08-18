import {
    Component,
    ElementRef,
    OnInit,
    ViewChild,
    AfterViewInit,
} from "@angular/core";
import { AttendenceServiceComponent } from "src/app/service/attendence.service";

@Component({
    selector: "app-work-from-office",
    templateUrl: "./work-from-office.component.html",
    styleUrls: ["./work-from-office.component.css"],
})
export class WorkFromOfficeComponent{
    @ViewChild("monthInput", { static: false }) monthInput: ElementRef;

    constructor(private service: AttendenceServiceComponent) {}
    attendances: any[];
    monthDates: any[] = [];
    MonthDays: any[] = [];
    wfhWfoValues: any[] = [];
    weekDays: any = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    forcastMonth: string;
    ngOnInit(): void {
        const todayDate = new Date();
        this.forcastMonth = `${todayDate.getFullYear()}-${(
            todayDate.getMonth() + 1
        )
            .toString()
            .padStart(2, "0")}`;

        this.service.getAttendence().subscribe((res: any[]) => {
            this.attendances = res;
            console.log("res", res);
            console.log(res[0].values);
            for (let empIndex = 0; empIndex < res.length; empIndex++) {
                this.wfhWfoValues = [];
                this.monthDates = [];
                this.MonthDays = [];
                for (
                    let index = 0;
                    index < res[empIndex].values.length;
                    index++
                ) {
                    const date = new Date(
                        Object.keys(res[empIndex].values[index])[0]
                    );
                    const value = Object.values(res[empIndex].values[index])[0];
                    this.monthDates.push(date.getDate());
                    this.MonthDays.push(this.weekDays[date.getDay()]);

                    this.wfhWfoValues.push(value);
                    res[empIndex]["wfhWfoValues"] = [...this.wfhWfoValues];
                }
                this.monthDates.push(...["TO", "TH", "TL"]);
                res[empIndex]["wfhWfoValues"].push(
                    res[empIndex].TO,
                    res[empIndex].TH,
                    res[empIndex].TL
                );
            }

            console.log(res[0]["wfhWfoValues"]);
        });
    }

    ngAfterViewInit(): void {}

    getRowspan(date: string | number): number {
        return date == "TO" || date == "TH" || date == "TL" ? 2 : 1;
    }

    plan() {
        console.log("input value", this.forcastMonth);
    }

    daysWeek: string[] = ["Mon", "Tue", "Wed", "Thu", "Fri"];
    selectedValuesOfDays: { [key: string]: boolean } = {};

    onButtonClick(): void {
        console.log("input value", this.forcastMonth);
        const monthParts = this.forcastMonth.split("-");
        const year = monthParts[0];
        const month = monthParts[1];

        const checkedValuesOfDays = Object.keys(
            this.selectedValuesOfDays
        ).filter((option) => this.selectedValuesOfDays[option]);
        const val = this.getValues(+year, +month, checkedValuesOfDays);
        console.log(val);
    }

    getValues(year: number, month: number, checkedValuesOfDays: string[]) {
        const totalDays = new Date(year, month, 0).getDate();
        const values = [];
        let TO = 0;
        let TH = 0;
        let TL = 0;
        for (let day = 1; day <= totalDays; day++) {
            const date = new Date(year, month - 1, day);
            const formattedDate = new Date(year, month - 1, day + 1)
                .toISOString()
                .slice(0, 10);
            if (date.getDay() == 6 || date.getDay() == 0) {
                //Sat, Sun
                values.push({ [formattedDate]: "BH" });
            } else if (
                checkedValuesOfDays.indexOf(this.weekDays[date.getDay()]) > -1
            ) {
                values.push({ [formattedDate]: "O" });
                TO++;
            } else {
                values.push({ [formattedDate]: "H" });
                TH++;
            }
        }
        return {
            month: year + "-" + month,
            name: "Paridhi",
            TO,
            TH,
            TL,
            values,
        };
    }
}
