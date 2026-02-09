# The `_students` Collection 👩‍🎓

This directory stores individual student profile pages used across the website for attribution, recognition, and linking to project contributions.

Each student is represented by a single Markdown file containing YAML front matter and optional content.

---

## Structure 📁

1. Within `_students/all`, there is a file for each student
2. Each file should be named using the format `FirstName_LastName.md`
3. There should be no sub-directories

---

## Front Matter

Please consult the [relevant documentation](https://jekyllrb.com/docs/front-matter/)
for more details about front matter.

### The following variables are **required** for each student profile:
> NOTE: All required variables must exist, but their values may be left blank if necessary.

```yaml
layout: student_profile_new # No other value should be given.
student_id: "" # The unique id of the student. Should be the same as the file name, but with hyphens instead of underscores, e.g., "FirstName-LastName"
title: "" # The full name of the student written in plain English (e.g., "Tom Brady").
logo: "" # The full filename of the profile picture to be used for the student's profile.
header: "" # The full filename of the header picture to be used for the student's profile.
project_role: "" # The student's role in the project (e.g., "UX Designer").
contact_email: "" # The student's contact email (e.g., tbrady@ggc.edu).
major: "" # The student's major (e.g., Exercise Science).
graduation_year: # The year the student is, will, or has graduated, represented as an integer (e.g., 2025)
cohort: "" # The student's team's name (e.g., New England Patriots).
skills: [] # A brief list of skills to be highlighted on the student's profile, represented as an array of strings. Can be empty. (e.g., [ "Football", "Baseball" ])
highlights: [] # A brief list of highlights to be shown on the student's profile, represented as an array of strings. Can be empty. (e.g., [ "7-time Super Bowl Champion", "Summa Cum Laude" ])
location: "" # The student's general geographic location (e.g., "Lawrenceville, GA").
```

### The following variables are **optional** for each student profile:
> NOTE: If you are not utilizing an optional variable please remove it or comment the line out.

```yaml
website: "" # The student's personal website link, if any (e.g., "https://mysite.com").
git: "" # The student's public git link, compatible with any provider/self-hosted configuration (e.g., "https://github.com/cgunay").
linkedin: "" # The student's LinkedIn profile link, if any (e.g., "https://linkedin.com/firstname-lastname").
x: "" # The student's X profile link, if any (e.g., "https://x.com/username").
instagram: "" # The student's Instagram profile link, if any (e.g., "https://instagram.com/username").
facebook: "" # The student's Facebook profile link, if any (e.g., "https://facebook.com/username").
```

#### ⚠️ Important Notes **(Images)**: ⚠️

- All images relating to a student's profile should be stored in `/assets/img/students/`.
- All image filenames should match the value included in the front matter **exactly**.
- Recommended size: `500px x 500px`, square aspect ratio

---

## Where Student Info is Used 🪧

Student data will be used in:

- Project pages
- Student directory
- Search and filters

---

## Editing or Adding Students 🚧

- To add a new student:
    1. Create a new Markdown file in `/_students/all/` named `FirstName_LastName.md` (if a student with your name already exists, add a number after your name, like `FirstName_LastName_2.md`).
    2. Fill in the required front matter, at minimum.
    3. Upload the corresponding photo to `/assets/img/students/`.

- To update a student:
    1. Edit their `.md` file.
    2. Replace or update their `logo` and `header` in the same directory, if needed.

## Tips 🤝

- See existing student profiles for reference.
- Keep the values in `highlights` and `skills` short and professional.
- Use full URLs for all links (include `https://`, etc.).
- Avoid duplicate filenames.
- Commit student picture files alongside their `.md` profile.

#### ⚠️ Important Notes: ⚠️

- See [Student_Template.template.md](Student_Template.template.md) for a complete example.

---

## Related 🔗

- `/_projects/` - where students may be referenced as contributors
- `/assets/img/students/` - all pictures relating to all students
- `/_layouts/student_profile_new.html` - template defining the student profile page's layout and content
