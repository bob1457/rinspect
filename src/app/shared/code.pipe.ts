import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'code'
})
export class CodePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value === 'G' ? `\u2714` : value;
    // return null;
  }

}
