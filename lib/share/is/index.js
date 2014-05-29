/**
 *
 */

module.exports = {

  /**
   *
   * @return {Boolean} true/false
   */

  client: function () {
    try {
      return window && window.document;
    }
    catch (e) {
      return false;
    }
  }
};