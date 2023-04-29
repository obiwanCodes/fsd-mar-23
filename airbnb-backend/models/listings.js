import mongoose from "mongoose";

const listingSchema = mongoose.Schema({
  listing_url: {
    type: String,
    required: [true, "Please provide listin url to create a stay"],
  },
  name: {
    type: String,
    required: [true, "Please provide the name of the stay"],
  },
  summary: {
    type: String,
    required: false,
  },
});

const Listing = mongoose.model("Listing", listingSchema);
export default Listing;
// {
//   "_id": {
//     "$oid": "6444124dca606f2aafcbf171"
//   },
//   "listing_url": "https://www.airbnb.com/rooms/10006546",
//   "name": "Ribeira Charming Duplex",
//   "summary": "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube) - UNESCO World Heritage Site. Centenary building fully rehabilitated, without losing their original character.",
//   "space": "Privileged views of the Douro River and Ribeira square, our apartment offers the perfect conditions to discover the history and the charm of Porto. Apartment comfortable, charming, romantic and cozy in the heart of Ribeira. Within walking distance of all the most emblematic places of the city of Porto. The apartment is fully equipped to host 8 people, with cooker, oven, washing machine, dishwasher, microwave, coffee machine (Nespresso) and kettle. The apartment is located in a very typical area of the city that allows to cross with the most picturesque population of the city, welcoming, genuine and happy people that fills the streets with his outspoken speech and contagious with your sincere generosity, wrapped in a only parochial spirit.",
//   "description": "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube) - UNESCO World Heritage Site. Centenary building fully rehabilitated, without losing their original character. Privileged views of the Douro River and Ribeira square, our apartment offers the perfect conditions to discover the history and the charm of Porto. Apartment comfortable, charming, romantic and cozy in the heart of Ribeira. Within walking distance of all the most emblematic places of the city of Porto. The apartment is fully equipped to host 8 people, with cooker, oven, washing machine, dishwasher, microwave, coffee machine (Nespresso) and kettle. The apartment is located in a very typical area of the city that allows to cross with the most picturesque population of the city, welcoming, genuine and happy people that fills the streets with his outspoken speech and contagious with your sincere generosity, wrapped in a only parochial spirit. We are always available to help guests",
//   "neighborhood_overview": "In the neighborhood of the river, you can find several restaurants as varied flavors, but without forgetting the so traditional northern food. You can also find several bars and pubs to unwind after a day's visit to the magnificent Port. To enjoy the Douro River can board the boats that daily make the ride of six bridges. You can also embark towards Régua, Barca d'Alva, Pinhão, etc and enjoy the Douro Wine Region, World Heritage of Humanity. The Infante's house is a few meters and no doubt it deserves a visit. They abound grocery stores, bakeries, etc. to make your meals. Souvenir shop, wine cellars, etc. to bring some souvenirs.",
//   "notes": "Lose yourself in the narrow streets and staircases zone, have lunch in pubs and typical restaurants, and find the renovated cafes and shops in town. If you like exercise, rent a bicycle in the area and ride along the river to the sea, where it will enter beautiful beaches and terraces for everyone. The area is safe, find the bus stops 1min and metro line 5min. The bustling nightlife is a 10 min walk, where the streets are filled with people and entertainment for all. But Porto is much more than the historical center, here is modern museums, concert halls, clean and cared for beaches and surf all year round. Walk through the Ponte D. Luis and visit the different Caves of Port wine, where you will enjoy the famous port wine. Porto is a spoken city everywhere in the world as the best to be visited and savored by all ... natural beauty, culture, tradition, river, sea, beach, single people, typical food, and we are among those who best receive tourists, confirm! Come visit us and feel at ho",
//   "transit": "Transport: • Metro station and S. Bento railway 5min; • Bus stop a 50 meters; • Lift Guindais (Funicular) 50 meters; • Tuc Tuc-to get around the city; • Buses tourist; • Cycling through the marginal drive; • Cable car in Gaia, overlooking the Port (just cross the bridge).",
//   "access": "We are always available to help guests. The house is fully available to guests. We are always ready to assist guests. when possible we pick the guests at the airport.  This service transfer have a cost per person. We will also have service \"meal at home\" with a diverse menu and the taste of each. Enjoy the moment!",
//   "interaction": "Cot - 10 € / night Dog - € 7,5 / night",
//   "house_rules": "Make the house your home...",
//   "property_type": "House",
//   "room_type": "Entire home/apt",
//   "bed_type": "Real Bed",
//   "minimum_nights": "2",
//   "maximum_nights": "30",
//   "cancellation_policy": "moderate",
//   "last_scraped": {
//     "$date": {
//       "$numberLong": "1550293200000"
//     }
//   },
//   "calendar_last_scraped": {
//     "$date": {
//       "$numberLong": "1550293200000"
//     }
//   },
//   "first_review": {
//     "$date": {
//       "$numberLong": "1451797200000"
//     }
//   },
//   "last_review": {
//     "$date": {
//       "$numberLong": "1547960400000"
//     }
//   },
//   "accommodates": {
//     "$numberInt": "8"
//   },
//   "bedrooms": {
//     "$numberInt": "3"
//   },
//   "beds": {
//     "$numberInt": "5"
//   },
//   "number_of_reviews": {
//     "$numberInt": "51"
//   },
//   "bathrooms": {
//     "$numberDecimal": "1.0"
//   },
//   "amenities": [
//     "TV",
//     "Cable TV",
//     "Wifi",
//     "Kitchen",
//     "Paid parking off premises",
//     "Smoking allowed",
//     "Pets allowed",
//     "Buzzer/wireless intercom",
//     "Heating",
//     "Family/kid friendly",
//     "Washer",
//     "First aid kit",
//     "Fire extinguisher",
//     "Essentials",
//     "Hangers",
//     "Hair dryer",
//     "Iron",
//     "Pack ’n Play/travel crib",
//     "Room-darkening shades",
//     "Hot water",
//     "Bed linens",
//     "Extra pillows and blankets",
//     "Microwave",
//     "Coffee maker",
//     "Refrigerator",
//     "Dishwasher",
//     "Dishes and silverware",
//     "Cooking basics",
//     "Oven",
//     "Stove",
//     "Cleaning before checkout",
//     "Waterfront"
//   ],
//   "price": {
//     "$numberDecimal": "80.00"
//   },
//   "security_deposit": {
//     "$numberDecimal": "200.00"
//   },
//   "cleaning_fee": {
//     "$numberDecimal": "35.00"
//   },
//   "extra_people": {
//     "$numberDecimal": "15.00"
//   },
//   "guests_included": {
//     "$numberDecimal": "6"
//   },
//   "images": {
//     "thumbnail_url": "",
//     "medium_url": "",
//     "picture_url": "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",
//     "xl_picture_url": ""
//   },
//   "host": {
//     "host_id": "51399391",
//     "host_url": "https://www.airbnb.com/users/show/51399391",
//     "host_name": "Ana&Gonçalo",
//     "host_location": "Porto, Porto District, Portugal",
//     "host_about": "Gostamos de passear, de viajar, de conhecer pessoas e locais novos, gostamos de desporto e animais! Vivemos na cidade mais linda do mundo!!!",
//     "host_response_time": "within an hour",
//     "host_thumbnail_url": "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
//     "host_picture_url": "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_x_medium",
//     "host_neighbourhood": "",
//     "host_response_rate": {
//       "$numberInt": "100"
//     },
//     "host_is_superhost": false,
//     "host_has_profile_pic": true,
//     "host_identity_verified": true,
//     "host_listings_count": {
//       "$numberInt": "3"
//     },
//     "host_total_listings_count": {
//       "$numberInt": "3"
//     },
//     "host_verifications": [
//       "email",
//       "phone",
//       "reviews",
//       "jumio",
//       "offline_government_id",
//       "government_id"
//     ]
//   },
//   "address": {
//     "street": "Porto, Porto, Portugal",
//     "suburb": "",
//     "government_area": "Cedofeita, Ildefonso, Sé, Miragaia, Nicolau, Vitória",
//     "market": "Porto",
//     "country": "Portugal",
//     "country_code": "PT",
//     "location": {
//       "type": "Point",
//       "coordinates": [
//         {
//           "$numberDouble": "-8.61308"
//         },
//         {
//           "$numberDouble": "41.1413"
//         }
//       ],
//       "is_location_exact": false
//     }
//   },
//   "availability": {
//     "availability_30": {
//       "$numberInt": "28"
//     },
//     "availability_60": {
//       "$numberInt": "47"
//     },
//     "availability_90": {
//       "$numberInt": "74"
//     },
//     "availability_365": {
//       "$numberInt": "239"
//     }
//   },
//   "review_scores": {
//     "review_scores_accuracy": {
//       "$numberInt": "9"
//     },
//     "review_scores_cleanliness": {
//       "$numberInt": "9"
//     },
//     "review_scores_checkin": {
//       "$numberInt": "10"
//     },
//     "review_scores_communication": {
//       "$numberInt": "10"
//     },
//     "review_scores_location": {
//       "$numberInt": "10"
//     },
//     "review_scores_value": {
//       "$numberInt": "9"
//     },
//     "review_scores_rating": {
//       "$numberInt": "89"
//     }
//   },
//   "reviews": [
//     {
//       "_id": "58663741",
//       "date": {
//         "$date": {
//           "$numberLong": "1451797200000"
//         }
//       },
//       "listing_id": "10006546",
//       "reviewer_id": "51483096",
//       "reviewer_name": "Cátia",
//       "comments": "A casa da Ana e do Gonçalo foram o local escolhido para a passagem de ano com um grupo de amigos. Fomos super bem recebidos com uma grande simpatia e predisposição a ajudar com qualquer coisa que fosse necessário.\r\nA casa era ainda melhor do que parecia nas fotos, totalmente equipada, com mantas, aquecedor e tudo o que pudessemos precisar.\r\nA localização não podia ser melhor! Não há melhor do que acordar de manhã e ao virar da esquina estar a ribeira do Porto."
//     }
//   ]
// }
