const Contact = require("../models/contact");

const { HttpError } = require("../helpers");

const { ctrlWrapper } = require("../decorators");

const allContacts = async (req, res) => {
  const result = await Contact.find();
  res.json(result);
};

// const getById = async (req, res) => {
//   const { contactId } = req.params;
//   const result = await contactsService.getContactById(contactId);
//   if (!result) {
//     throw HttpError(404, `Contact with ${contactId} not found`);
//   }

//   res.json(result);
// };

// const add = async (req, res) => {
//   const result = await contactsService.addContact(req.body);

//   res.status(201).json(result);
// };

// const deleteById = async (req, res) => {
//   const { contactId } = req.params;
//   const result = await contactsService.removeContact(contactId);
//   if (!result) {
//     throw HttpError(404, `Contact with ${contactId} not found`);
//   }
//   res.json({
//     message: "contact deleted",
//   });
// };

// const updateById = async (req, res) => {
//   const { contactId } = req.params;
//   const result = await contactsService.updateContact(contactId, req.body);

//   if (!result) {
//     throw HttpError(404, `Contact with ${contactId} not found`);
//   }

//   res.json(result);
// };

module.exports = {
  allContacts: ctrlWrapper(allContacts),
  // getById: ctrlWrapper(getById),
  // add: ctrlWrapper(add),
  // updateById: ctrlWrapper(updateById),
  // deleteById: ctrlWrapper(deleteById),
};
