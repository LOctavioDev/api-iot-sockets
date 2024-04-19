import List from "../models/lists.model.js";

const ListsDao = {};

ListsDao.getAll = async () => {
  const lists = await List.find();
  return lists;
};

ListsDao.getOne = async (cd) => {
  const list = await List.findOne({ code: cd });
  return list;
};

ListsDao.insertList = async (list) => {
  const savedList = new List(list);
  savedList.save();
  return true;
};

ListsDao.deleteList = async (cd) => {
  const listDeleted = await List.findOneAndDelete({ code: cd });
  if (listDeleted != null) {
    return true;
  } else {
    return false;
  }
};

export default ListsDao;
