---
layout: main_page
permalink: /sponsors/browse
title: "Browse All Institutional Participants"
---
<section class = "browse-body mt-5">
    {% assign cats = "" | split: "," %}
    {% for org in site.sponsors %}
        {% unless org.path contains "browse.md"
            or org.path contains "index.md"
            or org.path contains "template.md" %}
            <div class="outer-div">
              <div class="inner-div">
                <div class="front">
                  <div class="front__bkg-photo"></div>
                  <div class="front__face-photo" style="background-image: url('/assets/img/sponsors/{{ org.logo }}'); background-repeat: no-repeat;"></div>
                  <div class="front__text">
                    <h3 class="front__text-header">{{ org.title }}</h3>
                    <br>
                    <p class="front__text-para"><i class="fas fa-solid fa-graduation-cap front-icons" style = "color: #00704a;"></i>{{ org.major }}</p>
                    <span class="front__text-hover">Hover to Learn More!</span>
                  </div>
                </div>
                <div class="back">
                  <div class="social-media-wrapper">
                    <a href="{{ org.url }}" class="social-icon"><i class="bc-fab fas fa-solid fa-address-card" aria-hidden="true"></i></a>
                    {% if org.git %}
                    <a href="{{ org.git }}" class="social-icon"><i class="bc-fab fab fa-github-square" aria-hidden="true"></i></a>
                    {% endif %}
                    {% if org.linkedin %}
                    <a href="{{ org.linkedin }}" class="social-icon"><i class="bc-fab fab fa-linkedin-square" aria-hidden="true"></i></a>
                    {% endif %}
                    {% if org.x %}
                     <a href="{{ org.x }}" class="social-icon"><i class="bc-fab fab fa-twitter-square" aria-hidden="true"></i></a>
                    {% elsif org.instagram %}
                     <a href="{{ org.instagram }}" class="social-icon"><i class="bc-fab fab fa-instagram" aria-hidden="true"></i></a>
                    {% endif %}
                  </div>
                </div>
              </div>
            </div>
        {% endunless %}
    {% endfor %}

</section>
