import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mention'
})
export class MentionPipe implements PipeTransform {
  transform(score: number): string {
    if (score >= 18) return 'Excellent';
    if (score >= 16) return 'Tres Bien';
    if (score >= 14) return 'Bien';
    if (score >= 10) return 'Passable';
    return 'Ajourne';
  }
}
