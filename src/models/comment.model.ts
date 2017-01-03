export class Comment {
    senderId: string;
    sender: string;
    addresseeId: string;
    content: string;
    postedOn?: Date;
    constructor(senderId: string, addresseeId: string, content: string, sender: string){
        this.senderId = senderId;
        this.addresseeId = addresseeId;
        this.content = content;
        this.sender = sender;
    }
}