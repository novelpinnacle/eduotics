import { Injectable } from "@angular/core";
import { CoreService } from "./core.service";

@Injectable({
    providedIn: 'root'
})

export class FrontEndService {
    constructor(private coreService:CoreService){
    
    }

    getSlideshows(){
        return this.coreService.getRequest("get-cms/slideshow")
    }

    getStatistics(){
        return this.coreService.getRequest("get-cms/statistics")
    }

    getValueAddedfeatures(){
        return this.coreService.getRequest("get-cms/value-added-features")
    }

    getGetStartedNow(){
        return this.coreService.getRequest("get-cms/get-started-now")
    }

    getTopCourses(){
        return this.coreService.getRequest("get-cms/browse-top-courses")
    }

    getTestimonials(){
        return this.coreService.getRequest("get-cms/testimonials")
    }

    getAboutUs(){
        return this.coreService.getRequest("get-cms/about-us")
    }
    getAboutUsStatistics(){
        return this.coreService.getRequest("get-cms/about-us-statistics")
    }

    getOurInstructors(){
        return this.coreService.getRequest("get-cms/teachers")
    }

    getAllToggles(){
        return this.coreService.getRequest("get-cms/cms-status")
    }

    saveContactInquiry(data){
        return this.coreService.postRequest("get-cms/save-contact-inquiry",data)
    }

}  