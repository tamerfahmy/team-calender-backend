const moment = require('moment-timezone');
const supportedTimeZones = ['Europe/Berlin', 'Asia/Kolkata', 'America/Guatemala'];

/**
 * Returns list of supported timezones
 * @returns supported timezone list
 * @ref https://www.iana.org/time-zones
 */
function getSupportedTimeZones() {
	return supportedTimeZones;
}

async function getAllLocalDateTimes() {
	// get list of supported timezones
    var supportedTimeZones = getSupportedTimeZones();
    console.log(`Supported timezones: ${supportedTimeZones.join(',')}`);

	// get local time for supported timezones
	var localDateTimes = supportedTimeZones.map(timezone => {
		return {
			timezone,
			localTime: getLocalDateTime(timezone)
		};
	});
	return localDateTimes;
}

/**
 * Returns local datetime for specific timezone
 * 
 * @param {timezone string} timeZone 
 * @returns local datetime string
 * @ref https://www.iana.org/time-zones
 */
function getLocalDateTime(timeZone) {
	if(isValidTimeZone(timeZone)) {
		var localMoment = moment();
		console.log( `Local datetime: ${localMoment.format()}`);

		var utcMoment = localMoment.utc();
		console.log( `UTC datetime: ${utcMoment.format()}`);

		var targetMoment = utcMoment.tz(timeZone);
		console.log( `Datetime in time zone ${timeZone}: ${targetMoment.format()}`);

		return targetMoment.format();

	} else {
		console.error('Invalid timezone!');
		throw new Error('Invalid timezone!');
	}
}

/**
 * Validate if passed timezone is supported
 *
 * @param {timezone string} timeZone 
 * @returns true if passed timezone in the supported list
 */
function isValidTimeZone(timeZone) {
	if(timeZone && 
		moment.tz.zone(timeZone) != null && 
		supportedTimeZones.indexOf(timeZone) > -1) {

		return true;
	}

	return false;
}

module.exports = {
	getSupportedTimeZones,
	getLocalDateTime,
	getAllLocalDateTimes
}