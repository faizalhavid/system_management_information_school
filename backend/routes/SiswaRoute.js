import express from "express";
import {
    index,
    show,
    create,
    store,
    update,
    drop
    
} from "../controllers/SIswaController.js";

const router = express.Router();
router.get('/siswa',index());
router.get('/siswa/:id',show());
router.post('/siswa',create());
router.patch('/siswa/:id',update());
router.delete('/siswa/:id',drop());

export default router;