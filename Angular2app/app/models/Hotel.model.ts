export class Hotel {
    public id: number;
    public title: string;
    public content: string;
    public price: number;
    public available: boolean;
    public whereabout: string;
    public country: string;
    public thumbnail: string;
    public comfort: string;

    constructor(id, title, content,price,available,whereabouts,country,thumbnail,comfort) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.price = price;
        this.available = available;
        this.whereabout = whereabouts;
        this.country = country;
        this.thumbnail = thumbnail;
        this.comfort = comfort;
    }
}