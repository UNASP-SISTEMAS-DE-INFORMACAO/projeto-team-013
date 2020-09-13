const { User } = require('../models')



class UserController {
  async store(req, res) {
    const { id_curso, ra, email, nome,password } = req.body
    const is_admin = 0
    console.log(req.body)
    if (!id_curso && !ra && !email && !nome) {
      console.log(Nome)
      return res.status(400).end()
    }

    try {
      await User.create({ id_curso, ra, email, nome ,is_admin,password})
      return res.status(201).end()
    } catch (error) {
      console.log(error)
      return res.status(400).end()
    }
  }

  async login(req,res){
    const {email,senha} = req.body
    if(email&&senha){
      const user = await User.findOne({
        where:{
          email
        }
      })
      if(user){
        if(await user.checkPassword(senha)){
          const token = User.generateToken(user)
          console.log(user)
          return res.status(200).json({token,user})
        }
        else{
          return res.status(401).send("not auth")
        }
      }
      
    }

  }
}

module.exports = new UserController()
