import { RESTDataSource } from "@apollo/datasource-rest";
import { Listing } from "../types";

export class ListingApi extends RESTDataSource {
   
     baseURL = 'https://rt-airlock-services-listing.herokuapp.com/';
   
 
   async getFeaturedListings() {
     return this.get<Listing[]>('featured-listings'); 
   }
 }