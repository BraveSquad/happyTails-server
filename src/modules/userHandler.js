const USER = require('../models/user')

async function handlePostUser(req, res) {
  // console.log('req', req.body.user.name)

  try {
    const checkUser = await USER.findOne({ ...req.body, email: req.body.user.email })
    console.log('user Found!', checkUser);
    if (!checkUser) {
      res.status(200).send('user created!')
      const newUser = await USER.create({ ...req.body, userName: req.body.user.given_name, email: req.body.user.email, picture: req.body.user.picture })

      console.log('user created!', newUser);
    } else {
      res.status(200).send('user already exists!!');
    }
  } catch (e) {
    res.status(500).send('server error');
  }
}

async function handlePostFav(req, res) {
  console.log('req', req.body)

  // try {
  //   const userFav = await USER.findOne({ ...req.body, favorite: req.body.user.favor})
  //   console.log('user Found!', userFav);

  // } catch (e) {
  //   res.status(500).send('server error');
  // }
}

module.exports = { handlePostUser, handlePostFav };