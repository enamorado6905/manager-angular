import { Pipe, PipeTransform } from '@angular/core';

const FileSizeUnits = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
const FileSizeUnitsLong = [
  'Bytes',
  'Kilobytes',
  'Megabytes',
  'Gigabytes',
  'Pettabytes',
  'Exabytes',
  'Zettabytes',
  'Yottabytes',
];

@Pipe({
  name: 'formatFileSize',
})
export class FormatFileSizePipe implements PipeTransform {
  transform(sizeInBytes: number, longForm: boolean): string | void {
    if (!sizeInBytes) return;
    const units = longForm ? FileSizeUnitsLong : FileSizeUnits;
    let power = Math.round(Math.log(sizeInBytes) / Math.log(1024));
    power = Math.min(power, units.length - 1);
    const size = sizeInBytes / Math.pow(1024, power); // size in new units
    const formattedSize = Math.round(size * 100) / 100; // keep up to 2 decimals
    const unit = units[power];
    return `${formattedSize} ${unit}`;
  }
}
