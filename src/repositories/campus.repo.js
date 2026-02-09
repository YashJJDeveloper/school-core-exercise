const db = require("../db/db.js");

const getAllCampuses = async (limit, offset) => {
    const query = `
      SELECT *
      FROM campus
      
      LIMIT $1 OFFSET $2
    `;
  
    const result = await db.query(query, [limit, offset]);
    return result.rows;
  };


const getCampusById = async (campus_id) => {
    const query = "SELECT * FROM campus WHERE campus_id = $1";
    const values = [campus_id];
    const {rows} = await db.query(query, values);
    return rows[0];
}

const createCampus = async (campus_code, campus_name, campus_city, campus_state, campus_country, is_active ) => {
    const query = "INSERT INTO campus (campus_code, campus_name, campus_city, campus_state, campus_country, is_active) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *";
    const values = [campus_code, campus_name, campus_city, campus_state, campus_country, is_active];
    const {rows} = await db.query(query, values);
    return rows[0];
}

const updateCampus = async (campus_id, campus_code, campus_name, campus_city, campus_state, campus_country, is_active) => {
    const query = "UPDATE campus SET campus_code = $1, campus_name = $2, campus_city = $3, campus_state = $4, campus_country = $5, is_active = $6 WHERE campus_id = $7 RETURNING *";
    const values = [campus_code, campus_name, campus_city, campus_state, campus_country, is_active, campus_id];
    const {rows} = await db.query(query, values);
    return rows[0];
}

const deleteCampus = async (campus_id) => {
    const query = "DELETE FROM campus WHERE campus_id = $1 RETURNING *";
    const values = [campus_id];
    const {rows} = await db.query(query, values);
    return rows[0];
}

module.exports = {
    getAllCampuses,
    getCampusById,
    createCampus,
    updateCampus,
    deleteCampus
};