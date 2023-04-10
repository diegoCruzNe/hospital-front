import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: [],
})
export class RxjsComponent implements OnDestroy {
  public interalSubs!: Subscription;

  constructor() {
    /* this.retornaObservasble()
      .pipe(retry(2))
      .subscribe({
        next: (val) => console.log('Subs: ', val),
        error: (err) => console.warn('Error: ', err),
        complete: () => console.log('Observer completado!'),
      }); */
    this.interalSubs = this.retornaIntervalo().subscribe(/* console.log */);
  }
  ngOnDestroy(): void {
    this.interalSubs.unsubscribe();
  }

  retornaIntervalo(): Observable<number> {
    return interval(100).pipe(
      take(10),
      filter((valor) => (valor % 2 === 0 ? true : false)),
      map((val) => val + 1)
    );
  }

  retornaObservasble(): Observable<number> {
    let i = -1;

    return new Observable<number>((observer) => {
      const intervalo = setInterval(() => {
        i++;
        observer.next(i);
        if (i === 4) {
          clearInterval(intervalo);
          observer.complete();
        }

        if (i === 2) {
          observer.error('i llego al valor de 2');
        }
      }, 1000);
    });
  }
}
