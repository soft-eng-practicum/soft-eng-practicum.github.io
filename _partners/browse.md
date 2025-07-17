---
layout: main_page
title: "Browse All Institutional Participants"
---
{% include search_bar.html %}

<section class = "browse-body mt-5" id = "card-list">
    {% assign cats = "" | split: "," %}
    {% for org in site.partners %}
        {% unless org.path contains "browse.md"
            or org.path contains "index.md"
            or org.path contains "template.md" %}
            <div class="outer-div"
                data-name="{{org.title}}"
                data-type="{{org.sponsor_type}}"
                data-industry="{{org.industry}}"
            >
                <div class="inner-div">
                    <div class="front">
                        <div class="front__bkg-photo"></div>
                        {% if org.logo.size > 4 %}
                        <div class="front__face-photo" style="background-image: url('/assets/img/partners/{{ org.logo }}'); background-repeat: no-repeat;"></div>
                        {% else %}
                        <div class="front__face-photo" style="background-image: url('/assets/img/partners/GGC.jpg'); background-repeat: no-repeat;"></div>
                        {% endif %}
                        <div class="front__text">
                            <h3 class="front__text-header">{{ org.title }}</h3>
                            <br>
                            <p class="front__text-para"><i class="fas fa-star" style = "color: #efbf04; margin-right: 4px;"></i>{{ org.sponsor_type }}</p>
                            <span class="front__text-hover">Hover to Learn More!</span>
                        </div>
                    </div>
                    <div class="back">
                        <p class = "text-white fw-bold h5 badge bg-gradient">{{ org.title }}</p>
                        <br>
                        <div class="social-media-wrapper">
                            <a href="{{ org.url }}" class="social-icon"><i class="bc-fab fas fa-solid fa-address-card" aria-hidden="true"></i></a>
                            {% if org.git.size > 0 %}
                            <a href="{{ org.git }}" class="social-icon"><i class="bc-fab fab fa-github-square" aria-hidden="true"></i></a>
                            {% endif %}
                            {% if org.linkedin.size > 0 %}
                            <a href="{{ org.linkedin }}" class="social-icon"><i class="bc-fab fab fa-linkedin-square" aria-hidden="true"></i></a>
                            {% endif %}
                            {% if org.x.size > 0 %}
                            <a href="{{ org.x }}" class="social-icon"><i class="bc-fab fab fa-twitter-square" aria-hidden="true"></i></a>
                            {% elsif org.instagram.size > 0 %}
                            <a href="{{ org.instagram }}" class="social-icon"><i class="bc-fab fab fa-instagram" aria-hidden="true"></i></a>
                            {% endif %}
                        </div>
                    </div>
                </div>
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
