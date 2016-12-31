export class UserProfile {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    country: string;
    companyName: string;
    role: string;
    description: string;
    // TODO - add arrays for receveid comments, posted comments,received ratings, given ratings    
    constructor(username: string, firstName: string, lastName: string, email: string, country: string, companyName: string, role: string, description: string) {
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.country = country;
        this.companyName = companyName;
        this.role = role;
        this.description = description;
    }
}
