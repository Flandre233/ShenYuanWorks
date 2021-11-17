interface Reservationy {
  getDowBooking(): string;
  getCodeBooking(): string;
}

class Reservation implements Reservationy {
  Dow: string
  Code: string
  constructor() {
    this.Dow = ['SUN','MON','TUE','WED','THU','FRI','SAT'][~~(7 * Math.random())]
    this.Code = new Array(8).fill('').map(() => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'[~~(36 * Math.random())]).join('')
  }
  getDowBooking(){
    return this.Dow
  }
  getCodeBooking(){
    return this.Code
  }
}

for(let i = 0; i < 10; i ++) {
  let r = new Reservation()
  console.log(`Booking# ${r.getCodeBooking()} for ${r.getDowBooking()}`)
}
