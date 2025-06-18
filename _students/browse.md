---
layout: main_page
permalink: /students/browse
title: "Browse All Student Participants"
---
<section class = "browse-body mt-5">
    {% assign cats = "" | split: "," %}
    {% for student in site.students %}
        {% unless student.title contains "Browse" %}
            <div class="outer-div">
              <div class="inner-div">
                <div class="front">
                  <div class="front__bkg-photo"></div>
                  <div class="front__face-photo" style="background-image: url('/assets/img/students/{{ student.logo }}'); background-repeat: no-repeat;"></div>
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
                    {% if student.git %}
                    <a href="{{ student.git }}" class="social-icon"><i class="bc-fab fab fa-github-square" aria-hidden="true"></i></a>
                    {% endif %}
                    {% if student.linkedin %}
                    <a href="{{ student.linkedin }}" class="social-icon"><i class="bc-fab fab fa-linkedin-square" aria-hidden="true"></i></a>
                    {% endif %}
                    {% if student.x %}
                     <a href="{{ student.x }}" class="social-icon"><i class="bc-fab fab fa-twitter-square" aria-hidden="true"></i></a>
                    {% elsif student.instagram %}
                     <a href="{{ student.instagram }}" class="social-icon"><i class="bc-fab fab fa-instagram" aria-hidden="true"></i></a>
                    {% endif %}
                  </div>
                </div>
              </div>
            </div>
        {% endunless %}
    {% endfor %}

</section>
