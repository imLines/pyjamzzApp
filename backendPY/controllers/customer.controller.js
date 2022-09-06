exports.registration = (req, res) => {
    if(req.method == 'GET'){
        console.log("page d'inscription demandée.")
        res.status(200);
    }else if(req.method == 'POST'){
        if(!req.body.sex || !req.body.lastName || !req.body.firstName || !req.body.dateOfBirth || !req.body.email || !req.body.password){
            res.status(400)
            console.log('Formulaire dinscription envoyé mais contenus manquant')
        }else{
            console.log("Formulaire dinscription envoyé et valide");
            res.status(201)
        }
    }
};

