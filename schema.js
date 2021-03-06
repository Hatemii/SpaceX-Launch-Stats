const axios = require("axios");


const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLFloat,
  GraphQLSchema,
} = require("graphql");


// Launch Type
const LaunchType = new GraphQLObjectType({
  name: "Launch",
  fields: () => ({
    flight_number: { type: GraphQLInt },
    mission_name: { type: GraphQLString },
    launch_year: { type: GraphQLString },
    launch_date_local: { type: GraphQLString },
    launch_success: { type: GraphQLBoolean },
    rocket: { type: RocketType }
  })
});



// Rocket Type
const RocketType = new GraphQLObjectType({
  name: "Rocket",
  fields: () => ({
    rocket_id: { type: GraphQLString },
    rocket_name: { type: GraphQLString },
    rocket_type: { type: GraphQLString },
    country: { type: GraphQLString },
    company: { type: GraphQLString },
    height: { type: RocketHeight }
  })
});



// Specific Rocket
const SpecificRocketType = new GraphQLObjectType({
  name: "SpecificRocket",
  fields: () => ({
    rocket_id: { type: GraphQLString },
    rocket_name: { type: GraphQLString },
    rocket_type: { type: GraphQLString },
    country: { type: GraphQLString },
    company: { type: GraphQLString },
    height: { type: RocketHeight }
  })
});

// Rocket Height
const RocketHeight = new GraphQLObjectType({
  name: "RocketHeight",
  fields: () => ({
    meters: { type: GraphQLString },
    feet: { type: GraphQLString }
  })
})

// Rocket Diameter
const RocketDiameter = new GraphQLObjectType({
  name: "RocketDiameter",
  fields: () => ({
    meters: { type: GraphQLString },
    feet: { type: GraphQLString }
  })
});


// Ships
const ShipType = new GraphQLObjectType({
  name: "Ships",
  fields: () => ({
    ship_id: { type: GraphQLString },
    ship_name: { type: GraphQLString },
    home_port: { type: GraphQLString },
    ship_type: { type: GraphQLString },
    year_built: { type: GraphQLInt },
    active: { type: GraphQLBoolean }
  })
})



// Dragons
const DragonsType = new GraphQLObjectType({
  name: "Dragons",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    type: { type: GraphQLString },
    active: { type: GraphQLBoolean },
    first_flight: { type: GraphQLString },
    orbit_duration_yr: { type: GraphQLInt },
    heat_shield: { type: HeatShieldType },
    diameter: { type: DragonDiameter }
  })
})

// Dragon HeatShield
const HeatShieldType = new GraphQLObjectType({
  name: "HeatShieldType",
  fields: () => ({
    material: { type: GraphQLString },
    size_meters: { type: GraphQLFloat }
  })
})

// Dragon Diameter
const DragonDiameter = new GraphQLObjectType({
  name: "DragonDiameter",
  fields: () => ({
    meters: { type: GraphQLFloat },
    feet: { type: GraphQLInt }
  })
})



// ******************* ROOT QUERY *******************  //


const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {


    dragons: {
      type: new GraphQLList(DragonsType),
      resolve(parent, args) {
        return axios.get("https://api.spacexdata.com/v3/dragons")
          .then(res => res.data)
      }
    },


    launches: {
      type: new GraphQLList(LaunchType),
      resolve(parent, args) {
        return axios.get("https://api.spacexdata.com/v3/launches")
          .then(res => res.data);
      }
    },


    // this will get single launch by flight_number
    // for example in graphql -->> {specific_launch(flight_number:2){.....}}
    specific_launch: {
      type: LaunchType,
      args: {
        flight_number: { type: GraphQLInt }
      },
      resolve(parent, args) {
        return axios.get(`https://api.spacexdata.com/v3/launches/${args.flight_number}`)
          .then(res => res.data);
      }
    },

    // get a list of rockets
    rockets: {
      type: new GraphQLList(RocketType),
      resolve(parent, args) {
        return axios
          .get("https://api.spacexdata.com/v3/rockets")
          .then(res => res.data);
      }
    },

    // get specific rocket
    specific_rocket: {
      type: SpecificRocketType,
      args: {
        rocket_id: { type: GraphQLString }
      },
      resolve(parent, args) {
        return axios.get(`https://api.spacexdata.com/v3/rockets/${args.rocket_id}`)
          .then(res => res.data);
      }
    },


    // get ships
    ships: {
      type: new GraphQLList(ShipType),
      resolve(parent, args) {
        return axios.get('https://api.spacexdata.com/v3/ships')
          .then(res => res.data);
      }
    },


    // get specific ship
    specific_ship: {
      type: ShipType,
      args: {
        ship_id: { type: GraphQLString }
      },
      resolve(parent, args) {
        return axios.get(`https://api.spacexdata.com/v3/ships/${args.ship_id}`)
          .then(res => res.data);
      }
    },



  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
});
