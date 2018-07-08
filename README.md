# Feed Reader Testing

This project was created for the Udacity Front End Developer Nanodegree.


## About this project

This is a web-based application that reads RSS feeds.
The html, css, and js code was given by the original developer.
It was my task to create a test file written in Jasmine,
in order to ensure that all of the functionality was working well.
All of these tests can be found in `jasmine/spec/feedreader.js`.


## Jasmine tests

There are 7 different tests included in the Jasmine file.
1. Test 01 : Test if the allFeeds variable has been defined
2. Test 02 : Test if all of the feeds have a valid URL
3. Test 03 : Test if all of the feeds have a valid name
4. Test 04 : Test if the menu element is hidden by default
5. Test 05 : Test if the menu changes visibility when the menu icon is clicked
6. Test 06 : Test if there is at least a single entry element after loading feed
7. Test 07 : Test if the content changes after a new feed is loaded


## How to Run File

1. Open the terminal.
2. Clone the repository: `git clone https://github.com/hermy0211/feed-reader-test.git`
3. Open the directory to which you have cloned the repository.
4. Open `jasmine/spec/feedreader.js` in a code editor to view the tests.
5. Run `index.html` to see the outcomes of the test.


## Contributing

1. Fork the project to your own directory.
2. Create a feature branch: `git checkout -b new-feature`
3. Commit your changes: `git commit -m "Explain Feature"`
4. Push to the branch: `git push origin new-feature`
5. Submit a pull request.

Feel free to suggest any code optimizations or new tests!
