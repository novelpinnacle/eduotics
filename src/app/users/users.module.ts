import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { CarouselModule } from "ngx-owl-carousel-o";
import { UsersBaseLayoutComponent } from './layout/users-base-layout/users-base-layout.component';
import { UsersHeaderComponent } from './layout/users-header/users-header.component';
import { UsersSidebarComponent } from './layout/users-sidebar/users-sidebar.component';
import { UsersDashboardComponent } from './users-dashboard/users-dashboard.component';

const routes: Routes = [
    {
        path: '',
        component:UsersBaseLayoutComponent,
        children:[
            {
                path:'',
                component:UsersDashboardComponent
            }
        ]
    }
]

@NgModule({
    declarations: [UsersBaseLayoutComponent, UsersHeaderComponent, UsersSidebarComponent, UsersDashboardComponent],
    imports: [
        CarouselModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class UsersModule { }