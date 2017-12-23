export class Comment {
    public id: number;
    public hotel_id: number;
    public text: string;
    public author: string;
    public date: string;
    public approved: string;

    constructor(id, hotel_id, text,author,date,approved) {
        this.id = id;
        this.hotel_id = hotel_id;
        this.text = text;
        this.author = author;
        this.date = date;
        this.approved = approved;
    }
}