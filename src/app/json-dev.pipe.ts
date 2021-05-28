import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jsonDev'
})
export class JsonDevPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
