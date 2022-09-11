import {Pipe,PipeTransform} from '@angular/core'

@Pipe({
    name:'Description'
})

export class DescriptionPipe implements PipeTransform{
    transform(value: any,description:string) {
        return description.substring(0,200);
    }

}