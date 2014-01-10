(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  module('jQuery#formyeah', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture').children();
    }
  });

  test('is ok', function() {
    expect(1);
    // Not a bad test to run on collection methods.
    strictEqual(this.elems.formyeah(), this.elems, 'should be chainable');
  });

//  module('jQuery.formyeah');
//
//  test('is awesome', function() {
//    expect(2);
//    strictEqual($.formyeah(), 'awesome.', 'should be awesome');
//    strictEqual($.formyeah({punctuation: '!'}), 'awesome!', 'should be thoroughly awesome');
//  });
//
//  module(':formyeah selector', {
//    // This will run before each test in this module.
//    setup: function() {
//      this.elems = $('#qunit-fixture').children();
//    }
//  });
//
//  test('is awesome', function() {
//    expect(1);
//    // Use deepEqual & .get() when comparing jQuery objects.
//    deepEqual(this.elems.filter(':formyeah').get(), this.elems.last().get(), 'knows awesome when it sees it');
//  });

}(jQuery));
