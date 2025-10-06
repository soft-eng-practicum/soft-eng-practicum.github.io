---
layout: main_page
title: "Browse All Student Participants"
---
{% include search_bar.html %}

<div class = "mt-5 mx-auto">
    <nav aria-label="Page navigation">
        <ul class="pagination justify-content-center" id="pagination">
            <li class="page-item">
                <a class="page-link" href="#" tabindex="-1">Previous</a>
            </li>
            <li class="page-item" id="next-page">
                <a class="page-link" href="#">Next</a>
            </li>
        </ul>
    </nav>
</div>

<section class = "browse-body mt-5 section-team align-items-start" id = "card-list">
    {% for student in site.students %}
        {% unless student.title contains "Browse" %}
            {% assign courses = "" | split: "," %}
            {% for k in student.project_key %}
                {% assign tmp = site.projects | where: "project_key", k %}
                {% for c in tmp %}
                    {% assign courses = courses | push: c.course_key %}
                {% endfor %}
            {% endfor %}
            {% assign courses = courses | uniq %}
            {% assign data = "" %}
            {% for c in courses %}
                {% assign data = data | append: c | append: "-" %}
                {% if c == "sd2" %}
                    {% assign data = data | append: "soft-dev-2-software-development-2-software development 2-" %}
                {% endif %}
            {% endfor %}
            {% assign size = data.size | minus: 1 %}
            {% assign data = data | slice: 0, size %}
            <div class="col-sm-6 col-lg-4 col-xl-3 searchable"
                data-name="{{ student.title }}"
                data-role="{{ student.project_role }}"
                data-major="{{ student.major }}"
                data-class="{{ student.graduation_year }}"
                data-course="{{ data }}"
            >
                <a href = "{{ student.url }}" class = "text-decoration-none d-block"
                    style = "height: 100%;">
                    <div>
                        <div class="single-person">
                            <div class="person-image">
                                {% if student.logo.size > 4 %}
                                    <img src="/assets/img/students/{{ student.logo }}"
                                        alt="{{ student.title }}">
                                {% else %}
                                    <img src="/assets/img/students/defaultProfile.jpg"
                                        alt="{{ student.title }}">
                                {% endif %}
                                <span class="icon">
                                    <i class="fa fa-code"></i>
                                </span>
                            </div>
                            <div class="person-info">
                                <h3 class="full-name">{{ student.title }}</h3>
                                <span class="speciality">{{ student.project_role }}</span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        {% endunless %}
    {% endfor %}
</section>
