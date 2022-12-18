const CALENDAR = require('../models/calendar')



async function handleGetUserAppt(req, res) {
  // console.log('APPT req body', req.body)
  try {
    const appts = await CALENDAR.find({ email: req.user.email });
    console.log('CALENDAR', appts)
    res.status(200).send(appts);
  } catch (error) {
    console.error(error);
    res.status(400).send('Could not find user\'s appts');
  }
}




async function handlePostCalendar(req, res) {
  try {
    const newUser = await CALENDAR.create({
      ...req.body, userName: req.body.userName,
      email: req.body.email,
      title: req.body.title,
      date: req.body.date
    })
    res.status(200).send('new appt made!')

    console.log('new APPT', newUser);
  } catch (e) {
    res.status(500).send('server error');
  }
}

module.exports = { handlePostCalendar, handleGetUserAppt };