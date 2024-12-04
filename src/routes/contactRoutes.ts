import { Router } from 'express';
import { getContacts, postContact, putContact, deleteContact } from '../controllers/contactController';

const router = Router();

router.get('/contatos', getContacts);

router.post('/contatos', postContact);

router.put('/contacts_atu/:id', putContact);

router.delete('/contacts_del/:id', deleteContact);

export default router;
