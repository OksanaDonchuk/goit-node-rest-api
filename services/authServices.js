import User from "../models/User.js";

export const finduser = (filter) => User.findOne(filter);

export const saveUser = (data) => User.create(data);
