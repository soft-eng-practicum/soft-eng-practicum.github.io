# The `_projects` Collection 🏗️

*`_projects/` is the central hub for all projects to be displayed on the site.*

This directory contains student project pages grouped by **course** and
**semester**.

---

## Structure 📁

Each project lives in its own folder under a path like:

```
_projects/
└── course/
    └── sp25/
        └── SampleProject/
            └── index.md
        └── SampleProject2/
            └── index.md
```

This structure supports dynamic generation of course directories and semester
subviews using Jekyll’s `group_by` and `where` filters.

#### ⚠️ Important Notes: ⚠️

- **Collections like `_itec3870_*` are legacy artifacts that contain older project information.**

---

## Creating New "Sub-Collections"

The concept of "sub-collections" does not exist in Jekyll. As such, we must
simulate that behavior using methods like `group_by` and `where` filters.

In order to create a new "sub-collection", you must first create a new folder
named appropriately. In this example, we'll create a new "sub-collection"
to represent all the projects completed by students over the summer as part
of their internship.

First, make a new directory under `/_projects/`:

```bash
mkdir summer-internships
```

Now you have a place to store all of the projects that were completed by
interns over the summer.

Next, create a homepage for `summer-internships` by creating an `index.md` at
the root of the `summer-internships` folder. It's easiest to reuse and modify
an existing homepage. In this case, you can do the following:

```bash
cp _projects/sd2/index.md _projects/summer-internships/
```

Great! Now `summer-internships` has a homepage, but that's not all there is to
do. **Most importantly,** you have to change the value of the `course_key` in
the front matter of `_projects/summer-internships/index.md`. This is the most
important step, because if the value of the `course_key` isn't changed, the
website won't see any difference between the projects in `_projects/sd2` and
`_projects/summer-internships`. Use your favorite text editor (even Notepad!)
to make the change.

Secondarily, the value of `title` *should* be changed, but the site will
function as intended if it isn't. The value of `layout` should not be changed.

Now, we finally have a unique "sub-collection" we can add projects to! 🎉

To begin, create a directory under `summer-internships` that will contain all
of the summer internship projects that happened within a certain semester:

```bash
mkdir _projects/summer-internships/sp25
```

There naming conventions for these "semester-specific" sub-directories are as
follows:

1. A "semester short code", either `fa` (for fall) or `sp` (for spring)
2. The year of the semester, in YY format (e.g., `22`, `29`, `33`)

All together, sub-directories should have names like the following:

- `sp25`
- `fa26`
- `sp27`

Once you have a directory to contain all of the summer internships that took
place within a certain year and semester, you're ready to proceed!

As of now, the `_projects` collection should look like this:

```
_projects/
└── index.md
└── summer-internships/
    └── index.md
    └── sp25/
```

Next, you have to create a "homepage" for the new semester. This "homepage"
acts as an overview for the entire semester, and it will be dynamically
populated with various information about all of the projects that exist within
this semester's directory.

Like before, it's easiest to start with an existing "semester overview":

```bash
cp _projects/sd2/sp25/index.md _projects/summer-internships/sp25/
```

Again, when using this approach, it's *very important* to modify a minimum
number of values in the front matter:

- `course_key`, which we saw before. The value here should align with the `course_key` used in the `index.md` that we created under `_projects/summer-internships`. Without this change, there is no way associate this semester with the `summer-internships` "sub-collection".
- `semester_key`, which we haven't seen before. This variable exists in the front matter as a way to associate various projects with this semester. The value of this variable in the front matter should be exactly the same as the name of the semester's folder (e.g., `sp25`).

It's important to note that the value of `semester_key` does *not* have to be
globally unique, unlike `course_key`, `project_key`, and so on. This is because
`semester_key` is used only as a secondary point of reference: we recognize
that many different courses might have projects happening during the Spring
semester of 2025.

The other front matter and page content can be changed as desired, but the value
of the `layout` variable should not be changed from `projects_overview`.

Now, the `_projects` collection should look like this:

```
_projects/
└── index.md
└── summer-internships/
    └── index.md
    └── sp25/
        └── index.md
```

You're finally ready to start adding projects to be shown on the website!

Create a directory for each project you want to add to this course's semester
using `PascalCase`. The name of the directory you create under the `sp25`
should be the name of the project:

```bash
mkdir _projects/summer-internships/sp25/MobileChemistryQuiz
```

Now, the `_projects` collection should look like this:

```
_projects/
└── index.md
└── summer-internships/
    └── index.md
    └── sp25/
        └── index.md
        └── MobileChemistryQuiz/
```

Add a "homepage" under the `MobileChemistryQuiz` folder, which will provide
more detailed information about the project. Again, it's easiest to modify
an existing "project homepage":

```bash
cp _projects/sd2/sp25/SampleProject/index.md _projects/summer-internships/sp25/MobileChemistryQuiz/
```

Edit everything as needed. Like before, it's **very important** that you modify
the values of `course_key` and `semester_key` to match the values found in the
pages we have created until this point. Continue reading for more detailed
information about the front matter for individual projects.

Now, you're done! That's all you needed to do. The `_projects` collection
should now look like this:

```
_projects/
└── index.md
└── summer-internships/
    └── index.md
    └── sp25/
        └── index.md
        └── MobileChemistryQuiz/
            └── index.md
```

Use your favorite web browser to visit `localhost:4000/projects/summer-internships/sp25/MobileChemistryQuiz`. How does it look?

