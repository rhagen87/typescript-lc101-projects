"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        var sum = 0;
        for (var i = 0; i < items.length; i++) {
            sum += items[i].massKg;
        }
        return sum;
    };
    Rocket.prototype.currentMassKg = function () {
        var mass;
        mass = this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
        return mass;
    };
    Rocket.prototype.canAdd = function (item) {
        var result = this.currentMassKg() + item.massKg <= this.totalCapacityKg;
        return result;
    };
    Rocket.prototype.addCargo = function (cargo) {
        var result = this.canAdd(cargo);
        if (result === true) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        var result = this.canAdd(astronaut);
        if (result === true) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
