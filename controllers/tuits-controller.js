import tuitsDao from "../database/tuits-dao.js";

const createTuit = async (req, res) => {
    const newTuit = req.body;
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    // newTuit.likes = 0;
    // newTuit.dislikes = 0;
    // newTuit.comments = 0;
    // newTuit.retweets = 0;
    // newTuit.liked = false;
    // newTuit.disliked = false;
    // newTuit.handle = "Logan Evans";
    // newTuit.postedBy = {};
    // newTuit.postedBy.username = "loganevans98";
    // newTuit.avatar = "../images/me.jpeg";
    res.json(insertedTuit);
}

const findAllTuits = async (req, res) => {
    const tuits = await tuitsDao.findAllTuits();
    res.json(tuits);
}
const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updatedTuit = req.body;
    const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updatedTuit);
    res.send(status);
}

const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
    res.send(status);
}


export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}
