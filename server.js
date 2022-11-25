const express = require('express');
const app = express();
const { faker } = require('@faker-js/faker');
const PORT = 8001;


app.use(express.json());
app.use(express.urlencoded());
const createUser = () => {
    return {
        password: faker.internet.password(),
        email:faker.internet.email() ,
        phoneNumber: faker.phone.number(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        _id: faker.datatype.uuid()
    }
}
const createCompany = () => {
    return {
        _id:faker.datatype.uuid(),
        name: faker.name.firstName(),
        address:{
            street:faker.address.street(),
            city: faker.address.city() ,
            state: faker.address.state(),
            zipCode: faker.address.zipCode() ,
            country: faker.address.country() 
        }
    }
};

app.listen(PORT, () => {
    console.log('Faker Api assigment')
})
app.get('/api/users/new', (req, res) => {
    console.log(req.params)
    const user=createUser();
    res.json(user);
})
app.get('/api/companies/new', (req, res) => {
    const company = createCompany();
    res.json(company);
})
app.get('/api/user/company', (req,res) => {
    const user =createUser();
    
    const company= createCompany();
    res.json([company,user]);
})


