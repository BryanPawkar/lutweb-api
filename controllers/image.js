const handleImage = (req,res, db, bcrypt) =>{
    const { id } = req.body;
    let found = false;
    database.users.forEach(user =>{
        if(user.id === id){
            found = true; 
            user.entries++
            return res.json(user.entries);
        }
        })
        if(!found){
            res.status(400).json('Usuario no encontrado');
        }
}
module.exports = {
    handleImage: handleImage
}