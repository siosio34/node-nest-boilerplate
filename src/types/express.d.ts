import * as express from 'express';
import { User } from '../api/user/user.entity';

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}
