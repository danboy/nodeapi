import { User } from "../models/User.js";

const index = async (req, res) => {
  const users = await User.query();
  res.send({users})
}

const create = async (req, res) => {
  const record = await User.query().insertGraph(req.body)
  res.send({record})
}

const destroy = async (req, res) => {
  const result = await User.query().deleteById(req.params.id);
  res.send({result});
}

export default {
  create,
  destroy,
  index,
}
