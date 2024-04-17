import { Router } from "express";
import { getAll, insertList, getOne, updateList, deleteList } from '../controllers/list.controller.js';

const router = Router();

router.get('/', getAll);
router.get('/:code', getOne);
router.post('/', insertList);
router.put('/:code', updateList);
router.delete('/delete/:code', deleteList);

export default router;
