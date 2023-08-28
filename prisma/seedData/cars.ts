import { trips } from "./trips";

const generateCarModel = (make: string): string => {
    const models: Record<string, string[]> = {
      Toyota: ['Corolla 2023', 'Camry 2017', 'RAV4 2020', 'Highlander 2019'],
      MercedesBenz : ['E-Class 2017', 'GLE-Class 2022', 'C-Class 2016'],
      BMW: ['M4 2019', 'X3 2015', '440i 2018'],
      Jeep: ['Wrangler 2024', 'Compas 2023', 'Cherokee 2019'],
      Nissan: ['Altima 2018', 'Maxima 2016'],
      Lamborghini: [],
      Porsche: [],
      Suburu: [],
      Tesla: ['Model 3 2023', 'Model Y 2022', 'Model X 2023'],
      Lexus: ['IS250 F 2023', 'NX 2024', 'GX 2020', 'RC-F 2017']
    };
    const randomModelIndex = Math.floor(Math.random() * models[make].length);
    return `${make} ${models[make][randomModelIndex]}`;
  };

export const cars = [
    {   
        id: 0,
        make: 'Toyota',
        model: generateCarModel('Toyota'),
        totalTrips: 3,
        address: '123 Main St, New York, NY',
        image: [],
        trips: [trips[0], trips[1], trips[2],],
        rating: 5
    },
    {   
        id: 1,
        make: 'Mercedes',
        model: generateCarModel('MercedesBenz'),
        totalTrips: 0,
        address: '456 Elm St, Brooklyn, NY',
        image: [],
        trips: [],
        rating: 5
    },
    {   
        id: 2,
        make: 'BMW',
        model: generateCarModel('BMW'),
        totalTrips: 1,
        address: '789 Oak St, Bronx, NY',
        image: [],
        trips: [trips[3]],
        rating: 5
    },
    {   
        id: 3,
        make: 'Jeep',
        model: generateCarModel('Jeep'),
        totalTrips: 2,
        address: '101 Maple St, Queens, NY',
        image: [],
        trips: [trips[4],trips[5]],
        rating: 5
    },
    {   
        id: 4,
        make: 'Nissan',
        model: generateCarModel('Lexus'),
        totalTrips: 5,
        address: '202 Pine St, Staten Island, NY',
        image: [],
        trips: [trips[6],trips[7],trips[8],trips[9],trips[10],],
        rating: 5
    },
    {   
        id: 5,
        make: 'Tesla',
        model: generateCarModel('Tesla'),
        totalTrips: 3,
        address: '987 Broadway Ave, New York, NY',
        image: [],
        trips: [trips[11],trips[12],trips[13],],
        rating: 5
    },
    {   
        id: 6,
        make: 'Tesla',
        model: generateCarModel('Tesla'),
        totalTrips: 2,
        address: '654 Ocean View Pkwy, Brooklyn, NY',
        image: [],
        trips: [trips[14],trips[15],],
        rating: 5
    },
    {   
        id: 7,
        make: 'Lexus',
        model: generateCarModel('Lexus'),
        totalTrips: 1,
        address: '321 Sunset Blvd, Bronx, NY',
        image: [],
        trips: [trips[16],],
        rating: 5
    },
    {   
        id: 8,
        make: 'Toyota',
        model: generateCarModel('Toyota'),
        totalTrips: 2,
        address: '543 Forest Ave, Queens, NY',
        image: [],
        trips: [trips[17],trips[18],],
        rating: 5
    },
    {   
        id: 9,
        make: 'BMW',
        model: generateCarModel('BMW'),
        totalTrips: 4,
        address: '876 Shoreline Rd, Staten Island, NY',
        image: [],
        trips: [trips[19],trips[20],trips[21],trips[22],],
        rating: 5
    },
]