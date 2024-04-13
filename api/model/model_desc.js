const db = require("../db");

exports.getData = (res) => {
  const sql = "select * from descrip";

  db.query(sql, (err, result) => {
    try {
      res.status(200).json({ result });
    } catch (error) {
      res.status(404).send(err);
    }
  });
};

exports.addData = (req, res) => {
  const { desc } = req.body;
  const sql = `insert into descrip (description) values ('${desc}')`;

  db.query(sql, (err, result) => {
    try {
      res.status(200).json({ result });
    } catch (error) {
      res.status(404).send(err);
    }
  });
};

exports.getDataById = (req, res) => {
  const { id } = req.body;

  const sql = `select * from descrip where id = '${id}'`;
  db.query(sql, (err, result) => {
    try {
      res.status(200).json({ result });
    } catch (error) {
      res.status(404).send(err);
    }
  });
};

exports.updateData = (req, res) => {
  const { id, desc } = req.body;

  const sql = `update descrip set description = '${desc}' where id = '${id}'`;
  db.query(sql, (err, result) => {
    try {
      res.status(200).json({ result });
    } catch (error) {
      res.status(404).send(err);
    }
  });
};

exports.deleteData = (req, res) => {
  const { id } = req.body;

  const sql = `delete from descrip where id = '${id}'`;
  db.query(sql, (err, result) => {
    try {
      res.status(200).json({ result });
    } catch (error) {
      res.statu(404).send(err);
    }
  });
};
