const router = require('express').Router();

const {
  updateUser, getCurrentUser,
} = require('../controllers/users');

const { updateUserValidation } = require('../middlewares/validations');

router.get('/users/me', getCurrentUser);

router.patch('/users/me', updateUserValidation, updateUser);

module.exports = router;
