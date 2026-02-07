const campusService = require("../services/campus.service.js");

const getAllCampuses = async (req, res) => {
    try {
        const campus = await campusService.getAllCampuses();
        res.json(campus);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getCampusById = async (req, res) => {
    try {
        const campus_id = req.params.id;
        const campus = await campusService.getCampusById(campus_id);
        if (campus) {
            res.json(campus);
        } else {
            res.status(404).json({ error: "Campus not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const createCampus = async (req, res) => {
    try {
        const { campus_code, campus_name, campus_city, campus_state, campus_country, is_active } = req.body;
        const newCampus = await campusService.createCampus(campus_code, campus_name, campus_city, campus_state, campus_country, is_active);
        res.status(201).json(newCampus);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateCampus = async (req, res) => {
    try {
        const campus_id = req.params.id;
        const { campus_code, campus_name, campus_city, campus_state, campus_country, is_active } = req.body;
        const updatedCampus = await campusService.updateCampus(campus_id, campus_code, campus_name, campus_city, campus_state, campus_country, is_active);
        if (updatedCampus) {
            res.json(updatedCampus);
        } else {
            res.status(404).json({ error: "Campus not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteCampus = async (req, res) => {
    try {
        const campus_id = req.params.id;
        const deletedCampus = await campusService.deleteCampus(campus_id);
        if (deletedCampus) {
            res.json(deletedCampus);
        } else {
            res.status(404).json({ error: "Campus not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getAllCampuses,
    getCampusById,
    createCampus,
    updateCampus,
    deleteCampus
};