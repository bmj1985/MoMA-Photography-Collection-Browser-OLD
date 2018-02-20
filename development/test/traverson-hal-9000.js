const test = require('tape');
const { getToken, getResource } = require('../src/lib/artsy');
test('can get token', t => {
  t.plan(1);
  getToken().then(token => {
    t.ok(token && token.length > 1);
  });
});

test('can get token & resource', t => {
  t.plan(2);
  getToken().then(token => {
    t.ok(token && token.length > 1);
    return getResource(token)
      .then(data => {
        console.log('data', data);
        t.ok(data && data.id.length > 1);
      })
      .catch(err => t.fail(err.message));
  });
});
