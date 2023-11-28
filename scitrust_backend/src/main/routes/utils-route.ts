import { Router } from "express";
import jwt from 'jsonwebtoken';
import { firstLevelAuth } from "../middlewares";
const crypto = require('crypto');


export default (router: Router): void => {
  router.post('/auth/zendesk', firstLevelAuth, (req, res) => {
    const { name, email } = req.body;

    const payload = {
      name: name,
      email: email,
      jti: crypto.randomBytes(64).toString('hex'),
      iat: Math.floor(Date.now() / 1000),
    }

    const privateKey = process.env.PRIVACY_KEY

    const token = jwt.sign(payload, privateKey, {
      algorithm: 'HS256',
      expiresIn: '1h'
    })

    res.json({ token })
  });
}