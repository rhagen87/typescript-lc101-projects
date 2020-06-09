import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';
import { Payload } from './Payload';

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[];
    astronauts: Astronaut[];

    constructor (name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass(items: Payload[]): number {
        let sum: number = 0;
        for (let i = 0; i < items.length; i++) {
            sum += items[i].massKg
        }
        return sum;
    }

    currentMassKg(): number {
        let mass: number;
        mass = this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
        return mass;
    }

    canAdd(item: Payload): boolean {
        let result = this.currentMassKg() + item.massKg <= this.totalCapacityKg;
        return result;
    }

    addCargo(cargo: Cargo): boolean {
        let result = this.canAdd(cargo);
        if (result === true) {
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false;
        }
    }

    addAstronaut(astronaut: Astronaut): boolean {
        let result = this.canAdd(astronaut);
        if (result === true) {
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }
    }
}