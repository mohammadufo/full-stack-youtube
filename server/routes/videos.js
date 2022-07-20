import express from 'express';
import {} from '../controllers/user.js';
import {
  addVideo,
  deleteVideo,
  updateVideo,
  addView,
  getByTag,
  getVideo,
  random,
  search,
  sub,
  trend,
} from '../controllers/video.js';
import { verifyToken } from '../verifyToken.js';

const router = express.Router();

//* Create a Video
router.post('/', verifyToken, addVideo);

//* Update a Video
router.put('/:id', verifyToken, updateVideo);

//* Delete a Video
router.delete('/:id', verifyToken, deleteVideo);

//* Get Video
router.get('/find/:id', getVideo);

router.put('/view/:id', addView);

router.get('/trend', trend);

router.get('/random', random);

router.get('/sub', verifyToken, sub);

router.get('/tags', getByTag);

router.get('/search', search);

export default router;
