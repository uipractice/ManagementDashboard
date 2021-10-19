import {Pipe, PipeTransform, Output} from "@angular/core"
@Pipe({
name: 'charlimitpipe'
})
export class CharLimitpipe implements PipeTransform{
transform(value: string, limit: number){
if (value?.length >= limit){

return value.substr(0, limit) + '...';

}
return value;
}
}

//example html-{{ |charlimitpipe:30}}
