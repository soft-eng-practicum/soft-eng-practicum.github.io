---
layout: main_page
collection: projects
title: "Innovating Beyond the Classroom: Student-Led Software & STEM Projects"
---
<h4><em>Explore our showcase of transformative software development internships—from mobile fitness apps to chemistry lab platforms. This directory honors past achievements, connects current collaborators, and inspires the future of tech-driven innovation.</em></h4>

<br>

<div class = "d-flex justify-content-between mx-1">
    <div class="dropdown grow-x">
        <a class="btn btn-primary bg-gradient border-0 dd-arrow px-3" href="#"
            role="button" id="dropdownMenuLink" data-bs-toggle="dropdown"
            aria-expanded="false"
            style = "border-radius: 8px; font-size: 16px;">
            🚀 Explore Projects
        </a>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            {% assign sub_collections = "" | split: "," %}
            {% for p in site.projects %}
                {% assign sub_collections = sub_collections
                    | push: p.course_key %}
            {% endfor %}
            {% assign sub_collections = sub_collections | uniq %}
            {% for key in sub_collections %}
                <li><a class="dropdown-item" href="{{ key }}/">{{ key | upcase }}</a></li>
            {% endfor %}
        </ul>
    </div>
    <div class="grow-x">
        <a class="btn btn-primary bg-gradient border-0 px-3" href="/students/browse"
            role="button" style = "border-radius: 8px; font-size: 16px;">
            👩‍💻 Meet the Students
        </a>
    </div>
    <div class="grow-x">
        <a class="btn btn-primary bg-gradient border-0 px-3" href="/partners/browse"
            role="button" style = "border-radius: 8px; font-size: 16px;">
            🤝 Meet Our Partners
        </a>
    </div>
</div>

<br>

#### Where Passion Meets Practical Impact
<br>

This directory highlights internship projects created by students in software development and adjacent STEM fields. These real-world experiences are more than academic exercises—they’re opportunities for students to collaborate with partners, solve tangible problems, and build products with lasting impact.

Each project featured here tells a story of innovation, mentorship, and the technical talent emerging from our college.
<br>
<br>

#### Student Work That Speaks for Itself
<br>

- 🧬 “MoleCalc” – A chemistry simulation tool to visualize molecular reactions.
- 🏋️ “FitTrack Pro” – A mobile fitness tracker using real-time biometric data.
- 📊 “DataDash” – A dashboard for visualizing environmental sensor data.

<div class = "d-flex justify-content-center my-5">
    <div class="dropdown grow-x">
        <a class="btn btn-primary bg-gradient border-0 dd-arrow px-3" href="#"
            role="button" id="dropdownMenuLink" data-bs-toggle="dropdown"
            aria-expanded="false"
            style = "border-radius: 8px; font-size: 16px;">
            🚀 Explore Projects
        </a>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            {% assign sub_collections = "" | split: "," %}
            {% for p in site.projects %}
                {% assign sub_collections = sub_collections
                    | push: p.course_key %}
            {% endfor %}
            {% assign sub_collections = sub_collections | uniq %}
            {% for key in sub_collections %}
                <li><a class="dropdown-item" href="{{ key }}/">{{ key | upcase }}</a></li>
            {% endfor %}
        </ul>
    </div>
</div>
<br>

#### Students & Mentors Behind the Code
<br>

Behind every project is a student—or team—committed to learning, building, and delivering. Explore profiles of student developers, STEM collaborators, and faculty mentors who guide and support these dynamic experiences.

Whether you're scouting talent or celebrating past success, this section offers a glimpse into the minds shaping tomorrow’s innovations.

<div class = "d-flex justify-content-center my-5">
    <div class="grow-x">
        <a class="btn btn-primary bg-gradient border-0 px-3" href="/students/browse"
            role="button" style = "border-radius: 8px; font-size: 16px;">
            👩‍💻 Meet the Students
        </a>
    </div>
</div>
<br>

#### Built in Collaboration with Industry & Research Leaders
<br>

From local startups to national research labs, our partners fuel the creativity and rigor behind every internship. Their mentorship provides students with crucial feedback, industry insights, and real-world stakes.

We’re proud to showcase our partners—past and present—who believe in nurturing the next generation of tech talent.

<div class = "d-flex justify-content-center my-5">
    <div class="grow-x mx-auto">
        <a class="btn btn-primary bg-gradient border-0 px-3" href="/partners/browse"
            role="button" style = "border-radius: 8px; font-size: 16px;">
            🤝 Meet Our Partners
        </a>
    </div>
</div>
<br>

> “I worked with a student team on a chemistry learning system, and I was blown away by the technical polish and professionalism of our very own Grizzlies! I'm proud to have been part of a project that has the potential to have a profound impact on the wider science community.”
> — Dr. Grizzly, Assistant Professor of Chemistry

>“This internship enabled me to ship real code that solved a problem for real users. I gained more experience in 12 weeks than I did in two semesters.”
> — Grizzly Student, Software Development Intern

#### Interested in Collaborating?
<br>

Whether you’re a prospective partner with a project idea or a student eager to join the next cohort, we’d love to hear from you. Let’s build something remarkable together.

<div class = "d-flex justify-content-center my-5">
    <div class="grow-x mx-auto">
        <a class="btn btn-primary bg-gradient border-0 px-3" href="mailto:cgunay@ggc.edu?subject=Partnership Inquiry"
            role="button" style = "border-radius: 8px; font-size: 16px;">
            🏢 Become a Partner
        </a>
    </div>
    <div class="grow-x mx-auto">
        <a class="btn btn-primary bg-gradient border-0 px-3" href="mailto:cgunay@ggc.edu?subject=Internship Opportunities"
            role="button" style = "border-radius: 8px; font-size: 16px;">
            📚 Become an Intern
        </a>
    </div>
</div>
