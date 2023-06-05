import { Likes } from './like.component';

let likes = new Likes(10, true);
console.log(`likesCount: ${likes.getLikesCount()}, isSelect: ${likes.getIsSelect()}`);
likes.onClick();
console.log(`likesCount: ${likes.getLikesCount()}, isSelect: ${likes.getIsSelect()}`);
likes.onClick();
console.log(`likesCount: ${likes.getLikesCount()}, isSelect: ${likes.getIsSelect()}`);
likes.onClick();
console.log(`likesCount: ${likes.getLikesCount()}, isSelect: ${likes.getIsSelect()}`);