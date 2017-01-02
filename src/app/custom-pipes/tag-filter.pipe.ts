import { Pipe, PipeTransform } from '@angular/core'

import { IJob } from '../../interfaces/IJob'

@Pipe({
    name: 'tagFilter'
})
export class TagFilterPipe implements PipeTransform {
    transform(value: IJob[], tagsFiltered: string) {
        tagsFiltered = tagsFiltered ? tagsFiltered.toLocaleLowerCase() : null;
        let filtered = [];
        if (tagsFiltered) {
            value.filter((job: IJob) => {
                for (let tag of job.tags) {
                    if (tag.toLocaleLowerCase().indexOf(tagsFiltered) !== -1) {
                        filtered.push(job);
                    }
                }
            })
            return filtered;
        }
        else {
            return value;
        }

        // job.tags.indexOf(tagsFiltered) !== -1) : value
    }
}