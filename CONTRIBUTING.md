# Contributing to Soft-Eng-Practicum

---

Thank you for your interest in contributing to Soft-Eng-Practicum!
Whether you're fixing a typo, adding a project, or helping refactor code,
there are many ways to contribute, and we appreciate all of them.

This document explains how to set up your environment and make safe,
consistent changes. For more detailed information specifically related to
various sections of the website, please consult the appropriate `README.md`
(stored in various sub-directories where needed).

If you have *non-code-related* changes, such as ideas or questions about
participating, please contact the site's owner and maintainer,
[Dr. Cengiz Gunay][Contact].

[Contact]: mailto:cgunay@ggc.edu?subject=Soft%20Eng%20Practicum%20Website%20Inquiry

---

## Getting Started 🛠️

### Recommended: GitHub Codespaces (No Local Setup Needed)

Using GitHub Codespaces lets you develop and preview the site entirely in your browser without installing anything locally.

---

### Step 1: Fork This Repository

On GitHub:

1. Go to:  
   https://github.com/soft-eng-practicum/soft-eng-practicum.github.io  
2. Click **Fork** near the top-right of the page  
3. Fork it into your own account  

> You will make changes in your fork, not the main repository.

---

### Step 2: Open a Codespace

From **your fork**:

1. Click the green **Code** button  
2. Select the **Codespaces** tab  
3. Click **Create codespace on master**

> The first launch may take a few minutes to set up.

---

### Step 3: Run the Site

Inside the Codespace terminal, run:

```bash
bundle install
bundle exec jekyll serve --host 0.0.0.0 --port 4000
```
When the server starts:

- Open the **Ports** panel in Codespaces (usually at the bottom or in the “Ports” tab)
- Find **port 4000** in the list
- Click the **Open in Browser** (or globe) icon next to port 4000

The site will then load in your browser.

>🎉 You now have a live preview!

### ⚠️ Billing Note

Codespaces has free usage limits for students, but it is not unlimited.
See: https://docs.github.com/en/billing/concepts/product-billing/github-codespaces

---

## Otherwise...

1. **Clone the repository**

```bash
git clone https://github.com/soft-eng-practicum/soft-eng-practicum.github.io && \
cd soft-eng-practicum
```

2. **Configure your environment**
    * Using Docker/Podman and have `bash`? *Your life's easy!*  

        1. Execute the build script  
            ```bash
            ./build-container.sh
            ```
        2. Execute the start script  
            ```bash
            ./start-container.sh
            ```
        3. Open your favorite browser and visit `localhost:4000`! 🎉

    * Installing natively?  

        1. Install [Ruby](https://www.ruby-lang.org/en/documentation/installation/)
        2. Install [Bundler](https://bundler.io/docs.html)
        3. Install [Jekyll](https://jekyllrb.com/docs/installation/)
        4. Install project dependencies  
            ```bash
            bundle install
            ```
        5. Start the development server  
            ```bash
            bundle exec jekyll serve --host 0.0.0.0 --port 4000
            ```
        6. Open your favorite browser and visit `localhost:4000`! 🎉

#### Misc.

Here's the [Github repo
metadata](https://help.github.com/articles/repository-metadata-on-github-pages/)
we can use in the use in the pages.

More info can be found at [the Github Pages setup](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/).

And here are the [Markdown help](https://daringfireball.net/projects/markdown/syntax), [Sass guide](http://sass-lang.com/guide), and [Jekyll docs](https://jekyllrb.com/docs/usage/).

---

## Site Structure 🧱

- `_projects/` - contains all student projects organized by course and semester
- `_partners/` - contains all information about all partners (non-students) who participated in a project
- `_students/` - contains all information about all students who participated in a project
- `_sass/` - contains all stylesheets to be compiled for use with the generated site
- `_layouts/` - page templates
- `_includes/` - partials used in layouts (e.g., navbar, project cards, etc.)
- `_itec3870_*/` - ⚠️ LEGACY ⚠️ -- do **not** create any *new* content in these collections
- `assets/` - site-wide scripts, pictures, etc.
- `_config.yml` - site configuration and collections
- `*.md` - misc. site pages -- refer to document content
- `README.md`, `CONTRIBUTING.md` - documentation

---

## Learn More 🧐

- Adding new projects? [Click here!](./_projects/README.md)
- Adding new partners? [Click here!](./_partners/README.md)
- Adding new students? [Click here!](./_students/README.md)

---

## Making Changes 🧪

- ❗ Avoid editing shared layouts or includes unless you're sure it won't break other views.
- ✅ All custom CSS should go in an appropriate partial under `/_sass/`.
- 📝 If your change affects how content is rendered, consider testing it on at least one example page.

---

## Style Guide 💅

- Use consistent indentation (4 space indentation, no tab characters).
- Keep front matter keys lowercase and use [`kebab-case`](https://developer.mozilla.org/en-US/docs/Glossary/Kebab_case) where needed.
- All image paths should be relative to `/assets/img/` or local to the projects folder (for projects), if not hosted remotely.

---

## Pull Requests

We welcome PRs! Before submitting:

- Check your local preview at `localhost:4000`.
- Make sure your change(s) don't break other sections/pages/etc.
- Add a brief description of what you changed.

## Need Help? 🆘

If you're unsure about something, feel free to open a GitHub Issue or contact our [site maintainer][Contact].

<br>

**Most importantly,** welcome, have fun, and <u>thank you for contributing!</u> 🚀

---

### TODO 📋

* Upload the Screencast videos to Youtube and link them from here.
* Create light/dark themes with automatic detection
