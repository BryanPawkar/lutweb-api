const handleProfile = (req, res) =>{
    const { id } = req.params;
    db.select('*').from('users').where({
        id: id
    }).then(user =>{
        if(user.length){
            res.json(user[0]);
        }else{
            res.status(400).json('Usuario no encontrado');
        }
    })
    .catch(err => res.status(400).json('Error al encontrar el usuario'));

}
module.exports = {
    handleProfile: handleProfile
}