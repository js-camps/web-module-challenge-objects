// Menu Items (MVP)
const latte = {name: "Cafe Latte", price: 4, category: "Drinks"};
const breakfastBurrito = {name: "Breakfast Burrito", price: 16, category:"Breakfast"};

// Task 1a: Function to create menu items
function createMenuItem(name, price, category) {
  return {name, price, category};
}

// Task 1b: Test the createMenuItem function
console.log(createMenuItem("Pizza", 5, "Lunch"));
console.log(createMenuItem("Tacos", 8, "Dinner"));
console.log(createMenuItem("Salad", 7, "Appetizer"));

// Task 2: Adding discount method to burger object
const burger = {
  name: "Burger", 
  price: 18, 
  category: "Lunch", 
  discount: function(person) {
    if (person === "teacher" || person === "student") {
      return this.price * 0.75;
    } else {
      return this.price * 0.90;
    }
  }
};

console.log(burger.discount("teacher")); // 13.5
console.log(burger.discount("student")); // 13.5
console.log(burger.discount("public"));  // 16.2

// Reviews (MVP)
const reviews = [
    {name: "Daniela", rating: 5, feedback: "Beautiful atmosphere and wonderful vegan options!"},
    {name: "Jack", rating: 3, feedback: "A little too hipster for my taste, but the burger was decent, if overpriced"},
    {name: "Miranda", rating: 4, feedback: "fun trivia and cool vibes"},
    {name: "Wen", rating: 4.5, feedback: "I don't leave my house often, but when I do, it's for this place. Highly recommend."},
    {name: "Brett", rating: 3, feedback: "great selection of snacks and a nice cafe area to get work done during the day."},
    {name: "Julius", rating: 2, feedback: "I was largely unimpressed by this venue. Nothing special on the menu and too expensive. The atmosphere is polarizing, and not for me, but I think some would like it." },
    {name: "Lauren", rating: 4, feedback: "Absolutely love that they have karaoke Fridays! Food and drink selection is okay."},
    {name: "Reyna", rating: 3.5, feedback: ""}
];

// Task 3: Log Julius' feedback
console.log(reviews[5].feedback);

// Task 4: Add feedback for Reyna
reviews[7].feedback = "this place is chill with really cool people, great for getting work done on weekdays";
console.log(reviews);

// Task 5: Function to add a review
function addReview(array, name, rating, feedback) {
  const newReview = {name, rating, feedback};
  array.push(newReview);
  return array;
}

console.log(addReview(reviews, 'Billy', 2, 'Lame food!'));

// Task 6: Function to get review by index
function getReviewByIndex(array, index) {
  const review = array[index];
  return `${review.name} gave the restaurant a ${review.rating} star review, and their feedback was: ${review.feedback}`;
}

console.log(getReviewByIndex(reviews, 0));

// Task 7: Function to get the last review
function getLastReview(array) {
  const lastReview = array[array.length - 1];
  return `${lastReview.name} gave the restaurant a ${lastReview.rating} star review, and their feedback was: ${lastReview.feedback}`;
}

console.log(getLastReview(reviews));

// Stretch 1: Function to get reviews by rating
function getReviewByRating(array, rating) {
  return array.filter(review => Math.floor(review.rating) === rating);
}

console.log(getReviewByRating(reviews, 4));

// Stretch 2: Function to get long reviews
function getLongReviews(array) {
  return array.filter(review => review.feedback.split(' ').length > 15);
}

console.log(getLongReviews(reviews));

// Stretch 3: Function to create a car object with a drive method
function carMaker(odometer) {
  return {
    odometer,
    drive: function(distance) {
      this.odometer += distance;
      return this.odometer;
    }
  };
}

const car1 = carMaker(10);
console.log(car1.drive(100)); // 110

// Do not modify below this line
function foo() {
  console.log('its working');
  return 'bar';
}

module.exports = {
  foo,
  createMenuItem,
  burger,
  addReview,
  getReviewByIndex,
  getLastReview,
};
