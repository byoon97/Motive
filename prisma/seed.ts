import { Prisma, PrismaClient } from '@prisma/client';
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
    const createdCars: { id: number; createdAt: Date; updatedAt: Date; make: string; totalTrips: number; address: string; model: string; rating: number; image: Prisma.JsonValue; ownerId: number; }[] = []; // Initialize the array here

    for (const userIndex in users) {
      const user = users[userIndex];
      const createdUser = await prisma.user.create({
        data: {
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          host: user.host,
        },
      });

      for (const car of user.cars) {
        // Check if the car has been created already
        const existingCar = createdCars.find(c => c.model === car.model && c.address === car.address);

        if (existingCar) {
          for (const trip of car.trips) {
            const createdTrip = await prisma.trip.create({
              data: {
                startDate: new Date(trip.startDate),
                endDate: new Date(trip.endDate),
                review: trip.review,
                rating: trip.rating,
                user: { connect: { id: createdUser.id } },
                car: { connect: { id: existingCar.id } },
              },
            });
          }
        } else {
          const createdCar = await prisma.car.create({
            data: {
              make: car.make,
              model: car.model,
              image: [],
              totalTrips: car.totalTrips,
              address: car.address,
              rating: car.rating,
              owner: { connect: { id: createdUser.id } },
            },
          });
          createdCars.push(createdCar);

          for (const trip of car.trips) {
            const createdTrip = await prisma.trip.create({
              data: {
                startDate: new Date(trip.startDate),
                endDate: new Date(trip.endDate),
                review: trip.review,
                rating: trip.rating,
                user: { connect: { id: createdUser.id } },
                car: { connect: { id: createdCar.id } },
              },
            });
          }
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
