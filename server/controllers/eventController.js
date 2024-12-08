const eventModel = require('../models/eventModel');

//get list of club events
exports.getAllEvents = async (req, res) => {
    const { clubid } = req.params;
    try{
        let results;
        if (clubid === -1){
            results =  await eventModel.getEventsByUserId(req.session.user.uid);
        }
        else{
            results = await eventModel.getEventsByClubId(clubid);
        } 
        return res.status(200).json(results);
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

exports.updateEvent = async (req, res) => {
    try {
        const { id, title, description, link } = req.body; // Extract event data from the request body
        const eventInfo = { title, description, link };
        await eventModel.updateEvent(id, eventInfo, req.session.user.uid);
        return res.status(200).json({ message: "Event updated successfully" });
    } catch (err) {
        console.error(err);
        if (err.message.includes("Unauthorized")) {
            return res.status(403).json({ message: "You do not have permission to update this event" });
        }
        return res.status(500).json({ message: "Error updating event" });
    }
};
