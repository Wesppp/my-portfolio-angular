import { Component, OnInit } from '@angular/core';
import {Review} from "../../shared/interfaces/review";
import {ReviewService} from "../../shared/services/review.service";
import {transition, trigger, useAnimation} from "@angular/animations";
import {bounceInUp} from "ng-animate";

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
  animations: [
    trigger('addReview', [transition('void => *', useAnimation(bounceInUp))])
  ]
})
export class ReviewsComponent implements OnInit {
  review: Review = {email: "", id: 0, name: "", text: ""}
  reviews: Review[] = []
  loading: boolean = false;
  animate: any

  constructor(private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.loading = true
    this.getReviews()

    this.reviewService.updateObservable$.subscribe(review => {
      if(review) {
        let deletedReview = this.reviews.shift()
        this.reviews.push(review)
        if (deletedReview)
        this.reviewService.deleteReview(deletedReview.id).subscribe()
      }
    })
  }

  getReviews() {
    this.reviewService.getReviews()
      .subscribe(reviews => {
        if (reviews && reviews.length) {
          this.reviews = reviews
          this.loading = false
        }
      }, error => console.log(error.message))
  }
}
