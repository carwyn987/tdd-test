import test from 'ava';
import { add } from '../index';

test('Add two positive integers:', (t) => {
  t.is(add(1, 2), 3, 'foo');
});
