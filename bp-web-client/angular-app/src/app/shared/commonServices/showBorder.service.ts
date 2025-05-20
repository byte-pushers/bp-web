import { Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class ShowBordersService {
    constructor(private route: ActivatedRoute) {

    }

    setBorders(): boolean | void {
        let isBorders;
        this.route.queryParams.subscribe((params) => {
            if (params?.['showBorder'] == "true") {
                isBorders = params?.['showBorder'];
            }
        });
        return isBorders;
    }
}
