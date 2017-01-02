export class JobApplication {
    id?: string;
    jobId: string;
    jobTitle: string;
    description: string;
    freelancerId: string;
    freelancerUsername: string;
    employerId: string;
    employerUserName: string;

    constructor(jobId: string, jobTitle: string, description: string, freelancerId: string, freelancerUsername: string, employerId: string, employerUserName: string) {
        this.jobId = jobId;
        this.jobTitle = jobTitle;
        this.description = description;
        this.freelancerId = freelancerId;
        this.freelancerUsername = freelancerUsername;
        this.employerId = employerId;
        this.employerUserName = employerUserName;
    }
}
