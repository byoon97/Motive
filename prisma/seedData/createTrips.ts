function generateRandomDate(start: Date, end: Date): Date {
  const randomTime = start.getTime() + Math.random() * (end.getTime() - start.getTime());
  const randomDate = new Date(randomTime);

  // Set hours, minutes, seconds, and milliseconds to zero
  randomDate.setHours(0, 0, 0, 0);

  return randomDate;
}

const startDate = new Date();
interface Trip {
  id: number
  startDate: Date;
  endDate: Date;
  review: string;
  rating: number;
}

const endDate = new Date();
endDate.setDate(startDate.getDate() + 1);
// startDate: generateRandomDate(startDate, endDate),
// endDate: generateRandomDate(endDate, new Date()),

function generateRandomReview(): string {
  const reviews = [
    'Great trip! Enjoyed the experience.',
    'The car was clean and comfortable.',
    'Smooth ride overall.',
    'Not the best car I\'ve rented.',
    'Had a few issues during the trip.',
    'Would recommend this car to others.',
  ];
  return reviews[Math.floor(Math.random() * reviews.length)];
}

function generateRandomRating(): number {
  const minRating = 2.5;
  const maxRating = 5.0;
  const increment = 0.5;
  return minRating + Math.floor(Math.random() * ((maxRating - minRating) / increment)) * increment;
}

const fillTripArray = (trips:any) => {
  for (let i = 0; i <= 22; i++) {
    trips.push(  {
      id: i,
      startDate: generateRandomDate(startDate, endDate),
      endDate: generateRandomDate(endDate, new Date(endDate)),
      review: generateRandomReview(),
      rating: generateRandomRating(),
    })
  }

  return trips
}

export let trips: Trip[] = fillTripArray([])










  
