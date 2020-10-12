import {TastingRating} from "./TastingRating";
import {PlaceLocation} from './PlaceLocation';
export class Coffee
{
    //properties
    type:string;
    rating:number;
    notes:string;    
    testRating:TastingRating;

    constructor(public name:string,public place:string,public location:PlaceLocation)
    {

    }
}