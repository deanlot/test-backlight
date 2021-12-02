declare global {
  // @ts-ignore
  var expect: any;
}

// @ts-ignore
import * as domMatchers from '@testing-library/jest-dom/matchers';
import * as extendedMatchers from 'jest-extended/all';

const matchers = { ...(domMatchers.default || domMatchers), ...extendedMatchers }; // domMatchers is frozen and we need to enrich the matchers in the browser

if (typeof window !== 'undefined' && !('jest-symbol-do-not-touch' in window)) {
  matchers.toMatchSnapshot = () => ({ pass: true });
}

// @ts-ignore
import expect from 'expect'; // Extremely important ! Don't change the version of expect or the online testing will crash because it's the last one working in the browser

expect.extend(matchers);
// @ts-ignore
globalThis.expect = expect;
