import {Account} from "./account";
import {Address} from "./address";

export class Orders {
    orderNumber: string;
    indexNumber: string;
    recordNumber: string;
    visitType: string;
    primaryAddress: string;
    orderDueDate: string;
    tivFromClarify:string;
    localStatus: number;
    isTrailingOrder:boolean;
    account: Account;
    address: Address;

    
  };