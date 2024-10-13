// /stores/pinia.ts
import { defineStore } from 'pinia'

// Definir el store
export const usePiniaStore = defineStore('pinia', {
  state: () => ({
    cities:    [] as Array<{ [key: string]: any }>,
    regions:   [] as Array<{ [key: string]: any }>,
    countries: [] as Array<{ [key: string]: any }>,
    coffees:   [] as Array<{ [key: string]: any }>,
    origins:   [] as Array<{ [key: string]: any }>,
    methods:   [] as Array<{ [key: string]: any }>,
    varieties: [] as Array<{ [key: string]: any }>,
    notes:     [] as Array<{ [key: string]: any }>,
    processes: [] as Array<{ [key: string]: any }>,
    roasts:    [] as Array<{ [key: string]: any }>,
    grinds:    [] as Array<{ [key: string]: any }>,
    coupons:   [] as Array<{ [key: string]: any }>,
    products:  [] as Array<{ [key: string]: any }>,
    fermentations: [] as Array<{ [key: string]: any }>,
  }),
  actions: {
    addCity(city: {[key: string]: any }){
        this.cities.push(city)
    },
    addRegion(region: {[key: string]: any }){
        this.regions.push(region)
    },
    addCountry(country: {[key: string]: any }){
        this.countries.push(country)
    },
    addCoffee(coffee: {[key: string]: any }){
        this.coffees.push(coffee)
    },
    addOrigin(origin: {[key: string]: any }){
        this.origins.push(origin)
    },
    addMethod(method: {[key: string]: any }){
        this.methods.push(method)
    },
    addVariety(variety: {[key: string]: any }){
        this.varieties.push(variety)
    },
    addNote(note: {[key: string]: any }){
        this.notes.push(note)
    },
    addProcess(process: {[key: string]: any }){
        this.processes.push(process)
    },
    addRoast(roast: {[key: string]: any }){
        this.roasts.push(roast)
    },
    addGrind(grind: {[key: string]: any }){
        this.grinds.push(grind)
    },
    addCoupon(coupon: {[key: string]: any }){
        this.coupons.push(coupon)
    },
    addProduct(product: {[key: string]: any }){
        this.products.push(product)
    },
    addFermentation(fermentation: {[key: string]: any }){
        this.fermentations.push(fermentation)
    }    
  },

  getters: {
  },
})