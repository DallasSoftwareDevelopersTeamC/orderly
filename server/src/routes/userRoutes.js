import express from 'express';
import * as usersController from '../controllers/user.js';

const router = express();

router.get('/', usersController.getUsers);
router.get('/:id', usersController.getUser);
router.post("/", usersController.createUser);
router.patch("/:id", usersController.updateUser);
router.delete('/:id', usersController.deleteUser);

export default router;
