const searchReplace = require('./index-START');

test('searchReplace is a function', () => {
  expect(typeof searchReplace).toEqual('function');
});

test('search for word and replace with new word', () => {
  expect(searchReplace('He is Sleeping on the couch', 'Sleeping', 'sitting')).toEqual('He is Sitting on the couch');
});
