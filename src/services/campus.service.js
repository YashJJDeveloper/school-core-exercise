const campusRepo = require("../repositories/campus.repo.js");

const getAllCampuses = async () => {
    return await campusRepo.getAllCampuses();
}

const getCampusById = async (campus_id) => {
    return await campusRepo.getCampusById(campus_id);
}

const createCampus = async (campus_code, campus_name, campus_city, campus_state, campus_country, is_active) => {
    return await campusRepo.createCampus(campus_code, campus_name, campus_city, campus_state, campus_country, is_active);
}

const updateCampus = async (campus_id, campus_code, campus_name, campus_city, campus_state, campus_country, is_active) => {
    return await campusRepo.updateCampus(campus_id, campus_code, campus_name, campus_city, campus_state, campus_country, is_active);
}

const deleteCampus = async (campus_id) => {
    return await campusRepo.deleteCampus(campus_id);
}

module.exports = {
    getAllCampuses,
    getCampusById,
    createCampus,
    updateCampus,
    deleteCampus
};