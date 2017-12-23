"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Comment = (function () {
    function Comment(id, hotel_id, text, author, date, approved) {
        this.id = id;
        this.hotel_id = hotel_id;
        this.text = text;
        this.author = author;
        this.date = date;
        this.approved = approved;
    }
    return Comment;
}());
exports.Comment = Comment;
//# sourceMappingURL=Comment.model.js.map