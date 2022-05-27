const express = require('express');
const router = express.Router();
const dateTimeController = require('../controllers/datetime.controller');

/**
 * @swagger
 * components:
 *   schemas:
 *     LocalTime:
 *       type: object
 *       properties:
 *         timezone:
 *           type: string
 *           description: The timezone
 *         localTime:
 *           type: string
 *           description: the local time in the timezone
 *       example:
 *         timezone: Europe/Berlin
 *         localTime: 2022-05-27T21:41:43+02:00
 */

/**
 * @swagger
 * /date-time:
 *   get:
 *     summary: Returns all local times
 *     tags: [Date-Time]
 *     responses:
 *       200:
 *         description: the list of local times in supported timezones
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/LocalTime'
 */
router.get('/', dateTimeController.get);
  
module.exports = router;