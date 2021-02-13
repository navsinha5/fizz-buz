const { expect } = require('chai');
const calFizzBuzz = require('./fizz-buzz');

describe('fizz-buzz', () => {
    it('should return fizz', () => {
        expect(calFizzBuzz(24)).equals('fizz');
    });

    it('should return buzz', () => {
        expect(calFizzBuzz(20)).equals('buzz');
    });

    it('should return fizzbuzz', () => {
        expect(calFizzBuzz(15)).equals('fizzbuzz');
    });

    it('should return the integer', () => {
        expect(calFizzBuzz(14)).equals('14');
    });
});