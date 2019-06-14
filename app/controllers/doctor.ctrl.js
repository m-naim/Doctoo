const doctor = require('./../models/doctor');

module.exports={
    search: (req, res, next) =>{
        doctor.find()
        .exec((err, data)=> {
            if (err)
                res.send(err)
            else if (!task)
                res.send(404)
            else
                res.send(data)
             next;
        })
        .catch(next);
        },
    getDocs: (req, res,next) =>{
        doctor.find()
        .exec((err, data)=> {
            if (err)
                res.send(err)
            else if (!doctor)
                res.send(404)
            else
                res.send(data)
             next;
        })
    },
    getDoc: (req, res, next) => {
        doctor.findById(req.params.id)
        .exec((err, data)=> {
            if (err)
                res.send(err)
            else if (!doctor)
                res.send(404)
            else
                res.send(data)
             next;
        })
    },
    // getDocs:
    addDoc:(req, res, next) => {
        const newDoc = new doctor( {
            lastName: req.body.lastName,
            firstName: req.body.firstName,
            address: req.body.address,
            ville: req.body.ville,
            codePostal: req.body.codePostal,
            number: req.body.number,
            specialty: req.body.specialty
        });
        newDoc.save()
        .then(o => res.send(o))
        .catch(next);
    },
    getBySpec: (req, res, next) => {
        doctor.find({specialty:req.params.specialty })
        .exec((err, data)=> {
            if (err)
                res.send(err)
            else if (!doctor)
                res.send(404)
            else
                res.send(data)
             next;
        })
    },
    getByVille: (req, res, next) => {
        doctor.find({ville:req.params.ville })
        .exec((err, data)=> {
            if (err)
                res.send(err)
            else if (!doctor)
                res.send(404)
            else
                res.send(data)
             next;
        })
    },
    
}