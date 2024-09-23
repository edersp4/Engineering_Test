var userService = require('./userService');

var getDataConntrollerfn = async (req, res) =>
{
    var empolyee = await userService.getDataFromDBService();
    res.send({ "status": true, "data": empolyee });
}

var createUserControllerFn = async (req, res) => 
{
    var status = await userService.createUserDBService(req.body);
    if (status) {
        res.send({ "status": true, "message": "Usuário criado com sucesso" });
    } else {
        res.send({ "status": false, "message": "Ocorreu um erro ao criar o usuário" });
    }
}

var updateUserController = async (req, res) => 
{
    console.log(req.params.id);
    console.log(req.body);
     
    var result = await userService.updateUserDBService(req.params.id,req.body);

     if (result) {
        res.send({ "status": true, "message": "Usuário atualizado com sucesso"} );
     } else {
         res.send({ "status": false, "message": "Ocorreu um erro ao atualizar o usuário" });
     }
}

var deleteUserController = async (req, res) => 
{
     console.log(req.params.id);
     var result = await userService.removeUserDBService(req.params.id);
     if (result) {
        res.send({ "status": true, "message": "Usuário deletado com sucesso"} );
     } else {
         res.send({ "status": false, "message": "Ocorreu um erro ao deletar o usuário" });
     }
}
module.exports = { getDataConntrollerfn, createUserControllerFn,updateUserController,deleteUserController };