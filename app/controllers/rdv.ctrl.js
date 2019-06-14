const rdv = require('./../models/rdv');

module.exports={
    
    getAllRdv: (req, res,next) =>{
        rdv.find()
        .exec((err, rdvs)=> {
            if (err)
                res.send(err)
            else if (!rdvs)
                res.send(404)
            else
                res.send(rdvs)          
        })
    },
    setRdv: (req, res, next) => {
        const newRdv = new rdv( {
                        user: req.body.user,
                        doctor: req.body.doctor,
                        date: req.body.date,
                        hour: req.body.hour
                    });
                    newRdv.save()
                    .then(o => res.send(o))
                    .catch(next);
                },
    getRdvHours: (req,res,next)=>{
        console.log(req.query)
        rdv.find({doctor: req.query.doc})
        .exec((err, rdvs)=> {
            if (err)
                {res.send(err)
                console.log(rdvs)}
            else if (!rdvs)
                {res.send(404)
                console.log(404)}
            else
                rdvs=rdvs.map(r=> { return{hour:r.hour, day:r.date} })
                console.log(rdvs)
                res.send(rdvs)          
        })
    },
}
