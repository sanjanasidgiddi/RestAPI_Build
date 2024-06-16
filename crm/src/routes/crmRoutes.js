import { addNewContact, 
    getContacts, 
    getContactWithId, 
    updateContact,
    deleteContact } from '../controllers/crmController'

const routes = (app) => {
    app.route('/contact')
    /** Get all contacts */
    .get((req, res, next) => {
        /** Add Middleware */
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, getContacts)

    /** Post a new contact */
    .post(addNewContact);

    app.route('/contact/:contactId')
    /** Get Specific Contact */
    .get(getContactWithId)

    /** Update a Contact */
    .put(updateContact)

    /** Delete a contact */
    .delete(deleteContact)
}

export default routes;
