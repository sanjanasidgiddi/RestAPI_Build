import mongoose from 'mongoose';
import { ContactSchema } from '../models/crmModel'

const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = async (req, res) => {
    let newContact = new Contact(req.body);

    await newContact.save((err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
};

export const getContacts = (req, res) => {
    Contact.find({}, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
};

export const getContactWithId = (req, res) => {
    Contact.findById(req.params.getContactWithId, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
};

export const updateContact = (req, res) => {
    Contact.findOneAndUpdate({ _id: req.params.getContactWithId }, req.body, { new: true }, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
};

export const deleteContact = (req, res) => {
    Contact.remove({ _id: req.params.getContactWithId }, (err) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted contact' });
    });
};
