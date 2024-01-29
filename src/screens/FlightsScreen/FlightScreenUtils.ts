import { FlightCardDetailsType } from "../../components/molecules/FlightCard/FlightCard.type";

export const  sortObjectsByPrice = (flights: FlightCardDetailsType[]) => {
    const sortedObjects = flights?.slice()?.sort((a: FlightCardDetailsType, b: FlightCardDetailsType) => a?.fare - b?.fare);
    return sortedObjects;
  }

export const filterFlightsByAirline = (flights: FlightCardDetailsType[], airlineCode: string) => {
    return flights.filter((flight) => {
      const hasAirline = flight.displayData.airlines.some(
        (airline) => airline.airlineCode === airlineCode
      );
      return hasAirline;
    });
  }  
  