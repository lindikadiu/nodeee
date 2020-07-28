const express = require('express');
const spRequestController = require('./../controllers/spRequestController');

const router = express.Router();

router
  .route('/')
  .get(spRequestController.getAllRequests)
  .post(spRequestController.createRequest);

router
  .route('/:id')
  .get(spRequestController.getRequest)
  .patch(spRequestController.updateRequest)
  .delete(spRequestController.deleteRequest);

module.exports = router;
