import {Address} from "./address";

export interface Person {
setFirstName(firstName: string): void;
getFirstName();
setLastName(lastName: string): void;
getLastName();
setEmail(email: string): void;
getEmail();
setPhoneNumber(phoneNumber: string): void;
getPhoneNumber();
setAddress(address: Address): void;
getAddress();

}
