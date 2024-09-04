import {Resolvers} from './typpes'

export const resolvers: Resolvers = {
    Query:{
        featuredListings: (_ , __ , {dataSources})=>{
          return dataSources.listingApi.getFeaturedListings();
        },
    }
};