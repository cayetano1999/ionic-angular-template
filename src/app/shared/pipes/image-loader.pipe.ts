import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'imageLoader',
    standalone: false
})
export class ImageLoaderPipe implements PipeTransform {

  transform(value: string | any): string {
    // Verificar si la URL es externa
    if (value.startsWith('http://') || value.startsWith('https://')) {
      return value;
    } else {
      // Asumir que la imagen es interna y agregar el prefijo correspondiente
      return `assets/img/${value}`;
    }
  }

}
