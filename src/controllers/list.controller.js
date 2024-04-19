import ListsDao from "../dao/lists.dao.js";

export const getAllLists = (req, res) => {
  ListsDao.getAll()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
};

export const insertList = (req, res) => {
  ListsDao.insertList(req.body)
    .then((result) => {
      if (result) {
        res.json(result);
      }
    })
    .catch((err) => {
      res.json({ status: "Ocurrio un error" });
    });
};

export const getList = (req, res) => {
  ListsDao.getOne(req.params.code)
    .then((result) => {
      if (result != null) {
        res.json(result);
      } else {
        res.json({ status: "List not found" });
      }
    })
    .catch((err) => {
      res.json(err);
    });
};

export const deleteList = (req, res) => {
  ListsDao.deleteList(req.params.code)
    .then((result) => {
      if (result != null) {
        res.json(result);
      } else {
        res.json({ status: "List not found" });
      }
    })
    .catch((err) => {
      res.json(err);
    });
};
