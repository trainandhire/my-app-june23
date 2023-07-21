import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { VariableComponent } from './variable/variable.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { ActivityComponent } from './activity/activity.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { AuthenticationGuard } from './authentication.guard';
import { CreateUserComponent } from './create-user/create-user.component';
import { NotifyGuard } from './notify.guard';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dashboard',component: DashboardComponent, canActivate:[AuthenticationGuard], children:[
    {path:'home', component:HomeComponent},
    {path:'info', component:InfoComponent},
    {path:'variable', component: VariableComponent},
    {path:'interpolation', component: InterpolationComponent},
    {path:'eventbinding', component:EventbindingComponent},
    {path:'twowaybinding', component: TwowaybindingComponent},
    {path:'calculator', component:CalculatorComponent},
    {path:'structural-directives', component:StructuralDirectivesComponent},
    {path:'attribute-directives', component: AttributeDirectivesComponent},
    {path:'vehicle', component: VehicleComponent},
    {path:'create-vehicle', component: CreateVehicleComponent},
    {path:'activity', component: ActivityComponent},
    {path:'create-user', component: CreateUserComponent, canDeactivate:[NotifyGuard]}
  ]},
  {path:'',component:LoginComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
