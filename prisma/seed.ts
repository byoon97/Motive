import { Car, Prisma, PrismaClient, User, Trip } from '@prisma/client';
import { users } from './seedData/users';
import { cars } from './seedData/cars';

type TripWithOwner = Prisma.TripGetPayload<{
  include: { user: true }
}>

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
    let createdUsers:User[] = []
    let createdCars:Car[] = []

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
      createdUsers.push(createdUser)

        for (const car of user.cars) {
          // Check if the car has been created already
          const existingCar = createdCars.find(c => c.model === car.model && c.address === car.address);
          if (existingCar) {
          } else {
            const createdCar:Car = await prisma.car.create({
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
          }
      } 
    }

    users.forEach(async (user:any) => {
      if (user.trips) {
        for (const trip of user.trips) {
          const createdTrip = await prisma.trip.create({
            data: {
            startDate: new Date(trip.startDate),
            endDate: new Date(trip.endDate),
            review: trip.review,
            rating: trip.rating,
            user: { connect: { id: createdUsers[user.id - 1].id } },
            car: { connect: { id: createdCars[trip.carId].id } },
          },
        });
        console.log(createdTrip)
      }
    }
  })

  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seed()
