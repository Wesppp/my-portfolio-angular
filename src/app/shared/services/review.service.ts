import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {BehaviorSubject, catchError, finalize, Observable, of} from "rxjs";
import {Review} from "../interfaces/review";

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private reviewsUrl = 'api/reviews';
  isDisabled: boolean = false
  update = new BehaviorSubject<any>('');
  updateObservable$ = this.update.asObservable();

  updateComponent(data: any) {
    if (data) {
      this.update.next(data);
    }
  }

  constructor(private http: HttpClient) { }

  getReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(this.reviewsUrl).pipe(
      catchError(this.handleError<Review[]>('getHeroes', []))
    )
  }

  postReview(review: Review):Observable<Review> {
    if (this.isDisabled) {return of()}
    this.isDisabled = true

    return this.http.post<Review>(this.reviewsUrl, review, this.httpOptions).pipe(
      catchError(this.handleError<Review>('add review')),
      finalize(() => this.isDisabled = false)
    )
  }


  deleteReview(id: number): Observable<Review> {
    const url = `${this.reviewsUrl}/${id}`;
    return this.http.delete<Review>(url, this.httpOptions).pipe(
      catchError(this.handleError<Review>('delete review'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
}
