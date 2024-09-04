import { RESTDataSource } from "@apollo/datasource-rest";
import { Listing } from "../typpes";

export class ListingApi extends RESTDataSource{
 baseURL= "https://rt-airlock-services-listing.herokuapp.com/";

 getFeaturedListings(){
    return this.get<Listing[]>("featured-listing")
 }
}