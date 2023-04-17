const mongoose = require('mongoose');

const connURL = 'mongodb://127.0.0.1:27017/';

const MyCollection = mongoose.model(
    'myCollection',
    new mongoose.Schema(
        { a: Number, b: Number },
        { strict: false, collection: 'myCollection' }
    )
);

async function main() {
    try {
        await mongoose.connect(connURL);

        await MyCollection.deleteMany({});
        await MyCollection.insertMany([
            { a: 1, b: 1 },
            { a: 1, b: 1 },
        ]);

    } catch (error) {
        console.log(error);
    }
}


main();
