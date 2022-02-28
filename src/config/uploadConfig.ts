import multer from 'multer';
import paths from 'path';
import crypto from 'crypto';

export default {
  storage: multer.diskStorage({
    destination: paths.resolve(__dirname, '..', '..', 'tmp'),
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString('hex');
      const filename = `${fileHash}-${file.originalname}`;

      return callback(null, filename);
    },
  }),
};
