## BB's Practium Website Project - 2/6/2023 ##

**Selected Technology Stack**
* Jekyll 
* Liquid Language 
* Javascript/CSS/SCSS/HTML

**Details**
* Static site generator used for the base of the website
* Main lanuage used for the framework of the sitegi
* Web technolgies mainly used for styling and format of the site 
**License**
 Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0) https://creativecommons.org/licenses/by-nc-sa/4.0/ 
**Installation Instructions** 
* Jekyll can be downloaded via jekyllrb.com

## Org Github Pages Website using Jekyll ##

Change these files to update the documentation served
[here](https://soft-eng-practicum.github.io/).

Here's the [Github repo
metadata](https://help.github.com/articles/repository-metadata-on-github-pages/)
we can use in the use in the pages.

To build and run the documentation locally, do:

```bash
$ bundle exec jekyll serve --watch
```
To build and run the documentation locally on mac m1 and m2, do:

download Docker: https://docs.docker.com/desktop/install/mac-install/
choose the apple silicon.
And then run this command on your terminal:

```bash
$ docker run -it --rm -v "$PWD":/srv/jekyll -p "4000:4000" blafy/jekyll:latest-aarch64 jekyll  serve

```

More info can be found at [the Github Pages setup](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/).

And here are the [Markdown help](https://daringfireball.net/projects/markdown/syntax), [Sass guide](http://sass-lang.com/guide), and [Jekyll docs](https://jekyllrb.com/docs/usage/).

To add content, either add new files under `_posts/` or define
collections in `_config.yml` and add a corresponding folder structure
like that in `_itec3870_fa16/`.

### TODO ###

* Make individual pages for each project by using `@include index.md`
  and then picking up the item with a parameter?
* Upload the screencast videos to Youtube and link them from here.
