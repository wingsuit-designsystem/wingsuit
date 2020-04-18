import "mocha";
import * as chai from "chai";

import Calculator from '../src/calculator';

describe('Calculator', () => {
    var subject :Calculator;

    beforeEach(function () {
        subject = new Calculator();
    });

    describe('#add', () => {
        it('should add two numbers together', () => {
            var result :number = subject.add(2, 3);
            chai.expect(result).to.equal(5);
        });
    });
});