import { StarIcon } from "@heroicons/react/20/solid";

const review = {
  rating: 2,
  content:
    "I really loved this product, but then I took it out of the box and realized I didn't like it at all.",
  author: "Emily Selman",
  avatarSrc:
    "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
};

// Good review has rating >= 4
// If no author, hide entire Review
// If good review, show ReviewRating, otherwise hide it. In place of review content, say "No review".
export default function GoodReview() {
  return (
    <div className="review">
      <div className="review-wrapper">
        <img className="review-avatar" />
        <div className="review-left">
          <h4 className="review-author"></h4>
          <ReviewRating review={review} />
        </div>
      </div>
      <div className="review-content"></div>
    </div>
  );
}

function ReviewRating({ review }) {
  return (
    <div className="review-rating">
      {[0, 1, 2, 3, 4].map((rating) => (
        <StarIcon className="review-star" />
      ))}
    </div>
  );
}
