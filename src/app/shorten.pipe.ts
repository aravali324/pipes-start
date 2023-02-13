import { Pipe, PipeTransform } from "@angular/core";
import { pipe } from "rxjs";


@Pipe({name:"shortenName"})
export class shortName implements PipeTransform{
    transform(value: any, limit: number) {
        if(value.length >limit){
            return value.substr(0,10)+ "...";
        }else{
            return value;
        }
    }
    
}