const ReviewModel = require('../models/reviews');


async function getReviews(request, response, next) {
  console.log(request.user.email);
  try {
    const reviews = await ReviewModel.find({ email: request.user.email });
    response.status(200).send(reviews);
  } catch (error) {
    console.error(error);
    next(error);
  }
}
async function createReviews(request, response, next) {
  console.log(request.user.email);
  try {
    const reviews = await ReviewModel.create({ email: request.user.email });
    response.status(200).send(reviews);
  } catch (error) {
    console.error(error);
    next(error);
  }
}

const deleteReview = async (request, response, next) => {
  try {

    const reviewToBeDeleted = await ReviewModel.findOne({ _id: request.params.id, email: request.user.email });
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

let handleGetUser = async (request, response) => {
  console.log('Getting the user');
  response.send(request.user);
};

module.exports = { getReviews, deleteReview, updatedReview, handleGetUser };
