const mongoose = require('mongoose');
const mongodb = "mongodb://127.0.0.1:27017/dogsDB";

mongoose.set('strictQuery', true);

mongoose.connect(mongodb, function(err) {
    if (err) {
        console.log("UNABLE TO CONNECT TO THE SERVER");
        console.log(err);
    } else {
        console.log("MONGO-DB IS SUCCESSFULLY CONNECTED");
    }
});

const dogSchema = new mongoose.Schema ({
    breed: {
        type: String,
        required: [true, "Breed is missing, it is required."]
    },
    name: String,
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Dog = new mongoose.model("Dog", dogSchema);

const labrador = new Dog ({
    breed: "Labrador",
    name: "Otter",
    rating: 10,
    review: "Loving and Playful"
});

// labrador.save();

const dogHumanSchema = new mongoose.Schema({
    name: String,
    age: Number,
    dog: dogSchema
});

const DogHuman = new mongoose.model("DogHuman", dogHumanSchema);

const roxie = new Dog({
    breed: "Labrador",
    name: "Roxie",
    rating: 10,
    review: "Loving, Foodie, and Chill"
});

// roxie.save();

// const dogHuman = new DogHuman ({
//     name: "Logan",
//     age: 29,
//     dog: roxie
// });

const bhoami = new DogHuman ({
    name: "Bhoami",
    age: 27,
    dog: labrador
})

bhoami.save();

// const siberianHusky = new Dog({
//     breed: "Siberian Husky",
//     name: "mili",
//     rating: 10,
//     review: "Adorable"
// });

// const akita = new Dog({
//     breed: 'Akita',
//     name: "Hatchi",
//     rating: 9,
//     review: "Extremely loving but, a tad bit difficult to deal with."
// });

// const germanShepherd = new Dog({
//     breed: 'German Shepherd',
//     name: "Dolly",
//     rating: 8,
//     review: "Loving, Playful, and Protective but, sheds a lot of fur."
// });

// Dog.insertMany([siberianHusky, akita, germanShepherd], function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully saved all the dogs to dogsDB");
//     }
// });

Dog.find(function(err, dogs){
    if (err) {
        console.log(err);
    } else {
        mongoose.connection.close(function() {
            process.exit(0);
        });
        dogs.forEach(function(dog) {
            console.log(dog.name);
        });
    }
});

Dog.updateOne({breed: "Labrador"}, {name: "Otter"}, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Successful!");
    }
});

Dog.deleteOne({breed: "Siberian Husky"}, function(err) {
    if (err) {
        console.log(err)
    } else {
        console.log("Successfully Deleted");
    }
});
