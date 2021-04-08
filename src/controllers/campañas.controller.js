const { initDB } = require("../helpers/initDB");

const pool = initDB();

const getCampañas = async (req, res) => {
  const response = await pool.query("SELECT * FROM campañas;");
  const Campañas = await response.rows;
  res.render("campañas/all-campañas", { Campañas });
};

const updateCampaña = async (req, res) => {
    const id = req.params.id;
    const { Motivo }
    const response = await pool.query()
}