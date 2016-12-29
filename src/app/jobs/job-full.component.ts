import {IUser} from '../../interfaces/IUser';
import {IComment} from '../../interfaces/IComment';
import {Component} from '@angular/core'

//Add template url
@Component({
    selector:'job-component'
})
export class JobsComponent {
    payment:number
    user:IUser
    description:string
    comments:IComment[]
}