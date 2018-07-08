/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against this application.
 */

/* All of the tests have been placed within the $() function,
 * since some of these tests may require DOM elements, in order
 * to ensure they don't run until the DOM is ready.
 */

$(function() {
    describe('RSS Feeds', function() {
        // Test 01 : Test if the allFeeds variable has been defined
        it('are defined', function() {
          expect(allFeeds).toBeDefined();
          expect(allFeeds.length).not.toBe(0);
        });

        // Test 02 : Test if all of the feeds have a valid URL
        it('has a URL', function() {
          allFeeds.forEach(function(feed) {
            expect(feed.url).toBeDefined();
            expect(feed.url.length).not.toBe(0);
          });
        });

         // Test 03 : Test if all of the feeds have a valid name
        it('has a name', function() {
          allFeeds.forEach(function(feed) {
            expect(feed.name).toBeDefined();
            expect(feed.name.length).not.toBe(0);
          });
        });
    });


    describe('The Menu', function() {
        var body = $('body');

        // Test 04 : Test if the menu element is hidden by default
        it('is hidden by default', function() {
          expect(body.hasClass('menu-hidden')).toBe(true);
        });

        // Test 05 : Test if the menu changes visibility when the menu icon is clicked
        it('changes visability when the menu icon is clicked', function() {
          jQuery('.menu-icon-link')[0].click();
          expect(body.hasClass('menu-hidden')).toBe(false);
          jQuery('.menu-icon-link')[0].click();
          expect(body.hasClass('menu-hidden')).toBe(true);
        });
    });


    describe('Initial Entries', function() {
        var entries;

        // Test 06 : Test if there is at least a single entry element after loading feed
        beforeEach(function(done) {
          loadFeed(0, function() {
            done();
          });
        });

        it('are loaded properly', function() {
          entries = $('.entry');
          expect(entries.length).toBeGreaterThan(0);
        });
    });


    describe('New Feed Selection', function() {
        var entriesOne;
        var entriesTwo;

        // Test 07 : Test if the content changes after a new feed is loaded
        beforeEach(function(done) {
          loadFeed(0, function() {
            entriesOne = $('.entry');
            done();
          });
        });

        it('changes the body content', function() {
          loadFeed(1, function() {
            entriesTwo = $('.entry');
          });
          expect(entriesOne).not.toEqual(entriesTwo);
        });
    });
}());
