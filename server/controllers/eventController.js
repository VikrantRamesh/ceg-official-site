const eventModel = require('../models/eventModel');

//get list of club events
exports.getAllEvents = async (req, res) => {
    try{
        const results =  await eventModel.getEventsByUserId(req.session.user.uid);
        return res.status(200).json(results[0]);
    } catch (err){
        console.error(err);
        return res.status(500).json({ message: 'Error fetching events' });
    }
}

exports.insertNewEvent = async (req, res) => {
    try{
        const { title, description, link } = req.body;
        const eventinfo = {title, description, link};
        await eventModel.addEvent(eventinfo, req.session.user.uid);
        return res.status(200).json({ message: "Added Successfully" });
    } catch (err){
        console.error(err);
        return res.status(500).json({ message: 'Error adding new event'});
    }
};