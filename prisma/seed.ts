import { PrismaClient } from '@prisma/client';
import { users } from './seedData/users';
import { cars } from './seedData/cars';

const prisma = new PrismaClient();

async function clearSeedData() {  
  await prisma.trip.deleteMany({});  
  await prisma.car.deleteMany({});
  await prisma.user.deleteMany({});
}

async function seed() {
  await clearSeedData();
  try {
    // Create users and trips
    for (const userIndex in users) {
      const user = users[userIndex];

      const createdUser = await prisma.user.create({
        data: {
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          host: user.host,
          cars: {
            create: user.cars?.map(car => ({
              make: car.make,
              model: car.model,
              image: [],
              totalTrips: car.totalTrips,
              address: car.address,
              rating: car.rating,
            })),
          },
        },
      });

      const createdCars = [];
      for (const carIndex in cars) {
        const car = cars[carIndex];
        const createdCar = await prisma.car.create({
          data: {
            make: car.make,
            model: car.model,
            image: [],
            totalTrips: car.totalTrips,
            address: car.address,
            rating: car.rating,
            user: { connect: { id: createdUser.id } }, // Connect the user
          },
        });
        createdCars.push(createdCar);
      }

      const tripsForUser = user.trips;
      if (tripsForUser) {
        for (const tripIndex in tripsForUser) {
          const trip = tripsForUser[tripIndex];

          const car = createdCars[trip.carId];
          if (!car) {
            console.error('Car not found for trip', trip);
            continue; // Skip this trip if car is not found
          }

          const createdTrip = await prisma.trip.create({
            data: {
              startDate: new Date(trip.startDate),
              endDate: new Date(trip.endDate),
              review: trip.review,
              rating: trip.rating,
              user: { connect: { id: createdUser.id } }, // Connect the user
              car: { connect: { id: car.id } }, // Connect the car
            },
          });
          console.log('created trip', createdTrip);
        }
      }
    }
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seed()
