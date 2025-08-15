---
layout: main_page
title: "Browse All Student Participants"
---
{% include search_bar.html %}

{% comment %}
<section class = "browse-body mt-5" id = "card-list">
    {% assign cats = "" | split: "," %}
    {% for student in site.students %}
        {% unless student.title contains "Browse" %}
            <div class="outer-div"
                data-name="{{student.title}}"
                data-role="{{student.project_role}}"
                data-major="{{student.major}}"
                data-class="{{student.graduation_year}}"
            >
                <div class="inner-div">
                    <div class="front">
                        <div class="front__bkg-photo"></div>
                        {% if student.logo.size > 4 %}
                        <div class="front__face-photo" style="background-image: url('/assets/img/students/{{ student.logo }}'); background-repeat: no-repeat;"></div>
                        {% else %}
                        <div class="front__face-photo" style="background-image: url('/assets/img/students/defaultProfile.jpg'); background-repeat: no-repeat;"></div>
                        {% endif %}
                        <div class="front__text">
                            <h3 class="front__text-header">{{ student.title }}</h3>
                            <br>
                            <p class="front__text-para"><i class="fas fa-solid fa-graduation-cap front-icons" style = "color: #00704a;"></i>{{ student.major }}</p>
                            <span class="front__text-hover">Hover to Learn More!</span>
                        </div>
                    </div>
                    <div class="back">
                        <p class = "text-white fw-bold h5 badge bg-gradient">{{ student.title }}</p>
                        <br>
                        <div class="social-media-wrapper">
                            <a href="{{ student.url }}" class="social-icon"><i class="bc-fab fas fa-solid fa-address-card" aria-hidden="true"></i></a>
                            {% if student.git.size > 0 %}
                            <a href="{{ student.git }}" class="social-icon"><i class="bc-fab fab fa-github-square" aria-hidden="true"></i></a>
                            {% endif %}
                            {% if student.linkedin.size > 0 %}
                            <a href="{{ student.linkedin }}" class="social-icon"><i class="fa-brands fa-linkedin" aria-hidden="true"></i></a>
                            {% endif %}
                            {% if student.x.size > 0 %}
                            <a href="{{ student.x }}" class="social-icon"><i class="bc-fab fab fa-twitter-square" aria-hidden="true"></i></a>
                            {% elsif student.instagram.size > 0%}
                            <a href="{{ student.instagram }}" class="social-icon"><i class="bc-fab fab fa-instagram" aria-hidden="true"></i></a>
                            {% endif %}
                        </div>
                    </div>
                </div>
            </div>
        {% endunless %}
    {% endfor %}
</section>
{% endcomment %}

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

<br>
<br>

<nav aria-label="Page navigation">
    <ul class="pagination justify-content-end" id="pagination">
        <li class="page-item">
            <a class="page-link" href="#" tabindex="-1">Previous</a>
        </li>
        <li class="page-item" id="next-page">
            <a class="page-link" href="#">Next</a>
        </li>
    </ul>
</nav>
