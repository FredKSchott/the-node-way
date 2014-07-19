var expect = require('chai').expect,
    sinon = require('sinon'),
    mockery = require('mockery');

var sandbox = sinon.sandbox.create(),
    stubbedDonut = {
        thatAPIMethod: sandbox.stub()
    },
    DonutQueue,
    donutQueue;

describe('DonutQueue', function() {
    
    before(function() {
        mockery.enable();
    });

    beforeEach(function() {
        mockery.registerAllowable('async'); // Allow some
        mockery.registerMock('../lib/donut', stubbedDonut); // Control others
        mockery.registerAllowable('../lib/donut-queue', true); // lets us require our module under test
        DonutQueue = require('../lib/donut-queue');
        donutQueue = new DonutQueue();
    });

    afterEach(function() {
        sandbox.verifyAndRestore();
        mockery.deregisterAll();
    });

    after(function() {
        mockery.disable();
    });

    describe('push', function() {
        it('should increase the queue length by one when called', function() {
            var expectedLen = donutQueue.length + 1;
            donutQueue.push(stubbedDonut);
            expect(donutQueue.length).to.equal(expectedLen);
        });

        it('should throw an error when called with a non-object', function() {
            var badDonut = -1253434;
            expect().to.throw();
        });

        it('should call thatAPIMethod() on the donut when called', function() {
            donutQueue.push(stubbedDonut);
            stubbedDonut.thatAPIMethod.yields();
            expect(stubbedDonut.thatAPIMethod.calledOnce()).to.be.true();
        });
    });
    
});
