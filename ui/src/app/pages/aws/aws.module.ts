import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { LineChartModule } from '@swimlane/ngx-charts'
import { SharedModule } from '../shared/shared.module'
import { AwsRoutingModule } from './aws-routing.module'
import {
  AboutComponent,
  AwsComponent,
  LatencyComponent
} from './index'

@NgModule({
  declarations: [
    AwsComponent,
    AboutComponent,
    LatencyComponent
  ],
  imports: [CommonModule, AwsRoutingModule, SharedModule, LineChartModule, FormsModule],
  providers: [],
  bootstrap: [],
  exports: []
})
export class AwsModule {}
