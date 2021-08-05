import { expect } from "chai";
import { isAnagram } from './anagrams';

describe('Anagrams : if Strings are anagram of each other', () => {
    it('returns true for anagram string without space', () => {
        const actual = isAnagram('silent', 'listen');
        expect(actual).to.be.equal(true);
    });

    it('returns true for anagram string with space', () => {
        const actual = isAnagram('iam', 'am i');
        expect(actual).to.be.equal(true);
    });

    it('returns false for anagram string with extra letter', () => {
        const actual = isAnagram('listens', 'silent');
        expect(actual).to.be.equal(false);
    });
});