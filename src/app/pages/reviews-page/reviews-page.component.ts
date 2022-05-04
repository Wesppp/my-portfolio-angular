import {Component, OnInit} from '@angular/core';
import {Review} from "../../shared/interfaces/review";
import {ReviewService} from "../../shared/services/review.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reviews-page',
  templateUrl: './reviews-page.component.html',
  styleUrls: ['./reviews-page.component.scss']
})
export class ReviewsPageComponent implements OnInit {
  review: Review = {email: "", id: 0, name: "", text: ""}
  // @ts-ignore
  reviewForm: FormGroup;

  constructor(private reviewService: ReviewService) {
  }

  ngOnInit(): void {
    this.reviewForm = new FormGroup({
      name: new FormControl(this.review.name, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(40)
      ]),
      email: new FormControl(this.review.email, [
        Validators.email,
        Validators.required
      ]),
      text: new FormControl(this.review.text, [
        Validators.maxLength(300),
        Validators.required,
      ])
    })
  }

  postReview(name: string, text: string, email: string) {
    if (this.reviewForm.valid) {
      this.reviewService.postReview({name, text, email} as Review)
        .subscribe(review => {
          if (review) {
            this.reviewService.updateComponent(review)
            this.reviewForm.reset()
          }
        }, error => console.log(error.message))
    }
  }
}
