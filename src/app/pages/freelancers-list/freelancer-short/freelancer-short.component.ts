import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserProfile } from '../../../../models/user-profile.model';

@Component({
  moduleId: 'module.id',
  selector: '[freelancer-profile-short]',
  templateUrl: './freelancer-short.component.html',
  styleUrls: ['./freelancer-short.component.css']
})
export class FreelancerShortComponent {

  @Input('freelancer-profile-short') freelancer: UserProfile;
}
