/**
 * @jest-environment jsdom
 */
import countComments from './commentsCounter.js';

const comments1 = document.createElement('div');
const comments2 = document.createElement('div');
for (let i = 0; i < 5; i += 1) {
  const comment = document.createElement('div');
  comments1.append(comment);
}

test('Comments counter', () => {
  expect(countComments(comments1)).toBe(5);
  expect(countComments(comments2)).toBe(0);
});