# The `_partners` Collection 🤝

This directory stores individual partner profile pages used across the website
for attribution, recognition, and linking to project contributions.

All non-student participants of a project
(faculty advisor, non-profit organization, etc.) should be added to this
collection.

Each partner is represented by a single Markdown file containing YAML front
matter and optional content.

---

## Structure 📁

1. Each file should be named using the format `FirstName_LastName.md` or `Organization_Name.md`.
2. There should be no sub-directories.

---

## Front Matter

Please consult the
[relevant documentation](https://jekyllrb.com/docs/front-matter/) for more
details about front matter.

The following variables are **required** for each partner profile:

```yaml
layout: sponsor_profile # No other value should be given.
title: "" # The full name of the partner (individual or organization) written in plain English (e.g., "Charity Organization" or "Dr. Cengiz Gunay").
sponsor_key: # The unique value that corresponds to this partner, written without any quotation marks, in `kebab-case` (e.g., partner-name).
description: "" # A short, professional description of the organization. Used in project pages.
logo: "" # The full filename of the profile picture to be used for the partner's profile.
header: "" # The full filename of the header picture to be used for the partner's profile.
website: "" # The partner's website link (e.g., https://ggc.edu).
industry: "" # The industry or role in which the partner operates (e.g., "Inpatient Care" or "Associate Professor, I.T.").
sponsor_type: "" # The role the partner played in the project (e.g., "Client", "Faculty Administrator", or "Expert Consultant").
location: "" # The partner's general geographic location (e.g., "Lawrenceville, GA").
contact_name: "" # The preferred name or name of the contact for this partner (e.g., "Dr. Gunay" or "Tom Brady").
contact_email: "" # The preferred email for contacting the sponsor.
skills: [] # A brief list of skills to be highlighted on the partner's profile, represented as an array of strings. Can be empty. (e.g., [ "Robotics", "Neural Nets" ])
highlights: [] # A brief list of highlights to be shown on the partner's profile, represented as an array of strings. Can be empty. (e.g., [ "Voted Best Business, 2024", "Voted Best Customer Service, 2016" ])
```

The following variables are **optional** for each partner profile:

```yaml
git: "" # The partner's public git link, compatible with any provider/self-hosted configuration (e.g., "https://github.com/cgunay").
linkedin: "" # The partner's LinkedIn profile link, if any (e.g., "https://linkedin.com/firstname-lastname").
x: "" # The partner's X profile link, if any (e.g., "https://x.com/username").
instagram: "" # The partner's Instagram profile link, if any (e.g., "https://instagram.com/username").
facebook: "" # The partner's Facebook profile link, if any (e.g., "https://facebook.com/username").
```

#### ⚠️ Important Notes: ⚠️

- All pictures relating to a partner's profile should be stored in `/assets/img/partners/`.
- All filenames should match the value included in the front matter **exactly**.
- Recommended size: `500px x 500px`, square aspect ratio

---

## Where partner Info is Used 🪧

Partner data will be used in:

- Project pages
- Partner directory
- Search and filters

---

## Editing or Adding partners 🚧

- To add a new partner:
    1. Create a new Markdown file in `/_partners/` named `FirstName_LastName.md`.
    2. Fill in the required front matter, at minimum.
    3. Upload the corresponding photo to `/assets/img/partners/`.

- To update a partner:
    1. Edit their `.md` file.
    2. Replace or update their `logo` and `header` in the same directory, if needed.

## Tips 🤝

- See existing partner profiles for reference.
- Keep the values in `highlights` and `skills` short and professional.
- Use full URLs for all links (include `https://`, etc.).
- Avoid duplicate filenames.
- Commit partner picture files alongside their `.md` profile.

#### ⚠️ Important Notes: ⚠️

- See `Partner_Template.template.md` for a complete example.

---

## Related 🔗

- `/_projects/` - where partners may be referenced as contributors
- `/assets/img/partners/` - all pictures relating to all partners
- `/_layouts/partner_profile.html` - template defining the partner profile page's layout and content
