const clubModel = require('../models/clubModel');


//controller to update club info
exports.updateClub = async (req, res) => {
    const { description, socials, website, members } = req.body;

    // Process uploaded files
    const logo_path = req.files['logo'] ? req.files['logo'][0].path : null;

    // Prepare the club data for update
    const clubData = {
        description,
        socials: JSON.parse(socials),
        website,
        members: JSON.parse(members),
        logo_path,
    };

    try {
        await clubModel.updateClub(req.session.user.uid, clubData);
        return res.status(200).json({ message: 'Club updated successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error updating club' });
    }
};

//get list of clubs
exports.getAllClubs = async (req, res) => {
    try{
        const results =  await clubModel.getAllClubs();
        return res.status(200).json(results[0]);
    } catch (err){
        console.error(err);
        return res.status(500).json({ message: 'Error fetching records' });
    }
}
  
//get club details for specific id
exports.getClub = async (req, res) => {
    const { clubid } = req.params; //get clubid
    try {
        if (clubid != -1) {
            const result = await clubModel.getClubByClubId(clubid);
            return res.status(200).json(result); 
        } 
        else {
            
            console.log(req.session);
            const result = await clubModel.getClubByUserId(req.session.user.uid);
            return res.status(200).json(result);
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Error fetching record '});
    }
}
