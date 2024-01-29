export interface FlightCardProps {
  cardData: FlightCardDetailsType;
}

export interface FlightCardDetailsType {
  id: string;
  fare: number;
  displayData: {
    source: DepartureDetailsType;
    airlines: AirlineDetailsType[];
    stopInfo: string;
    destination: ArrivalDetailsType;
    totalDuration: string;
  };
}

export interface DepartureDetailsType {
  airport: AirportDetailsType;
  depTime: string;
}

export interface ArrivalDetailsType {
  airport: AirportDetailsType;
  arrTime: string;
}

export interface AirportDetailsType {
  cityCode: string;
  cityName: string;
  terminal: string;
  airportCode: string;
  airportName: string;
  countryCode: string;
  countryName: string;
}

export interface AirlineDetailsType {
  airlineCode: string;
  airlineName: string;
  flightNumber: string;
}
