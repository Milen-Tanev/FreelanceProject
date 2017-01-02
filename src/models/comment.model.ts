export class Comment {
    senderId: string;
    addresseeId: string;
    content: string;
    postedOn?: Date;
    constructor(senderId: string, addresseeId: string, content: string){
        this.senderId = senderId;
        this.addresseeId = addresseeId;
        this.content = content;
    }
}