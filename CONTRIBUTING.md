Contributing
============

Getting Started
---------------

### Creating Content ###

Our website is built using the [Hugo] static website engine. It is recommended
that you have a working copy of the latest minor version of Hugo installed.
For instructions on how to [install][install Hugo] and use Hugo, see the
[Hugo docs].

See below for how to create or modify certain sections of the website.

### Updating the Design ###

If you would like to modify the website design, it is recommended that you have
a recent version of [node] installed. To prepare the development environment,
navigate to the repository using command line and input `npm install`. This will
download all of the packages used to build the website.

To build the website, run `npm start` to build and process the pages.

### Writing a Post ###

To create a new post, run the command `hugo new path/to/post.md`. The directory
in which the new file is created will correspond with the path that will be used
to access to file. For example, a post created at `/blog/2011/post.md` can be
found at the URL `/blog/2011/post/`.

When posts are created, they will initially be marked as drafts. Configurations
such as this can be found at the top of the newly created file, known as the
"front matter".

Organization
-----------

### Procedure for Peer Reviews ###

To avoid minor mistakes, it is very helpful to have another set of eyes peer
review content before it is scheduled for delivery. On account of this, it is
highly suggested that all new content use pull requests to allow for a review
process before publishing.

### Found an Issue? ###

If you find a bug in the code please help us by submitting an issue to our
[GitHub Repository][gh issue].
The more detail you can provide in your issue the better as it will allow us to
diagnose the problem faster.

### Notice a Documentation Error or Something Missing? ###

If you notice something that is either wrong or unclear in our documentation,
please submit an issue to our
[GitHub Repository][gh issue].

Management
----------

### Project Leaders ###

+ [Carl Colglazier](https://github.com/carlcolglazier) (2013-2015)

[hugo]: http://gohugo.io/ "Hugo :: A fast and modern static website engine"
[install hugo]: http://gohugo.io/overview/installing/ "Installing Hugo"
[hugo docs]: http://gohugo.io/overview/introduction/
[contributing.md]: /CONTRIBUTING.MD
[node]: https://iojs.org "io.js - JavaScript I/O"
[gh issue]: https://github.com/team2059/website/issues/new "Create an issue"
