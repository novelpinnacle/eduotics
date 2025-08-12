import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicBaseLayoutComponent } from './public-base-layout/public-base-layout.component';
import { HeroComponent } from './front-page/hero/hero.component';
import { PublicHeaderComponent } from './public-header/public-header.component';
import { PublicFooterComponent } from './public-footer/public-footer.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FrontPageComponent } from './front-page/front-page.component';
import { IconBoxesComponent } from './front-page/icon-boxes/icon-boxes.component';
import { StatisticsComponent } from './front-page/statistics/statistics.component';
import { ValueAddedFeaturesComponent } from './front-page/value-added-features/value-added-features.component';
import { GetStartedNowComponent } from './front-page/get-started-now/get-started-now.component';
import { TopCoursesComponent } from './front-page/top-courses/top-courses.component';
import { CommonModule } from '@angular/common';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AboutUsMainComponent } from './about-us/about-us-main/about-us-main.component';
import { AboutUsStatisticsComponent } from './about-us/about-us-statistics/about-us-statistics.component';
import { OurInstructorsComponent } from './about-us/our-instructors/our-instructors.component';
import { WhyEduoticsComponent } from './front-page/why-eduotics/why-eduotics.component';
import { AiBasedLearningComponent } from './front-page/why-eduotics/circle/ai-based-learning/ai-based-learning.component';
import { ElectronicMaterialComponent } from './front-page/why-eduotics/circle/electronic-material/electronic-material.component';
import { LiveClassRoomComponent } from './front-page/why-eduotics/circle/live-class-room/live-class-room.component';
import { TeachingSystemComponent } from './front-page/why-eduotics/circle/teaching-system/teaching-system.component';
import { UnbeatableGrowthComponent } from './front-page/why-eduotics/circle/unbeatable-growth/unbeatable-growth.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { CoursePageComponent } from './courses/course-page/course-page.component';
import { CourseIncludeComponent } from './courses/course-page/course-include/course-include.component';
import { CourseTopSectionComponent } from './courses/course-page/course-top-section/course-top-section.component';
import { CourseButtonsComponent } from './courses/course-page/course-buttons/course-buttons.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContactFormComponent } from './contact-us/contact-form/contact-form.component';
import { ContactComponent } from './contact-us/contact/contact.component';
import { UsersLoginComponent } from './users-login/users-login.component';
import { FormsModule } from '@angular/forms';
import { CourseHighlightsomponent } from './courses/course-page/course-hightlights/course-highlights';
import { ScheduleClassComponent } from './schedule-class/schedule-class.component';
import { Content8thComponent } from './courses/course-page/course-content/content8th/content8th.component';
import { Content9thComponent } from './courses/course-page/course-content/content9th/content9th.component';
import { Content10thComponent } from './courses/course-page/course-content/content10th/content10th.component';
import { Syllabus9thComponent } from './courses/course-page/course-syllabus/syllabus9th/syllabus9th.component';
import { MathTexPipe } from '../pipes/math-tex.pipe';
import { SafePipe } from '../pipes/safe';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  {
    path: '',
    component: PublicBaseLayoutComponent,
    children: [
      {
        path: '',
        component: FrontPageComponent,
      },
      {
        path: 'about-us',
        component: AboutUsComponent,
      },
      {
        path: 'courses',
        component: CoursesComponent,
      },
      {
        path: 'courses/:courseId',
        component: CoursePageComponent,
      },
      {
        path: 'contact-us',
        component: ContactUsComponent,
      },
    ],
  },
  {
    path: 'admin-login',
    component: UsersLoginComponent,
  },
  {
    path: 'schedule-class',
    component: ScheduleClassComponent,
  },
];

@NgModule({
  declarations: [
    HeroComponent,
    PublicBaseLayoutComponent,
    PublicHeaderComponent,
    PublicFooterComponent,
    FrontPageComponent,
    IconBoxesComponent,
    WhyEduoticsComponent,
    StatisticsComponent,
    ValueAddedFeaturesComponent,
    GetStartedNowComponent,
    TopCoursesComponent,
    LiveClassRoomComponent,
    AiBasedLearningComponent,
    ElectronicMaterialComponent,
    TeachingSystemComponent,
    UnbeatableGrowthComponent,
    TestimonialsComponent,
    AboutUsComponent,
    AboutUsMainComponent,
    AboutUsStatisticsComponent,
    OurInstructorsComponent,
    CoursesComponent,
    CoursesListComponent,
    CoursePageComponent,
    CourseHighlightsomponent,
    CourseIncludeComponent,
    CourseTopSectionComponent,
    CourseButtonsComponent,
    ContactUsComponent,
    ContactFormComponent,
    ContactComponent,
    UsersLoginComponent,
    ScheduleClassComponent,
    Content8thComponent,
    Content9thComponent,
    Content10thComponent,
    Syllabus9thComponent,

    MathTexPipe,
    SafePipe

  ],
  imports: [
    MatIconModule,

    CKEditorModule,
    CarouselModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class PublicModule { }
