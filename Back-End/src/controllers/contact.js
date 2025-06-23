const { Contact } = require("../models/contectModuls");

exports.ContactFrom = async (req, res) => {
  try {
    const formData = req.body;
    if (!formData.name || !formData.email || !formData.message) {
      return res.status(401).json({ message: "Required fields messing" });
    }
    const form = await Contact(formData);
    form.save();
    return res
      .status(200)
      .json({
        message:
          "Contect details Submited successfull, We will contect You soon!",
      });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

exports.CantectQuery = async (req, res) => {
  try {
    const query = await Contact.find();
    return res.status(200).json(query);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};
