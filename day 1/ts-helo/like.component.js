"use strict";
exports.__esModule = true;
exports.Likes = void 0;
var Likes = /** @class */ (function () {
    // let likesCount: number;
    function Likes(likesCount, isSelect) {
        this.likesCount = likesCount;
        this.likesCount = likesCount;
        this.isSelect = isSelect;
    }
    Likes.prototype.onClick = function () {
        this.likesCount += (this.isSelect) ? -1 : 1;
        this.isSelect = !this.isSelect;
    };
    Likes.prototype.getLikesCount = function () {
        return this.likesCount;
    };
    Likes.prototype.getIsSelect = function () {
        return this.isSelect;
    };
    return Likes;
}());
exports.Likes = Likes;
