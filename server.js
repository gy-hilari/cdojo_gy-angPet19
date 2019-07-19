const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/public'));

var bodyParser = require('body-parser');
app.use(bodyParser.json());


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/petShelterDB', { useNewUrlParser: true });

//

var PetSchema = new mongoose.Schema({
    name: { type: String, required: true, maxlength: 45, minlength: 3 },
    type: { type: String, required: true, maxlength: 45, minlength: 3 },
    description: { type: String, required: true, maxlength: 280, minlength: 3 },
    skills: [{ type: String, required: false, maxlength: 45, minlength: 3 }],
    likes: { type: Number, default: 0 },
    // quoteRatings: [{type: Number, required: true, default: 1}],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
}, { timestamps: true });

mongoose.model('Pet', PetSchema);
var Pet = mongoose.model("Pet");

//
var serverPort = 6794;
app.listen(serverPort);

//

app.get('/api/pets', function (request, response) {
    Pet.find({}).sort({ type: 'desc' }).exec(function (err, pet) {
        if (err) {
            console.log("%*%*%*%*%*| DATABASE ERROR! |*%*%*%*%*%");
            console.log(err);
            response.json({ message: err });
        }
        else {
            console.log(pet);
            response.json({ data: pet });
        }

    });
});

app.get('/api/pet/:id', function (request, response) {
    let targetId = request.params.id;
    Pet.findOne({ _id: targetId }, function (err, pet) {
        if (err) {
            console.log("%*%*%*%*%*| DATABASE ERROR! |*%*%*%*%*%");
            console.log(err);
            response.json({ message: err });
        }
        else {
            console.log(pet);
            response.json(pet);
        }
    });
});

app.post('/api/pets', function (request, response) {
    let newName = request.body['name'];
    console.log(newName);
    let newType = request.body['type'];
    console.log(newType);
    let newDesc = request.body['description'];
    console.log(newDesc);
    let newSkills = request.body['skills'];
    console.log(newSkills);

    Pet.findOne({ name: newName }, function (err, pet) {
        if (pet) {

            console.log(pet);
            response.json({ existed: true });
            
        }
        else {

            let newPet = new Pet({
                name: newName,
                type: newType,
                description: newDesc
            });

            for (var i = 0; i < newSkills.length; i++) {
                if (newSkills[i].length > 0) {
                    newPet['skills'].push(newSkills[i]);
                }
            }

            newPet.markModified('skills');

            newPet.save(function (err) {
                if (err) {
                    console.log("%*%*%*%*%*| NEW ENTRY ERROR! |*%*%*%*%*%");
                    response.json({ success: false, data: err, existed: false });
                }
                else {
                    response.json({ success: true, data: newPet, existed: false });
                }

            });

        }
    });



});

app.put('/api/pets', function (request, response) {
    let targetId = request.body['_id'];
    Pet.findOne({ _id: targetId }, function (err, pet) {
        if (err) {
            console.log("%*%*%*%*%*| DATABASE ERROR! |*%*%*%*%*%");
            console.log(err);
            response.json({ message: err });
        }
        else {
            let newSkills = request.body['skills'];
            pet['name'] = request.body['name'];
            pet['type'] = request.body['type'];
            pet['description'] = request.body['description'];

            pet['skills'] = [];

            for (var i = 0; i < newSkills.length; i++) {
                if (newSkills[i].length > 0) {
                    pet['skills'].push(newSkills[i]);
                }
            }


            pet.markModified('skills');
            pet.save(function (err) {
                if (err) {
                    console.log("%*%*%*%*%*| NEW ENTRY ERROR! |*%*%*%*%*%");
                    response.json({ success: false, data: err });
                }
                else {
                    response.json({ success: true, data: pet });
                }

            });
        }
    });
});

app.put('/api/likes', function (request, response) {
    let targetId = request.body['_id'];
    Pet.findOne({ _id: targetId }, function (err, pet) {
        if (err) {
            console.log("%*%*%*%*%*| DATABASE ERROR! |*%*%*%*%*%");
            console.log(err);
            response.json({ message: err });
        }
        else {
            pet['likes'] += 1;
            pet.save(function (err) {
                if (err) {
                    console.log("%*%*%*%*%*| NEW ENTRY ERROR! |*%*%*%*%*%");
                    response.json({ success: false, data: err });
                }
                else {
                    response.json({ success: true, data: pet });
                }

            });
        }
    });
});

app.delete('/api/pets/:id', function (request, response) {
    let targetId = request.params.id;
    Pet.deleteOne({ _id: targetId }, function (err) {
        if (err) {
            console.log("%*%*%*%*%*| DATABASE ERROR! |*%*%*%*%*%");
            console.log(err);
            response.json({ message: err });
        }
        else {
            response.json({ message: `Adopted pet #: ${targetId}` })
        }
    });
});

//

var path = require("path");

app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./dist/public/index.html"));
});

//
