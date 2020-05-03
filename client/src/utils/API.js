import axios from "axios";

export default {
  // Gets all posts
  getReviews: function() {
    return axios.get("/api/reviewApi");
  },
  // Gets the post with the given id
  getReview: function(id) {
    return axios.get("/api/reviewApi/" + id);
  },
  // Deletes the post with the given id
  deleteReview: function(id) {
    return axios.delete("/api/reviewApi/" + id);
  },
  // Saves a post to the database
  saveReview: function(ReviewData) {
    return axios.post("/api/reviewApi", ReviewData);
  }
};
