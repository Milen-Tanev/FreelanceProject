import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserProfile } from '../../../../models/user-profile.model';

@Component({
  moduleId: 'module.id',
  selector: '[employer-profile-short]',
  templateUrl: './employer-short.component.html',
  styleUrls: ['./employer-short.component.css']
})
export class EmployerShortComponent {

  @Input('employer-profile-short') employer: UserProfile;
}
