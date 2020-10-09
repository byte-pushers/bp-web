import {Budget} from "./budget";
import {TimeLine} from "./time-line";

export interface Company {
name: string;
type: string;
budget: Budget;
url: string;
timeline: TimeLine;
desc: string;
est: boolean;
}
