import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AwsComponent } from './aws.component'
import { AboutComponent, LatencyComponent } from './index'

const routes: Routes = [
  {
    path: '',
    component: AwsComponent,
    children: [
      {
        path: 'latency',
        data: { title: 'AWS Latency Test' },
        component: LatencyComponent
      },
      {
        path: 'about',
        data: { title: 'About' },
        component: AboutComponent
      },
      {
        path: '**',
        redirectTo: 'latency',
        pathMatch: 'full'
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AwsRoutingModule {}
