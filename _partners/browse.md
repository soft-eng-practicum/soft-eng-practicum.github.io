---
layout: main_page
title: "Browse All Institutional Participants"
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

<section class = "browse-body mt-3 section-team align-items-start" id = "card-list">
    {% for org in site.partners %}
        {% unless org.path contains "browse.md"
            or org.path contains "index.md"
            or org.path contains "template.md" %}
            {% assign courses = "" | split: "," %}
            {% for p in site.projects %}
                {% for k in p.sponsor_key %}
                    {% if k == org.sponsor_key %}
                        {% assign courses = courses | push: p.course_key %}
                    {% endif %}
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
                data-name="{{ org.title }}"
                data-type = "{{ org.sponsor_type }}"
                data-industry="{{ org.industry }}"
                data-course="{{ data }}"
            >
                <a href = "{{ org.url }}" class = "text-decoration-none d-block"
                    style = "height: 100%;">
                    <div>
                        <div class="single-person">
                            <div class="person-image">
                                {% if org.logo.size > 4 %}
                                    <img src="/assets/img/partners/{{ org.logo }}"
                                        alt="{{ org.title }}">
                                {% else %}
                                    <img src="/assets/img/partners/GGC.jpg"
                                        alt="{{ org.title }}">
                                {% endif %}
                                <span class="icon">
                                    <i class="fa fa-code"></i>
                                </span>
                            </div>
                            <div class="person-info">
                                <h3 class="full-name">{{ org.title }}</h3>
                                <span class="speciality">{{ org.sponsor_type }}</span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        {% endunless %}
    {% endfor %}
</section>
