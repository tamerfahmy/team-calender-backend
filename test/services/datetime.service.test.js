const dateTimeService = require('../../src/services/datetime.service');

describe('Datetime service test', () => {
  describe('getSupportedTimeZones', () => {
    it('Should get 3 supported timezones', () => {
        expect(dateTimeService.getSupportedTimeZones()).toHaveLength(3);
    });
  });

  describe('getLocalDateTime', () => {
    it('Should throw invalid timezone', () => {
        expect(() => dateTimeService.getLocalDateTime('INVALID_TIMEZONE')).toThrow();
    });

    it('Should return valid local datetime', () => {
        expect(() => dateTimeService.getLocalDateTime('Europe/Berlin')).not.toBeNull();
    });
  });

  describe('getAllLocalDateTimes', () => {
    it('Should get 3 supported local times', () => {
        expect(dateTimeService.getAllLocalDateTimes()).resolves.toHaveLength(3);
    });
  });
});