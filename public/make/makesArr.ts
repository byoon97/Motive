export interface Makes {
    name: string
    subTitle: string
    intro: string
    intro2: string
    subDesc: [
        {
            title: string
            paragraph: string
        },
        {
            title: string
            paragraph: string
        },
        {
            title: string
            paragraph: string
        }
    ]
    allAboutTitle: string
    allAboutParagraph: string
    image: string
    models : [
        { 
            model: string,
            modelDescription: string
        },
        { 
            model: string,
            modelDescription: string
        },
        { 
            model: string,
            modelDescription: string
        },
    ]   
}

export const makesDescArr:Makes[] = [
    {
        name: 'Jeep',
        subTitle: 'For the road less traveled',
        intro: 'Whether driving in the city, sun, or snow, a Jeep is the perfect choice for anywhere your journey might take you.',
        intro2: 'Jeep’s modern models offer space and utility for your family trip, and trail-rated Jeeps have the rugged power to back up their tough-guy looks. In a Jeep you can hit the high road, low road, or any road in between in just about any condition.',
        subDesc: [
            {
                title: 'All-weather performance',
                paragraph: 'When the going gets tough, Jeeps keep going. With four-wheel-drive available throughout the lineup, any Jeep can instill confidence when driving through severe weather conditions, helping ensure you and your crew have a smooth vacation. Poor road conditions? No problem.',
            },
            {
                title: 'Five-seat convertible',
                paragraph: 'A Jeep Wrangler makes for a wholly original way to enjoy open-top motoring with friends: it’s the only four-door, five-seat convertible SUV on the market. Along with removable doors and a folding windshield, it adds up to the purest open-air experience, and takes your scenic trip to the next level.',
            },
            {
                title: 'Five-seat convertible',
                paragraph: 'With a selection of SUV models ranging from compact to full-size, it’s easy to find a Jeep with ample space for multiple people and adventure gear, making for smooth family getaways to popular vacation spots like national parks.',
            }
        ],
            allAboutTitle: 'What Jeeping is all about',
            allAboutParagraph: 'Driving a Jeep isn’t just for getting around — it’s a lifestyle. Jeeps let you do more, see more, and have more fun than cars that need to keep their feet dry. If you’re thinking about future trips, find a nearby Jeep on Turo for whatever adventure you’re planning, and discover why everyone loves the Jeep lifestyle.',
            image: 'https://resources.turo.com/f/81934/767x420/5d83e7eed9/jeep.jpg',
        models : [
            { 
                model: 'Jeep Wrangler',
                modelDescription: 'The Jeep brand owes its very existence to the Wrangler, its most iconic and capable model. Robust four-wheel-drive systems, solid front and rear axles, and unique tricks like removable doors enable the Wrangler to go where other SUVs dare not tread. What’s more, the removable roof and ample back seat space allow for fun in the sun for your whole crew.',
            },
            { 
                model: 'Jeep Gladiator',
                modelDescription: 'Essentially a pickup truck version of the Wrangler, the Gladiator blends that model’s ruggedness and off-road prowess with cavernous cargo space, thanks to its lengthened body and five-foot-long cargo bed. A strong V6 offers competitive performance and power, and the Gladiator stands alone as the only pickup that lets you go roofless on your outdoor adventure.',
            },
            { 
                model: 'Jeep Grand Cherokee',
                modelDescription: 'If you like your family getaways with a generous serving of refinement, Jeep’s top model beckons. A quiet and refined ride, a rich set of vehicle features, and room for adults in every row make for smooth sailing on the pavement, while Jeep’s available four-wheel-drive hardware makes the Grand Cherokee a rugged vehicle that can hold its own when the going gets tough.',
            },
        ]   
    },
    {
        name: 'Tesla',
        intro: 'When it comes to all-electric vehicles, one name rises above the rest: Tesla Motors. This American electric vehicle company gets all the buzz in the auto industry because they’ve proven that EVs can be appealing and exciting luxury vehicles, on top of having low maintenance costs, zero tailpipe or carbon emissions, and being excellent for the Earth.',
        intro2: 'Driving a Tesla is a fantastic experience and wholly different than driving anything else in the automotive consumer landscape. To sample the revolution for yourself, you can find Teslas right here on Turo.',
        subTitle : 'The future is here, and it’s electric',
        subDesc: [
            {
                title: 'The ultimate in EV',
                paragraph: 'Tesla is the top brand in battery-electric vehicles because they’ve won car buyers over with impressive driving range, innovative features, performance on par with sports cars from major automakers, and a novelty factor that still hasn’t worn off.',
            },
            {
                title: 'Sleek simplicity',
                paragraph: 'Tesla’s design language is one of sleek minimalism, both inside and out. Tesla models famously come with one giant touchscreen that controls just about every function inside the cabin (like the audio system, climate controls, and vehicle settings), nixing the need for buttons, knobs, or dials.',
            },
            {
                title: 'Mind-blowing speed',
                paragraph: 'Early EVs were known for being slow and sad, but Elon Musk’s creations blew those expectations out of the water. Every Tesla can do zero-to-60 in under six seconds — in some cases, half that — while using only a fraction as much energy as traditional gas-powered vehicles.',
            }
        ],
            allAboutTitle: 'Test drive a Tesla on Turo',
            allAboutParagraph: 'Curious about all the Tesla hype? Want to sample the Tesla driving experience and find out what its like to live with an electric vehicle? Book a Tesla here on Turo and test drive it for a few days to get a sense of what the EV life is like. You can test out charging a Tesla at your home, at your office, or at the company’s own charging station infrastructure.',
            image: 'https://resources.turo.com/f/81934/767x420/f6e7876e28/tesla.jpg',
        models : [
            { 
                model: 'Tesla Model 3',
                modelDescription: 'The most affordable Tesla is also known for being the most enjoyable to drive, thanks to its compact, low-slung body and athletic handling. Parties involving a full set of adults might want to opt for the bigger models, but if your passenger load is light, this is the Tesla to get for an amazing trip.',
            },
            { 
                model: 'Tesla Model S',
                modelDescription: 'As the car that put Tesla on the map, the Model S still stacks up well today thanks to its blend of comfort, driving finesse, and interior spaciousness. It also happens to offer the performance to match turbocharged luxury performance sedans, while getting the electric equivalent of quadruple their MPG. Its hatchback body and available third-row jump seats provide an edge in practicality, too.',
            },
            { 
                model: 'Tesla Model X',
                modelDescription: 'The Model X will be forever defined by its dramatic falcon-wing doors — a feature you would typically see on a rare exotic vehicle. Beyond the fancy portals, you’ll find a roomy SUV with seating for up to seven (depending on configuration), along with sporty handling and rapid acceleration.',
            },
        ]   
    },
    {
        name: 'Subaru',
        intro: 'No matter what kind of adventure you’re on — regardless of the road conditions — Subaru is the perfect vehicle for any kind of jaunt. Revel in reliable and premium engines, hearty suspension, a cabin full of extras, and, of course, Subarus` symmetrical all-wheel drive system.',
        intro2: 'Subaru remains a top choice for outdoor enthusiasts of all stripes because it truly is a great ride for all kinds of adventures — even if yours stick solely to the pavement.',
        subTitle : 'Love and outdoor bliss',
        subDesc: [
            {
                title: 'Trusted performance',
                paragraph: 'Subaru is a favorite vehicle in general, and they’ve got the awards to prove it. Subarus go beyond accolades, delivering genuine quality, innovations, and dependability people rely on for every outdoor adventure.',
            },
            {
                title: 'Undeniable utility',
                paragraph: 'There’s a Subaru for every adventure. Whether you take off in a Subaru Outback, Legacy, or an Ascent, you’ll have plenty of space for luggage. There are also a wide array of mechanical functions that put the vehicle to work for you — even in winter weather.',
            },
            {
                title: 'Connected vehicle features',
                paragraph: 'A connected ride is a safer adventure — and it makes for quite a pleasant experience, too. Available Wi-Fi is just the beginning. Built-in STARLINK lets you connect your Apple or Android seamlessly and Subaru roadside assistance lends peace of mind.',
            }
        ],
            allAboutTitle: 'Smell the fresh air in a Subaru',
            allAboutParagraph: 'Family road trip or backcountry adventure? Experience it in a Subaru. Rev up your taste for adventure and make your mark regardless of the weather conditions. Flexible configurations, seamless connectivity, award-winning safety, and responsive handling are just the beginning. Take one for an extended test drive, and see why Turo guests can’t get enough of all that Subaru love.',
            image: 'https://resources.turo.com/f/81934/767x420/f6e7876e28/tesla.jpg',
        models : [
            { 
                model: 'Subaru Outback',
                modelDescription: 'Rugged and ready to roll, the Subaru Outback is a crowd-pleaser across the country. Simply put: Driving is just more fun in this stylish SUV and practical. It’s easy to stay connected on the road, and stay safe, with a suite of features that make this the perfect vehicle for any trip, even in bad weather.',
            },
            { 
                model: 'Subaru Ascent',
                modelDescription: 'Family road trip in an SUV with plenty of room? Yes, please. That’s what the three-row Subaru Ascent was made for, and it truly delivers. Standard symmetrical all-wheel drive, hearty towing capacity, plenty of legroom, and fuel efficiency that won’t break the bank are just the beginning.',
            },
            { 
                model: 'Subaru Crosstrek',
                modelDescription: 'The Subaru Crosstrek is one part sports and one part utility, and a reliable vehicle for humble or ambitious journeys. A spacious and flexible cabin, connectivity favorites, and practical gas mileage make this the perfect vehicle for family adventures or any kind of road trip. Need roof rails? Check.',
            },
        ]   
    },
    {
        name: 'BMW',
        subTitle : 'Refined sports-luxury cars',
        intro: 'No automaker creates luxury vehicles that are equally elegant and fun to drive like BMW does. That’s why they’re a leader among German luxury brands.',
        intro2: 'Featuring hardcore track coupes, full-size luxury sedans, and capable SUVs, the BMW model range is diverse. Regardless, all BMW cars are responsive, stylish, and high-tech — BMW claims to build the ultimate driving machine, with good reason. Book a BMW on Turo for a proper Bimmer experience that will elevate any quick day trip to the next level.',
        subDesc: [
            {
                title: 'Responsive performance',
                paragraph: 'BMW brings you a connected, involved experience few other cars can match. Steering is direct, response from the pedals is immediate, and overall composure is excellent. Even a few minutes of driving a BMW makes it clear it’s not just an average car.',
            },
            {
                title: 'Superb quality',
                paragraph: 'BMW build quality is outstanding. There’s a solidity to BMW cars that’s clear whether you’re one with the interior or admiring from the outside. Materials are well-appointed and German engineering is at its best, giving confidence for any driving occasion.',
            },
            {
                title: 'Diverse options',
                paragraph: 'The BMW lineup continues to grow and diversify. BMW has luxury convertibles, crossovers, coupes, sedans, and wagons to choose from. That means no matter what you need a car for, you’ll be able to find a BMW for a comfortable ride.',
            }
        ],
            allAboutTitle: 'Feel legendary BMW performance',
            allAboutParagraph: 'With decades of experience, BMW builds cars that are far from ordinary. Whether you drive a practical BMW SUV or powerful BMW M car, you’ll be able to tell why BMW is known for luxury road performance. Find the best BMW rental alternatives to drive on Turo if you want to try a fun daily driver, sporty crossover, or luxury convertible — BMW has a car for any occasion.',
            image: 'https://resources.turo.com/f/81934/767x420/f87a43972b/bmw.png',
        models : [
            { 
                model: 'BMW 3 Series',
                modelDescription: 'The BMW 3 Series might be the world’s best sports sedan. All 3 Series models place an emphasis on driver experience, along with the size and practicality that makes them a superior choice. Whether you drive a BMW M3 or any other 3 Series model, you’ll know why it’s always been such a popular car.',
            },
            { 
                model: 'BMW X5',
                modelDescription: 'The BMW X5 is the luxury SUV that started it all. It’s got the sporty credentials that make it a genuine BMW, plus capability and practicality for all of life’s needs. The BMW X5’s cargo capacity and all-wheel drive make it a great choice for family trips or a solo journey.',
            },
            { 
                model: 'BMW Z4',
                modelDescription: 'Slide into a BMW Z4 and experience a roadster like no other. It’s an iconic model that exudes BMW’s philosophy of performance and sophistication impeccably. Mind-blowing aerodynamics and a turbocharged engine give new meaning to the word cruising from behind the wheel of this luxury sports car.'
            },
        ]   
    },
    {
        name: 'Mercedes-Benz',
        subTitle : 'Experience luxury and excellence',
        intro: 'When you drive a Mercedes-Benz, it’s immediately clear you’re not in just any premium vehicle.',
        intro2: 'It’s been said that luxury is the opposite of vulgarity, and in that sense Mercedes cars epitomize the word. Everything about Mercedes — from the styling to driving experience — is smooth and elegant. Still, with industry-leading technology and performance, they’re far from old-fashioned. Explore Mercedes and book one right here on Turo.',
        subDesc: [
            {
                title: 'Impressive comforts',
                paragraph: 'The feeling of driving a Mercedes is like no other. Anything you touch — the weight of the steering, the softness of the seats, even the click of control knobs — gives the sensation of opulence and an unmatched level of comfort. That’s the result of nearly a century of precision engineering and craftsmanship.',
            },
            {
                title: 'AMG muscle',
                paragraph: 'For all the luxury cars in the Mercedes lineup, AMG cars provide a savage contrast. The brand turns normal Mercedes vehicles into sporty, dynamic machines that are sure to thrill any driving enthusiast. Find a Mercedes-AMG rental alternative on Turo to get a sense for truly powerful German engineering and performance.',
            },
            {
                title: 'Innovative technology',
                paragraph: 'Mercedes continually pushes the boundaries of what’s possible in a car. Over the years Mercedes has compiled a list of extraordinary firsts: first use of ABS, first installation of airbags, first radar cruise control system. Only time will tell what features in today’s Mercedes will spread across the auto industry.',
            }
        ],
            allAboutTitle: 'Experience true luxury driving',
            allAboutParagraph: 'Sometimes luxury is a necessity, and a normal car simply won’t do. Whether it’s a car for a wedding, promising date, or vital business meeting, driving a Mercedes is a guaranteed way to impress. Book a Mercedes-Benz on Turo for that important occasion, a leisurely day trip, or an unforgettably fun drive.',
            image: 'https://resources.turo.com/f/81934/767x420/5f032f33dc/mercedes-benz.png',
        models : [
            { 
                model: 'Mercedes-Benz C-Class',
                modelDescription: 'The Mercedes C-Class may be small, but shares the luxury and technology features of its larger counterparts. The C-Class sedan is the perfect size to get around town with a few passengers, or drive a C63 AMG to feel massive power in a compact body.',
            },
            { 
                model: 'Mercedes-Benz G-Class',
                modelDescription: 'The G-Class is Mercedes-Benz’s legendary 4x4-turned-luxury-cruiser. The boxy build of the Mercedes G-Wagon makes it instantly recognizable on roads, and it offers a wonderful experience with a smooth ride. Find a Mercedes-AMG G63 or G65 for true AMG power in a luxurious SUV.',
            },
            { 
                model: 'Mercedes-Benz GLE-Class',
                modelDescription: 'With enough space for family road trips or a smaller excursion, the Mercedes-Benz GLE-Class fuses sophistication and athleticism into a roomy SUV for a luxurious travel experience.'
            },
        ]   
    },
    {
        name: 'Toyota',
        subTitle : 'Toyota is known around the globe for its practical, efficient, and dependable vehicles.',
        intro: 'Toyota is known around the globe for its practical, efficient, and dependable vehicles.',
        intro2: 'Japan’s #1 brand builds a wide range of sedans, sports cars, crossovers, and pickup trucks — many available in hybrid form with stellar gas mileage — that can fulfill anyone’s transport needs. Whether you’re looking for a long-term ride or a temporary replacement vehicle, a Toyota can get the job done without fuss.',
        subDesc: [
            {
                title: 'Hybrid innovation',
                paragraph: 'Toyota both pioneered and popularized hybrids, and remains a leader in the segment today. No longer just limited to the Prius, models with hybrid assistance have expanded across the range, meaning there’s a high-MPG version of most Toyota vehicles.',
            },
            {
                title: 'Budget friendly',
                paragraph: 'Choosing a Toyota is a proven way to keep driving costs low. Toyotas are great on gas, simple to maintain, and rank at the top of the industry in reliability. This all helps make a Toyota inexpensive to drive in both the day-to-day and the long haul, making all those happy families and high customer reviews no surprise.',
            },
            {
                title: 'Surprisingly entertaining',
                paragraph: 'No longer content with being dependable and efficient, Toyota has been making its cars more pleasurable in recent years. The results are evident in the increased agility of newer Camrys and RAV4s, and in the existence of dedicated rear-wheel-drive sports cars like the Supra and 86.',
            }
        ],
            allAboutTitle: 'The smart way to get to where you’re going',
            allAboutParagraph: 'Toyota is among the world’s best-selling automakers, and for good reason. With legendary durability, efficiency, and safety, you can drive a Toyota to take you anywhere.',
            image: 'https://resources.turo.com/f/81934/767x420/690e344244/toyota.jpg',
        models : [
            { 
                model: 'Toyota Tacoma',
                modelDescription: 'While pickup trucks with sedan underpinnings have been springing up lately, the Tacoma proudly sticks to its tough, traditional roots. With a ladder frame, rear-wheel drive, and the strong and modern V6 found on most models, this rugged truck can haul and cruise in a way the new kids can’t. Pick up a four-wheel-drive TRD model for a worry-free weekend getaway to the mountains, beach, or desert.',
            },
            { 
                model: 'Toyota RAV4',
                modelDescription: 'Excluding pickup trucks, this is America’s best-selling vehicle, and it’s easy to see why. An agreeable blend of competent handling, class-leading fuel efficiency (27 MPG), and useful back seat and cargo space, the Toyota RAV4 has few weaknesses as an all-around daily driver. Unique in its class, the RAV4 is also available as a hybrid (37 MPG), as well as a plug-in hybrid called the RAV4 Prime, which can go 42 miles on electric power alone.',
            },
            { 
                model: 'Toyota Camry',
                modelDescription: 'Camrys have always been dependable and comfortable, but try out the current generation (2018+) and you’ll find a stylish sedan with a healthy dose of agility and personality in the mix, giving the driver some enjoyment on family getaways. Its standard engine offers good performance and mileage, and this is among the last sedans to still offer a performance-boosting V6, boasting 301 horsepower. At the other end of the spectrum, the Camry Hybrid tops the class in gas mileage, scoring a lofty 47 MPG.'
            },
        ]   
    },
    {
        name: 'Nissan',
        subTitle : 'Modern features and much more',
        intro: 'Weekend getaway or daily drive, a Nissan is a great way to go. Loaded with the latest technology and advanced safety features, Nissan vehicles take charge of any road.',
        intro2: 'From the rugged Nissan Pathfinder and Nissan Rogue to the fuel-friendly Nissan LEAF, these dependable vehicles offer something for everyone. Yet the bold styling and advanced features bring a sense of sumptuousness to every drive.',
        subDesc: [
            {
                title: 'Sleek design',
                paragraph: 'Bold exteriors and refined cabins make each Nissan a visual stunner. Behind the looks are function and comfortability that make your driving pleasure the top priority, from their midsize vehicles to their compacts to their family haulers.',
            },
            {
                title: 'Modern features',
                paragraph: 'Technology isn’t just about what a car can do — it’s about what the car can do for you. Nissan’s advancements are tailored to make each trip individualized for your needs and preferences. From responsive handling and solid engines to that all-important — and good-looking — dash console, these cars and sport utility vehicles are built to make every trip enjoyable with driver assist technologies and connectivity made simple.',
            },
            {
                title: 'Dependable vehicles',
                paragraph: 'From electric vehicles and passenger vehicles to sedans and sports cars, Nissan vehicles are built to deliver a smooth, powerful ride. More than that, they stand the test of time.',
            }
        ],
            allAboutTitle: 'Practicality meets performance',
            allAboutParagraph: 'Nissan makes a line of sleek, dependable vehicles perfect for weekend getaways and business trips alike. Inside, you’ll find a suite of comforts and technology to make every drive enjoyable. Along with advanced safety features and powerful yet efficient engines, you’re likely to become a Nissan enthusiast long before the engine starts.',
            image: 'https://resources.turo.com/f/81934/768x420/40e6837ddd/us_nissan_car_rental.jpg',
        models : [
            { 
                model: 'Nissan Rogue',
                modelDescription: 'Experience excitement at every turn in a sports utility vehicle that puts you in command of the road. An array of helpful audio and navigation controls make going anywhere in the Rogue a true pleasure, while the spacious cabin and available all-wheel drive are built for everyday outings and once-in-a-lifetime adventures.',
            },
            { 
                model: 'Nissan Altima',
                modelDescription: 'Hit the road in a Nissan Altima and take off in a spacious sedan that’s anything but ordinary. From versatile seating arrangements and customizable connectivity to award-winning advanced safety features, this sedan is sure to please.',
            },
            { 
                model: 'Nissan LEAF',
                modelDescription: 'The Nissan LEAF has been thriving on electric power for well over a decade. It’s packed with driver assist technology, responsive handling, and impressive performance that lets you arrive in comfort — and confidence.'
            },
        ]   
    },
]

// {
//     name: '',
//     subTitle : '',
//     intro: '',
//     intro2: '',
//     subDesc: [
//         {
//             title: '',
//             paragraph: '',
//         },
//         {
//             title: '',
//             paragraph: '',
//         },
//         {
//             title: '',
//             paragraph: '',
//         }
//     ],
//         allAboutTitle: '',
//         allAboutParagraph: '',
//         image: '',
//     models : [
//         { 
//             model: '',
//             modelDescription: '',
//         },
//         { 
//             model: '',
//             modelDescription: '',
//         },
//         { 
//             model: '',
//             modelDescription: ''
//         },
//     ]   
// },