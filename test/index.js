var expect = require('expect.js'),
    proveEmail = require('..');

describe('prove-email', function() {
  it('should say hello', function(done) {
    expect(proveEmail()).to.equal('Hello, world');
    done();
  });
});
