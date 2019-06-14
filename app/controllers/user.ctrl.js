const user = require('./../models/user')

module.exports={
    
    getAll: (req, res,next) =>{
        user.find({user: [req.headers.token]})
        .exec((err, list)=> {
            if (err)
                res.send(err)
            else if (!list)
                res.send(404)
            else
                res.send(list)
            next           
        })
    },
    delList: (req, res, next) => {
        List.findById(req.params.id)
            .then(item => item.remove().then(() => res.send({ success: true })))
            .catch(err =>{
                res.status(404).send({ erreur: err })
                next
            } );
    }
}
