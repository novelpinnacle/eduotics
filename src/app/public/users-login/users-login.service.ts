import { Injectable } from "@angular/core";
import { CoreService } from "src/app/services/core.service";
@Injectable({
    providedIn: 'root',
})
export class UsersLoginService {
    
    constructor(private coreService:CoreService){}

    login(data){
       return this.coreService.postRequest("login",data)
    }

}