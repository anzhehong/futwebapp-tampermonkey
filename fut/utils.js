/* globals
repositories
*/

export default {
  /**
   * Sleep for a while
   *
   * @param {number} min minimum sleep time in ms
   * @param {number} variance maximum variation to add to the minimum in ms
   */
  sleep(min, variance = 1000) {
    const delay = min + Math.floor(Math.random() * variance);
    // new Logger().log(`Delay for ${delay} (requested: ${min}+${variance})`, 'Core');
    return new Promise(resolve => setTimeout(resolve, delay));
  },

  getPlatform() {
    if (repositories.User.getCurrent().getSelectedPersona().isPlaystation) {
      return 'ps';
    }
    if (repositories.User.getCurrent().getSelectedPersona().isPC) {
      return 'pc';
    }
    if (repositories.User.getCurrent().getSelectedPersona().isXbox) {
      return 'xbox';
    }

    throw new Error('unknown platform');
  },
};
