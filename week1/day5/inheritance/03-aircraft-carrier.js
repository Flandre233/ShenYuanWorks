class Aircraft {
  constructor(type) {
    this.type = type
    this.ammo = 0
    switch(type) {
      case 'F16':
        this.maxAmmo = 8
        this.baseDamage = 30
        break
      case 'F35':
        this.maxAmmo = 12
        this.baseDamage = 50
        break
      default:
        this.maxAmmo = 0
        this.baseDamage = 0
    }
  }
  fight() {
    let damage = this.ammo * this.baseDamage
    this.ammo = 0
    return damage
  }
  refill(ammo) {
    let remaining = 0
    this.ammo += ammo
    if(this.ammo > this.maxAmmo) {
      remaining = this.ammo - this.maxAmmo
      this.ammo = this.maxAmmo
    }
    return remaining
  }
  getType() {
    return this.type
  }
  getAllDamage () {
    return this.baseDamage * this.ammo
  }
  getStatus() {
    return `Type ${this.getType()}, Ammo: ${this.ammo}, Base Damage: ${this.baseDamage}, All Damage: ${this.getAllDamage()}`
  }
  isPriority() {
    return this.type === 'F35'
  }
}

class Carrier {
  constructor(health, ammo) {
    this.health = health
    this.ammo = ammo
    this.aircrafts = []
  }
  add(aircraft) {
    if(aircraft.isPriority()) {
      this.aircrafts.unshift(aircraft)
    } else {
      this.aircrafts.push(aircraft)
    }
  }
  fill() {
    this.aircrafts.forEach(aircraft => {
      if(this.ammo > 0) {
        this.ammo = aircraft.refill(this.ammo)
      }
    })
  }
  fight(carrier) {
    this.aircrafts.forEach(aircraft => {
      if(carrier.health > 0) {
        carrier.health -= aircraft.fight()
      }
    })
  }
  getStatus() {
    return(`HP: ${this.health}, Aircraft count: ${this.aircrafts.length}, Ammo Storage: ${this.ammo}, Total damage: ${this.aircrafts.reduce((p, e) => p + e.getAllDamage(), 0)}\nAircrafts:\n${this.aircrafts.map(x => x.getStatus()).join('\n')}`)
  }
}

const carrier = new Carrier(3000, 3000)
carrier.add(new Aircraft('F16'))
carrier.add(new Aircraft('F35'))
carrier.add(new Aircraft('F16'))
carrier.add(new Aircraft('F35'))
carrier.add(new Aircraft('F35'))
carrier.fill()
console.log(carrier.getStatus())
