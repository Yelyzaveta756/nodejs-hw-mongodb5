import jwt from 'jsonwebtoken';

import { env } from './env.js';
import { SMTP } from '../constants/auth.js';

const jwtSecret = env(SMTP.JWT_SECRET);

export const createJwtToken = payload => jwt.sign(payload, jwtSecret, { expiresIn: '5m' });

