const { faker } = require('@faker-js/faker');
const express = require("express");
const app = express();
const port = 8000;


app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const createUser = () => {
    const newFake = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        phoneNumber:faker.phone.number(),
        _id:faker.database.mongodbObjectId() ,
        email:faker.internet.exampleEmail() ,
        password: faker.internet.password()
    };
    return newFake;
};

const createCompany = () => {
    const newFake = {
        _id:faker.database.mongodbObjectId() ,
        name: faker.company.name(),
        street:faker.location.street(),
        city:faker.location.city(),
        state:faker.location.state(),
        zipCode:faker.location.zipCode(),
        country:faker.location.country(),
    };
    return newFake;
};
    

app.get("/api/users/new", (req, res) => {
    res.json( createUser() );
});

app.get("/api/companies/new", (req, res) => {
    res.json( createCompany() );
});

app.get("/api/user/company" , (req, res) => {
    res.json( [createCompany(),createUser()] );

});


// app.get("/api", (req, res) => {
//     res.json({ message: "Hello World" });
// });
/*
 * The output of the above console log will look like this
 * {
 *   name: 'Anime Figure',
 *   price: '$568.00
 *   department: 'Tools' 
 * }
 */
app.listen( port, () => console.log(`Listening on port: ${port}`) );
