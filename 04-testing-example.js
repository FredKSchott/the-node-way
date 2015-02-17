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
        mockery.enable(); // Enable mockery at the start of your test suite
    });

    beforeEach(function() {
        mockery.registerAllowable('async');                    // Allow some modules to be loaded normally
        mockery.registerMock('../lib/donut', stubbedDonut);    // Register others to be replaced with our stub
        mockery.registerAllowable('../lib/donut-queue', true); // Allow our module under test to be loaded normally as well
        DonutQueue = require('../lib/donut-queue');            // Load your module under test
        donutQueue = new DonutQueue(); 
    });

    afterEach(function() {
        sandbox.verifyAndRestore(); // Verify all Sinon mocks have been honored
        mockery.deregisterAll();    // Deregister all Mockery mocks from node's module cache
    });

    after(function() {
        mockery.disable(); // Disable Mockery after tests are completed
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
