import Contact from "../models/Contact.js";

export const listContacts = () => Contact.find();

export const getContactById = async (_id) => {
  const result = await Contact.findById(_id);
  return result;
};

export const removeContact = (id) => Contact.findByIdAndDelete(id);

export const addContact = (data) => Contact.create(data);

export const updateContactById = (id, data) =>
  Contact.findByIdAndUpdate(id, data);
