import { IJob } from '../../interfaces/IJob'

export class Job implements IJob {
    
    constructor(
        public title: string,
        public description: string,
        public tags?: string[])
    { }
}