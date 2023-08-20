
class UberPricing{
constructor(destination, km){
    this.destination = destination;
    this.km = km;
}
totalPrice(){
    var price = this.km*7;
    console.log(`Total price of your ride to ${this.destination} of ${this.km} km is ${price} rupees only`);
}
};

const UberPricingObj = new UberPricing('aavadi', 10);
UberPricingObj.totalPrice();

