import { Router } from "express";
import { getAll, insertData, getOne, updateData, deleteData } from '../controllers/data.controller.js';

const router = Router();

router.get('/', getAll);
router.get('/:id', getOne);
router.post('/', insertData);
router.put('/:id', updateData);
router.delete('/:id', deleteData);

export default router;
