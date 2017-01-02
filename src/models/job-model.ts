import { IJob } from '../interfaces/IJob';

export class Job implements IJob {
    id?: string;
    title: string;
    description: string;
    tags: string[];
    creatorId: string;
    creatorUsername: string;
    status: string;
    applyBeforeDate: Date;

    constructor(title: string, description: string, tags: string[], creatorId: string, creatorUsername: string, 
    status: string, applyBeforeDate: Date) {
        this.title = title;
        this.description = description;
        this.tags = tags;
        this.creatorId = creatorId;
        this.creatorUsername = creatorUsername;
        this.status = status;
        this.applyBeforeDate  = applyBeforeDate;
    }
}
