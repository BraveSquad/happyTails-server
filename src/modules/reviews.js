const ReviewModel = require('../models/reviews');


async function getAllReviews(req, res, next) {
  console.log('GET ALL REVIEWS', req.body);
  try {
    const reviews = await ReviewModel.find({ email: req.user.email });
    res.status(200).send(reviews);
  } catch (error) {
    console.error(error);
    next(error);
  }
}


async function createReviews(req, res) {
  console.log('REVIEW', req.body);
  try {
    const newReview = await ReviewModel.create({
      ...req.body, userName: req.body.userName,
      email: req.body.email,
      review: req.body.review,
      stars: req.body.stars
    })
    res.status(200).send('review created!')

  } catch (e) {
    res.status(500).send('server error');
  }
}
//help
const deleteReview = async (request, response, next) => {
  console.log('REQREVIEW', request.params)
  try {

    const reviewToBeDeleted = await ReviewModel.findOne({ _id: request.params.id, email: request.user.email });
    console.log('deleted', reviewToBeDeleted)
    if (!reviewToBeDeleted) response.status(404).send('Unable to find that review to delete');
    else {
      await ReviewModel.findByIdAndDelete(request.params.id);
      response.status(200).send('Review was sucessfully deleted');
    }
  } catch (error) {
    error.customMessage = 'Something went wrong with deleting your Review!';
    console.error(error.customMessage + error);
    next(error);
  }
};

let updatedReview = async (request, response, next) => {
  try {
    const updatedReview = await ReviewModel.findByIdAndUpdate(request.params.id, request.body, { new: true });
    response.status(200).send(updatedReview);

  } catch (error) {
    error.customMessage = 'Something went wrong with updating your Review!';
    console.error(error.customMessage + error);
    next(error);
  }
};

let handleGetReview = async (request, response) => {
  console.log('Getting the user');
  response.send(request.user);
};

module.exports = { getAllReviews, deleteReview, updatedReview, handleGetReview, createReviews };
