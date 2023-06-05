export class Likes{
    isSelect: boolean;
    // let likesCount: number;

    constructor(public likesCount: number, isSelect: boolean){
        this.likesCount = likesCount;
        this.isSelect = isSelect;
    }
    onClick(): void{
        this.likesCount += (this.isSelect) ? -1 : 1;
        this.isSelect = !this.isSelect;
    }
    getLikesCount(): number{
        return this.likesCount;
    }
    getIsSelect(): boolean{
        return this.isSelect;
    }

}