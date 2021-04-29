import express from "express";
import restaurantsCtrl from "./restaurants.controller.js"
import ReviewsCtrl from "./reviews.controller.js"

const router = express.Router();

router.route('/').get(restaurantsCtrl.apiGetRestaurants);

router.route("/id/:id").get(restaurantsCtrl.apiGetRestaurantById)
router.route("/cuisines").get(restaurantsCtrl.apiGetRestaurantCuisines)

router
  .route("/review")
  .post(ReviewsCtrl.apiPostReview)
  .put(ReviewsCtrl.apiUpdateReview)
  .delete(ReviewsCtrl.apiDeleteReview)

export default router;

