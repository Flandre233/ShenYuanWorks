interface Reservationy {
  getDowBooking(): string;
  getCodeBooking(): string;
}

class Reservation implements Reservationy {
  Dow: string
  Code: string
  constructor() {
    this.Dow = ''
    this.Code = ''
  }
  getDowBooking(){
    return this.Dow
  }
  getCodeBooking(){
    return this.Code
  }
}
