const USER = require('../models/user')





async function handleGetUser(req, res) {
  // console.log('req body', req.user)
  try {
    const user = await USER.find({ email: req.user.email });
    console.log('USER', user)
    res.status(200).send(user);
  } catch (error) {
    console.error(error);
    res.status(400).send('Could not find user');
  }
}



async function handlePostUser(req, res) {
  // console.log('req', req.body.user.name)

  try {
    const checkUser = await USER.findOne({ ...req.body, email: req.body.user.email })
    // console.log('user Found!', checkUser);
    if (!checkUser) {
      const newUser = await USER.create({
        ...req.body, userName: req.body.user.given_name,
        email: req.body.user.email,
        picture: req.body.user.picture
      })
      res.status(200).send('user created!')

      // console.log('user created!', newUser);
    } else {
      res.status(200).send('user already exists!!');
    }
  } catch (e) {
    res.status(500).send('server error');
  }
}

async function handlePostFav(req, res) {
  console.log('req-BODY', req.body)

  console.log('req-PARAMS', req.params)

  try {
    const userFav = await USER.findOneAndUpdate({ _id: req.params.id, email: req.body.email }, req.body)
    console.log('user Found!', userFav);

  } catch (e) {
    res.status(500).send('server error');
  }
}

module.exports = { handlePostUser, handlePostFav, handleGetUser };