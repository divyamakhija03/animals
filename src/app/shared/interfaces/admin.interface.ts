export interface volunteer{
    UserName:string,
    Occupation:string,
    Loc:string,
    UserID:number
}


export interface foster{
    UserName:string,
    Occupation:string,
    FosterID:number,
    UserID:number,
    Documents:string,
    number_of_days:number 
}

export interface adopt{
    UserName:string,
    Occupation:string,
    AdoptID:number,
    UserID:number,
    Caretaker:string,
    OtherpetsYN:number
}
