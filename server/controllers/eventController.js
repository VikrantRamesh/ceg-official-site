const eventModel = require('../models/eventModel');

//get list of club events
exports.getAllEvents = async (req, res) => {
    const clubid = Number(req.params.clubid);
    try {
        let results;
        if (clubid === -1) {
            results = await eventModel.getEventsByUserId(req.session.user.uid);
        }
        else {
            results = await eventModel.getEventsByClubId(clubid);
        }
        return res.status(200).json(results);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Error fetching events' });
    }
}

// Upsert (Add or Update) event
exports.upsertEvent = async (req, res) => {
    try {
        const { id, title, description, link } = req.body; // Extract event data from the request body
        const eventInfo = { title, description, link };

        if (id) {
            // Update the existing event
            await eventModel.updateEvent(id, eventInfo, req.session.user.uid);
            return res.status(200).json({ message: "Event updated successfully" });
        } else {
            // Add a new event
            const newId = await eventModel.addEvent(eventInfo, req.session.user.uid);
            return res.status(200).json({ id: newId, message: "Event added successfully" });
        }
    } catch (err) {
        console.error(err);
        if (err.message.includes("Unauthorized")) {
            return res.status(403).json({ message: "You do not have permission to perform this action" });
        }
        return res.status(500).json({ message: "Error processing event" });
    }
};

// Controller for deleting an event
exports.deleteEvent = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await eventModel.deleteEventById(id, req.session.user.uid);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Event not found' });
        }
        return res.status(200).json({ message: 'Event deleted successfully' });
    } catch (err) {
        console.error('Error deleting event:', err);
        if (err.message.includes("Unauthorized")) {
            return res.status(403).json({ message: "You do not have permission to perform this action" });
        }
        return res.status(500).json({ message: 'Error deleting event' });
    }
};