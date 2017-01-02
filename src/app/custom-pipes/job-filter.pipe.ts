import { Pipe, PipeTransform } from '@angular/core'

import { IJob } from '../../interfaces/IJob'

@Pipe({
    name: 'jobFilter'
})
export class JobFilterPipe implements PipeTransform {
    transform(value: IJob[], filterBy: string) {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((job: IJob) =>
            job.title.toLocaleLowerCase().indexOf(filterBy) !== -1) : value
    }
}