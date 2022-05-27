const dateTimeService = require('../services/datetime.service');

async function get(req, res, next) {
    /* 	#swagger.tags = ['datetime']
        #swagger.description = 'Get local time for supported Timezones' */
  try {
        dateTimeService.getAllLocalDateTimes().then(localDateTimes => {
            res.json(localDateTimes);
        }).catch(err => {
            next(err);
        });
  } catch (err) {
        console.error(`Error while getting world dateTime`, err.message);
        next(err);
  }
}

module.exports = {
    get
}