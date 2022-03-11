//Require the mongoose package (luego de instalarlo Hyper >npm i mongoose)
const mongoose = require('mongoose');

main().catch(err => console.log(err));

//Establece la conexion con la base de datos
async function main(){
    await mongoose.connect('mongodb://localhost:27017/fruitsDB');
}

// En mongo todo deriva de un esquema (constructor)
const frutaSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

// Un modelo es una clase con la que se contruyen documentos
const Fruta = mongoose.model('Fruta', frutaSchema);

const fruta = new Fruta({
    name: "Manzana",
    rating: 7,
    review: "Pretty solid as a fruit"
})

//Almacena un objeto
// fruta.save();

const pera = new Fruta({
    name: "Pera",
    rating: 6,
    review: "Pretty suave as a fruit"
})

const fresa = new Fruta({
    name: "Fresa",
    rating: 10,
    review: "a small fruit"
})

//Almacena varios documentos
// Fruta.insertMany([pera, fresa], (err) => {
//     if (err){
//         console.log(err);
//     } else{
//         console.log('Succesfully saved');
//     }
// });

const personaSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const Persona = mongoose.model('Persona', personaSchema);

const persona = new Persona({
    name: "Javier",
    age: 24
});

// persona.save();

Fruta.find((err, fruits) => {
    if(err){
        console.log(err);
    } else{
        console.log(fruits);
    }
});
