import { Pipe, PipeTransform } from '@angular/core'

import { User } from '../../models/user.model'

@Pipe({
    name: 'freelancersFilter'
})
export class FreelancersFilterPipe implements PipeTransform {
    transform(value: User[], filterFreelancers: string) {
        filterFreelancers = filterFreelancers ? filterFreelancers.toLocaleLowerCase() : null;
        return filterFreelancers ? value.filter((user: User) =>
            user.username.toLowerCase().indexOf(filterFreelancers) !== -1) : value
    }
}