When you're ready to add pictures to the project page for the
"Mobile Chemistry Quiz" project, create a directory inside of the semester's
directory called `images`. This will act as a holding place for all of the
pictures associated with every projects in this semester:

```bash
mkdir _projects/summer-internships/sp25/images
```

Add pictures to your heart's content, but be sure to also reference them in the
appropriate place in the project's front matter.

Continue reading for more information about the front matter that's expected
in individual project pages, semester overview pages, and course overview pages.

Happy hacking!

---

## Front Matter for Indiviual Projects

Please consult the
[relevant documentation](https://jekyllrb.com/docs/front-matter/) for more
details about front matter.

The following variables are **required** for each project profile:

```yaml
layout: project_page # No other value should be given
title: "" # The name of the project (e.g., "Chemistry Quiz App"). Used in many places throughout the site.
phrase: "" # The slogan for this project (e.g., "Learn about molecules while having fun!").
tech: [] # A list of important technologies utilized during the creation of this project, represented as an array of strings. Should not be empty. (e.g., [ "Firebase", "React" ])
prof: "" # A unique value that represents the professor under which this project was completed (e.g., "gunay").
client: "" # The name of the client for this project (e.g., "Charity Organization").
description: "" # A brief description of the purpose of this project (e.g., "Chemistry Quiz App was created to make chemistry accessible to everyone!").
logo-full: "" # The full filename of the project picture to be used for the project's profile (e.g., "projectFlyer.jpg").
logo-thumb: "" # The full filename of the project picture's thumbnail to be used for the project's profile (e.g., "projectFlyerThumbnail.jpg).
repo-url: "" # The website link to the project's remote repository (e.g., "https://github.com/username/project.git").
photos: [] # A list of full filenames of pictures to be shown on the project page (e.g., [ "clientPicture.jpg", "groupPicture.jpg" ]).
project_key: "" # A completely unique value that corresponds to only this project. Used in many places to reference this project (e.g., "unique-value").
sponsor_key: [] # The unique values that corresponds to the partner(s) responsible for this project (e.g., [ "charity-organization", "faculty-advisor" ]).
course_key: "" # A unique value that corresponds to the course in which this project was worked on (e.g., "sd2" or "internship").
semester_key: "" # A unique value that corresponds to the semester during which this project was worked on (e.g., "sp25" or "fa24").
cohort: "" # The name of the group that worked on this project (e.g., "ABBA").
```

The following variables are **optional** for each project profile:

```yaml
screencast-youtube: "" # The unique video I.D. of the project showcase on YouTube (e.g., hVx8VQ5Y79M).
client-url: "" # The website link of the client for this project (e.g., "https://charity.org").
# 💡 Assign `client-url` to an empty string (i.e., "") in order to take advantage
# of dynamic client link population on pages with the `projects_overview`
# layout.
demo-url: "" # The website link users can visit to interact with a demo of this project (e.g., "https://demo-site.com").
```

#### ⚠️ Important Notes: ⚠️

- All pictures relating to a project should be stored in `/_projects/<course>/<semester>/images`.
- All filenames should match the value included in the front matter **exactly**.

---

## Keys Controlling Grouping and Filtering 🔑

Each project uses 2 keys in its front matter:

- `course_key`: the course to which the project belongs (e.g., "sd1", "sd2", "internship", etc.).
- `semester_key`: the semester it was completed or worked on (e.g. "fa24", "sp25", etc.).

There are used to:
- Dynamically render navigation and directory pages
- Group and count projects in listings
- Build clean permalinks

#### ⚠️ Important Notes: ⚠️

- It's necessary to consistently use the correct key across various projects, partners, and students.
- Think of it just like a "primary key" or "foreign key" in a database!

---

## Front Matter for Semester Overviews

The following variables are **required** for each semester overview:

```yaml
layout: projects_overview # No other value should be given.
title: "" # The title for this page.
course_key: "" # The unique value that corresponds to a specific course (e.g., "sd2").
semester_key: "" # The unique value that corresponds to a specific semester (e.g., "sp25").

# ⚠️ IMPORTANT: ⚠️
# The 5 digit value provided for sort_val should be composed like
# YYYY<1|2>, where 'YYYY' is the four digit year, and <1|2> is either
# 1 for spring semesters and 2 for fall semesters.
# ⚠️ Dynamic collection aggregation will break
# if this value is set incorrectly.
sort_val: "" # A 5 digit value used for automated sorting.
```

---

## Front Matter for Course Overviews

The following variables are **required** for each course overview:

```yaml
layout: main_page # No other value should be given.
title: "" # The title for this page.
course_key: "" # The globally unique identifier for this course.
```

---

## Assets and Previews 📷

In order to include pictures on the project's page, you must:
- Add as many pictures as you want to the appropriate image directory (e.g., `_projects/<course>/<semester>/images/`).
- Add the picture(s)'s filename(s) to the projects `photos` front matter.

---

## Conventions and Notes 💡

- Folder names for courses should be written in **kebab-case** (e.g., `sd2` or `tap-internships`).
- `course_key` should be written exactly the same as the folder name.
- Folder names for semesters should only start with either `fa` or `sp` and be followed by only 2 digits (YY) (e.g., `fa24` or `sp25`)
- `semester_key` should be written exactly the same as the folder name.
- All content should live in `index.md` inside the project folder.
- Projects may include additional files like `.pdf`, `.json`, etc.
