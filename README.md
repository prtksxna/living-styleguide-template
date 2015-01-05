# Living Styleguide Template

An example HTML page for the living styleguide. It implements the the following mock up:

 * https://phabricator.wikimedia.org/M20
 * https://phabricator.wikimedia.org/M18
 * https://phabricator.wikimedia.org/M19

## Usage

Install bower components and open index.html

```
$ bower install
$ open index.html
```

## Updating demo

Switch to the `gh-pages` branch, remove `.gitignore` so that `bower_components/` can be added and then force push.

```
$ git checkout -b gh-pages
$ git rm .gitignore
$ git add .
$ git commit -m "Seed gh-pages"
$ git push origin gh-pages --force
$ git checkout master
$ git branch -D gh-pages
```
