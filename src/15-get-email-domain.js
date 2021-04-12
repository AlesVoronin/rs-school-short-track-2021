/* eslint-disable */
/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  // eslint-disable-next-line no-param-reassign
  email = email.split('');
  let start_domain = -1;
  let domain = '';
  for (let i = email.length; i > 0; i--) {
    // eslint-disable-next-line eqeqeq
    if (email[i] == '@') {
      // eslint-disable-next-line camelcase
      start_domain = i + 1;
      break;
    }
  }
  for (start_domain; start_domain < email.length; start_domain++) {
    domain += email[start_domain];
  }
  return domain;
}

module.exports = getEmailDomain;
