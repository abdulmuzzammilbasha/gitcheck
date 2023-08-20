class person{


constructor(name, address, qualification, job, height, weight, income){
    console.log(`Hi ${name} printing your details`);
   this.name = name;
   this.address =  address;
   this.qualification = qualification;
   this.job =  job;
   this.height =  height ;
   this.weight = weight;
   this.income =  income;
}
printPerson(){
    console.log(this.name)
    console.log(this.address)
    console.log(this.qualification)
    console.log(this.job)
    console.log(this.height)
    console.log(this.weight)
    console.log(this.income)

}
};

const personObj = new person("basha", "chennai", "bsc", "selfemployed", 164, 75, 30);
personObj.printPerson();

