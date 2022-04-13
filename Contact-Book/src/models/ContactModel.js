const mongoose = require('mongoose');
const validator = require('validator');

const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  surname: { type: String, required: false, default: '' },
  email: { type: String, required: false, default: '' },
  telephone: { type: String, required: false, default: '' },
  createdIn: { type: Date, default: Date.now },
});

const ContactModel = mongoose.model('Contact', ContactSchema);

class Contact {
  constructor(body) {
    this.body = body;
    this.errors = [];
    this.contact = null;
  }

  async register() {
    this.validate();
    if (this.errors.length > 0) return;

    this.contact = await ContactModel.create(this.body);
  }

  static async searchById(id) {
    if (typeof id !== 'string') return;
    const user = await ContactModel.findById(id);
    return user;
  }

  validate() {
    this.cleanUp();

    if (this.body.email && !validator.isEmail(this.body.email))
      this.errors.push('Invalid E-mail');

    if (!this.body.name) this.errors.push('User must have a name');

    if (!this.body.email && !this.body.telephone)
      this.errors.push(
        'At least one contact needs to be sent: e-mail or telephone'
      );
  }

  cleanUp() {
    for (const key in this.body) {
      if (typeof this.body[key] !== 'string') this.body[(key = '')];
    }

    this.body = {
      name: this.body.name,
      surname: this.body.surname,
      email: this.body.email,
      telephone: this.body.telephone,
    };
  }

  async edit(id) {
    if (typeof id !== 'string') return;
    this.validate();
    if (this.errors.length > 0) return;
    this.contact = await ContactModel.findByIdAndUpdate(id, this.body, {
      new: true,
    });
  }
}

module.exports = Contact;
