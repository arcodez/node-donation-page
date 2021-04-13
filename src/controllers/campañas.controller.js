const { initDB } = require("../helpers/initDB");

const pool = initDB();

const getCampañas = async (req, res) => {
  const response = await pool.query("SELECT * FROM campañas;");
  const Campañas = await response.rows;
  res.render("campañas/all-campañas", { Campañas });
};

const createCampaña = async (req, res) => {
  const { description } = req.body;
  const response = await pool.query('')
  console.log('Campaña Created succesfully')

}

const updateCampaña = async (req, res) => {
    const id = req.params.id;
    const { motivo, nombre, descripcion }
    const response = await pool.query('')
    res.redirect('/campañas')
}

const deleteCampaña = async (req, res) => {
  const id = req.params.id;
  /* Lo que se va actualizar */
  const response = await pool.query('')
  res.redirect('/campañas')
}

const getCampañaById = async (req, res) => {
  const id = req.params.id;
  const response = await pool.query('')
}

module.exports = { updateCampaña, deleteCampaña, getCampañaById, getCampañas}