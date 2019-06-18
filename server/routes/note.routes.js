import { Router } from 'express';
import * as NoteController from '../controllers/note.controller';

const router = new Router();

// Add a new Note
router.route('/notes').post(NoteController.addNote);
// Delete a new Note
router.route('/note/:noteId').delete(NoteController.deleteNote);
// Edit a Note
router.route('/note/:noteId').put(NoteController.updateNote);

export default router;
