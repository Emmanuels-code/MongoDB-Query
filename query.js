1. // query for american cuisine in Queens borough under sample restuarant
{borough: "Queens", cuisine:"American"}

2. //  using the $and query to find storelocation and purchaseMethod  under sample-supplies
example 1. { $and: [ { storeLocation: "Manhattan" }, { purchaseMethod: "Online" } ] }
example 2. //  combine $and and $0r for listingand reviews under sample -airbnb
{
    $and: [
      {
        $or: [
          { "property_type": "House" },
          { "property_type": "Apartment" }
        ]
      },
      {
        $and: [
          { "bedrooms": { $gt: 2 } },
          { "cancellation_policy": "moderate" }
        ]
      }
    ]
  }


3. // using the $0r query to find the src-airport, and destination airport under  routes in sample training
{ $or: [ { src_airport: "CEK" }, { dst_airport: "KZN" } ] }


4.// using the $not query of company employees not up to 47, and also not born in 1969 under companies in sample training
example 1.  { "number_of_employees": { $not: { $eq: 47 } } }
example 2.  { "birth year": { $not: { $eq: 1969 } } } // combining for $not and $eq, birth year not 1969 in sample training/trips.


5. // using $in query for shipwrecks in sample-geospatial $in specifies an array of acceptable values for feature_type.
// ["Wrecks - Visible", "Buoys"]  as  arrays containg matching values
 example 1.  {"feature_type": { $in: ["Wrecks - Visible", "Buoys"] }} 
  example 2.  { property_type: { $in: ["House", "Apartment"] } } //in query for sample airbnb listingsAnd Reviews
 
  6. // using the $nin query for movies under sample_mflix  to exclude "western" and "Drama" from Genre
 example 1.  { "genres": { $nin: ["Western", "Drama"] }}
 example 2.  { email: { $nin: ["mercedes_tyler@yahoo.com", "mercedes_tyler@hotmail.com"] } } // for $nin filter returns documents where the email is not equal to mercedes_tyler@yahoo.com or mercedes_tyler@hotmail.com.

 7.//using $gt query where the grade.score is greater than the value 90 in Restaurants under sample restaurants
 example 1. {"grades.score": { $gt: 90 }}
 example 2. { tripduration: { $gt: 380 } } // for trip duration greater than 380 in trips under sample training

 8. // using the $lt query  for trip duration less than the value 70 in trips under sample- trainings
 example 1. { tripduration: { $lt: 70} }
 example 2. { "birth year": { $lt: 1970 } }// for birthyear less than 1970 in trips under sample- training

 9. // combining $or with $lt for tripduration and birthyear
 { $or: [{ tripduration: { $lt: 380 } }, { "birth year": { $lt: 1970 } }] }

 10. // combining $eq and $ne for listing and reviews under sample_airbnb
 
 {
    $and: [
      { "property_type": { $eq: "House" } },
      { "cancellation_policy": { $ne: "strict" } }
    ]
  }

  
 

