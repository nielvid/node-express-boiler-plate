import { Router } from 'express'
import HomePage from '../controller/homepage.js'
import upload from '../services/upload.js'
import UploadToStorage from '../controller/uploadToStorage.js'

const router = Router()

router.get('/', HomePage)
router.post('/upload-media', upload.array('media', 10), UploadToStorage)

export default router
