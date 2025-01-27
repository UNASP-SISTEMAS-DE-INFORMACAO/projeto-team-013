const authConfig = require('../../config/authConfig')
const jwt = require('jsonwebtoken')
const { promisify } = require('util')

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({ error: 'No token was provided' })
  }

  const [, token] = authHeader.split(' ')

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret)
    req.ra = decoded.ra
    req.admin = decoded.is_admin
    return next()
  } catch (err) {
    return res.status(401).json({ error: 'invalid token' })
  }
}
