import * as authServices from "../services/authServices.js";
import HttpError from "../helpers/HttpError.js";
import ctrlWrapper from "../decorators/ctrlWrapper.js";

const signup = async (req, res) => {
  const { email } = req.body;
  const user = await authServices.finduser({ email });
  if (user) {
    throw HttpError(409, "Email already use");
  }
  const newUser = await authServices.saveUser(req.body);
  res.status(201).json({
    email: newUser.email,
  });
};

export default {
  signup: ctrlWrapper(signup),
};
