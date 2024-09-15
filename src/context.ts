import { ListingApi } from "./dataSources/listing-api";

export type DataSourceContext = {
  dataSources: {
    listingApi: ListingApi;
  };
};