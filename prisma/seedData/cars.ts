import { trips } from "./trips";

type Trip = {
    startDate: string;
    endDate: string;
    userId: number;
    carId: number;
    review: string;
    rating: number;
  };

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

  function calculateAverageRating(trips:Trip[]): number {
    const sumOfRatings = trips.reduce((sum:number, trip) => sum + trip.rating, 0);
    const averageRating = sumOfRatings / trips.length;
    return averageRating;
  }

export const cars = [
    {   
        id: 0,
        make: 'Toyota',
        model: generateCarModel('Toyota'),
        totalTrips: 3,
        address: '123 Main St, New York, NY',
        ppd: 37.50,
        image: ['https://img2.carmax.com/assets/24681496/image/hero.jpg?width=800&height=450',
        'https://img2.carmax.com/assets/24681496/image/24.jpg?width=1600&height=1200',
        'https://img2.carmax.com/assets/24681496/image/20.jpg?width=1600&height=1200',
        'https://img2.carmax.com/assets/24681496/image/21.jpg?width=1600&height=1200',
        'https://img2.carmax.com/assets/24681496/image/2.jpg?width=1600&height=1200'],
        trips: [trips[0], trips[1], trips[2],],
        rating: calculateAverageRating([trips[0], trips[1], trips[2]])
    },
    {   
        id: 1,
        make: 'Mercedes',
        model: generateCarModel('MercedesBenz'),
        totalTrips: 0,
        ppd: 95,
        address: '456 Elm St, Brooklyn, NY',
        image: ['https://media.ed.edmunds-media.com/mercedes-benz/gle-class/2021/oem/2021_mercedes-benz_gle-class_4dr-suv_amg-gle-53_fq_oem_1_815x543.jpg',
        'https://media.ed.edmunds-media.com/mercedes-benz/gle-class/2021/oem/2021_mercedes-benz_gle-class_4dr-suv_amg-gle-53_d_oem_1_815x543.jpg',
        'https://media.ed.edmunds-media.com/mercedes-benz/gle-class/2021/oem/2021_mercedes-benz_gle-class_4dr-suv_amg-gle-63-s_ri_oem_1_175.jpg'
        ,'https://media.ed.edmunds-media.com/mercedes-benz/gle-class/2021/oem/2021_mercedes-benz_gle-class_4dr-suv_gle-450-4matic_rsd_oem_1_175.jpg',
        ],
        trips: [],
        rating: 0
    },
    {   
        id: 2,
        make: 'BMW',
        model: generateCarModel('BMW'),
        totalTrips: 1,
        ppd: 85,
        address: '789 Oak St, Bronx, NY',
        image: ['https://static.cargurus.com/images/forsale/2023/08/23/02/51/2020_bmw_m4-pic-7752928470174892826-1024x768.jpeg',
        'https://static.cargurus.com/images/forsale/2023/08/23/02/51/2020_bmw_m4-pic-551549773834869968-1024x768.jpeg',
        'https://static.cargurus.com/images/forsale/2023/08/23/02/51/2020_bmw_m4-pic-7958690304860800210-1024x768.jpeg',
        'https://static.cargurus.com/images/forsale/2023/08/23/02/51/2020_bmw_m4-pic-8077711544995505255-1024x768.jpeg'],
        trips: [trips[3]],
        rating: calculateAverageRating([trips[3]])
    },
    {   
        id: 3,
        make: 'Jeep',
        model: generateCarModel('Jeep'),
        totalTrips: 2,
        ppd: 50,
        address: '101 Maple St, Queens, NY',
        image: ['https://img2.carmax.com/assets/24448222/image/hero.jpg?width=800&height=450',
        'https://img2.carmax.com/assets/24448222/image/23.jpg?width=1600&height=1200',
        'https://img2.carmax.com/assets/24448222/image/10.jpg?width=1600&height=1200',
        'https://img2.carmax.com/assets/24448222/image/19.jpg?width=1600&height=1200',
        'https://img2.carmax.com/assets/24448222/image/20.jpg?width=1600&height=1200'],
        rating: calculateAverageRating([trips[4],trips[5]])
    },
    {   
        id: 4,
        make: 'Nissan',
        model: generateCarModel('Lexus'),
        totalTrips: 5,
        ppd: 43,
        address: '202 Pine St, Staten Island, NY',
        image: ['https://static.cargurus.com/images/forsale/2023/08/11/08/08/2017_lexus_rc_f-pic-4259494088294970223-1024x768.jpeg',
        'https://static.cargurus.com/images/forsale/2023/08/11/08/08/2017_lexus_rc_f-pic-3474809356503720972-1024x768.jpeg',
        'https://static.cargurus.com/images/forsale/2023/08/11/08/08/2017_lexus_rc_f-pic-7646294000897384187-1024x768.jpeg',
        'https://static.cargurus.com/images/forsale/2023/08/11/08/08/2017_lexus_rc_f-pic-4112410148586814347-1024x768.jpeg',
        'https://static.cargurus.com/images/forsale/2023/08/11/08/08/2017_lexus_rc_f-pic-4335103097286044569-1024x768.jpeg'],
        rating: calculateAverageRating([trips[6],trips[7],trips[8],trips[9],trips[10],])
    },
    {   
        id: 5,
        make: 'Tesla',
        model: generateCarModel('Tesla'),
        totalTrips: 3,
        ppd: 60,
        address: '987 Broadway Ave, New York, NY',
        image: ['https://img2.carmax.com/assets/23220153/image/hero.jpg?width=800&height=450',
        'https://img2.carmax.com/assets/23220153/image/8.jpg?width=1600&height=1200',
        'https://img2.carmax.com/assets/23220153/image/10.jpg?width=1600&height=1200',
        'https://img2.carmax.com/assets/23220153/image/18.jpg?width=1600&height=1200',
        'https://img2.carmax.com/assets/23220153/image/13.jpg?width=1600&height=1200'],
        rating: calculateAverageRating([trips[11],trips[12],trips[13],]),
       
    },
    {   
        id: 6,
        make: 'Tesla',
        model: generateCarModel('Tesla'),
        totalTrips: 2,
        ppd: 50,
        address: '654 Ocean View Pkwy, Brooklyn, NY',
        image: ['https://static.cargurus.com/images/forsale/2023/06/12/21/37/2022_tesla_model_x-pic-6338590471141141348-1024x768.jpeg',
        'https://static.cargurus.com/images/forsale/2023/06/12/21/37/2022_tesla_model_x-pic-8070626654840684229-1024x768.jpeg',
        'https://static.cargurus.com/images/forsale/2023/06/12/21/37/2022_tesla_model_x-pic-6426709072387045116-1024x768.jpeg',
        'https://static.cargurus.com/images/forsale/2023/06/12/21/37/2022_tesla_model_x-pic-1450742016518758700-1024x768.jpeg',
        'https://static.cargurus.com/images/forsale/2023/06/12/21/37/2022_tesla_model_x-pic-4700801719282134810-1024x768.jpeg'],
        rating: calculateAverageRating([trips[14],trips[15],]),
    },
    {   
        id: 7,
        make: 'Lexus',
        model: generateCarModel('Lexus'),
        totalTrips: 1,
        ppd: 78,
        address: '321 Sunset Blvd, Bronx, NY',
        image: ['https://listings-prod.tcimg.net/listings/214232/41/12/JTHGZ1B20P5061241/D345ZBIPM2TUDIUJOCYWTWFNFU-cr-860.jpg',
        'https://listings-prod.tcimg.net/listings/214232/41/12/JTHGZ1B20P5061241/6GJMD7O5NTEDJEZEMMIVU67ANA-cr-1400.jpg',
        'https://listings-prod.tcimg.net/listings/214232/41/12/JTHGZ1B20P5061241/BB5EZMBLQZYGXA2HLF7MMN7DKM-cr-1400.jpg',
        'https://listings-prod.tcimg.net/listings/214232/41/12/JTHGZ1B20P5061241/2YTIREY235R4JJHHNYGHY5ZZDU-cr-1400.jpg',
        'https://listings-prod.tcimg.net/listings/214232/41/12/JTHGZ1B20P5061241/7KVG4HJIE4DXI3XKK4OGUUQ6VU-cr-1400.jpg'],
        rating: calculateAverageRating([trips[16],]),
    },
    {   
        id: 8,
        make: 'Toyota',
        model: generateCarModel('Toyota'),
        totalTrips: 2,
        ppd: 50,
        address: '543 Forest Ave, Queens, NY',
        image: ['https://img2.carmax.com/assets/24292595/image/hero.jpg?width=800&height=450',
        'https://img2.carmax.com/assets/24292595/image/24.jpg?width=1600&height=1200',
        'https://img2.carmax.com/assets/24292595/image/11.jpg?width=1600&height=1200',
        'https://img2.carmax.com/assets/24292595/image/20.jpg?width=1600&height=1200',
        'https://img2.carmax.com/assets/24292595/image/21.jpg?width=1600&height=1200'],
        rating: calculateAverageRating([trips[17],trips[18],]),
    },
    {   
        id: 9,
        make: 'BMW',
        ppd: 80,
        model: generateCarModel('BMW'),
        totalTrips: 4,
        address: '876 Shoreline Rd, Staten Island, NY',
        image: ['https://img2.carmax.com/assets/24842170/image/hero.jpg?width=800&height=450',
        'https://img2.carmax.com/assets/24842170/image/25.jpg?width=1600&height=1200',
        'https://img2.carmax.com/assets/24842170/image/11.jpg?width=1600&height=1200',
        'https://img2.carmax.com/assets/24842170/image/21.jpg?width=1600&height=1200',
        'https://img2.carmax.com/assets/24842170/image/5.jpg?width=1600&height=1200'],
        rating: calculateAverageRating([trips[19],trips[20],trips[21],trips[22],]),
    },
]