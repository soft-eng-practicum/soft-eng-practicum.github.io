---
layout: main_page
title: About the Practicum Site
permalink: /about/
---

This is an educational site to exhibit student software project demos
from various schools in the Metro Atlanta region. The site is
maintained by [{{ site.author_name }}]({{ site.author_link }})
from [Georgia Gwinnett College](http://www.ggc.edu/). Many of the
projects were supervised by other faculty members or external
collaborators of the organization.

<!--## Sponsors-->

<div class="sponsor-img-section" style = "margin-bottom: 25%;">
    <!--<div class="sponsor-img-float"><a href="http://github.com"><img src="/assets/github-Octocat.png"></a></div>-->
    <!--<div class="sponsor-img-float"><a href="http://bitbucket.com"><img src="/assets/Atlassian-horizontal-blue-rgb.svg"> <img src="/assets/Jira Software-blue.svg"> <img src="/assets/Bitbucket-blue.svg"></a></div>-->
    <!--<div class="sponsor-img-clear"><a href="https://zenhub.com"><img src="https://raw.githubusercontent.com/ZenHubIO/support/master/zenhub-badge.png"></a></div>-->
</div>

## Credits
The original Jekyll code for the website was authored by [Dr. Cengiz Gunay](/sponsors/Cengiz_Gunay.html).  
Colorlib template adopted by [Nilaja Williams](https://www.linkedin.com/in/nilajawilliams/), and further developed by Dr. Gunay.  
[Katherine Balsley, MFA](https://www.ggc.edu/about-ggc/directory/katherine-balsley) produced the video on the home page.  
Website overhaul (🌟 you are here!) by [Leonardo Motta](/students/Leonardo_Motta.html).  
  
  
🎯 *We would like to give a very special thank you to all of the project clients who devoted time to work with the students!*  

<div class ="home_grid" style = "align-items: flex-start; margin-top: 25%;">

    <p>
        <div class = "ilb" style = "width: 100%;">
        <button class="ggc-btn-d" type="button"
            style = " width: 100%;"
            data-toggle="collapse"
            data-target="#pinned-accordion"
            aria-expanded="false"
            aria-controls="pinned-news">
            <span class = "text">
                Pinned
            </span>
        </button>
        </div>
    </p>
    <div class="collapse"
        id="pinned-accordion"
        style = "width: 80%; margin: 0 auto;">

        {% assign all_posts = site.categories["Pinned"]
            | sort: "date", "first" | reverse %}
        {% assign sorted_posts = "" | split: "," %}
        {% assign sorted_modified = "" | split: "," %}

        {% for post in all_posts %}
            {% if post.last_modified %}
                {% assign testDate = site.time
                    | date: "%s" %}
                {% assign cutoff = testDate
                    | minus: 2592000 %}
                {% assign testPost = post.last_modified
                    | date: "%s" | minus: 0 %}
                {% if testPost >= cutoff %}
                    {% assign sorted_modified = sorted_modified
                        | push: post %}
                {% else %}
                    {% assign sorted_posts = sorted_posts
                        | push: post %}
                {% endif %}
            {% else %}
                {% assign sorted_posts = sorted_posts
                    | push: post %}
            {% endif %}
        {% endfor %}

        {% assign sorted_modified = sorted_modified
            | sort: "last_modified", "first" | reverse %}

        {% if sorted_modified.size > 0 %}
        <div class="card card-body">
            <p style = "text-align: center;"><em>Recently updated:</em></p>
            {% for post in sorted_modified %}
                {% if post.url %}
                <a href = "{{ post.url }}">{{ post.title }} - <i>{{ post.last_modified | date_to_string: "ordinal", "US" }} (updated)</i></a>
                <br>
                {% endif %}
            {% endfor %}
        </div>

        <br>
        {% endif %}

        {% if sorted_posts.size > 0 %}
            <div class="card card-body">
            {% for post in sorted_posts %}
                {% if post.url %}
                <a href = "{{ post.url }}">{{ post.title }} - <i>{{ post.date | date_to_string: "ordinal", "US" }}</i></a>
                <br>
                {% endif %}
            {% endfor %}
            </div>
        {% endif %}
    </div>

    {% comment %}
        Alphabetize categories before displaying them
    {% endcomment %}

    {% assign cats = "" | split: "," %}
    {% for category in site.categories %}
        {% assign name = category | first %}
        {% assign cats = cats | push: name %}
    {% endfor %}
    {% assign cats = cats | sort %}
    {% for category in cats %}

        {% assign name = category %}
        {% if name != "Pinned" %}

            <hr style = "border: 0; border: 1px solid green; width: 15%; text-align: center; margin: 2% auto;">

            <p>
                <div class = "ilb" style = "width: 100%;">
                <button class = "ggc-btn-d" type="button"
                    style = " width: 100%;"
                    data-toggle = "collapse"
                    data-target = "#{{name | replace: ' ', '-'}}-accordion"
                    aria-expanded = "false"
                    aria-controls = "{{ name | replace: ' ', '-' }}-news">
                    <span class = "text">
                        {{ name }}
                    </span>
                </button>
                </div>
            </p>
            <div class="collapse"
                id="{{ name | replace: ' ', '-' }}-accordion"
                style = "width: 80%; margin: 0 auto;">

                {% assign all_posts = site.categories[name]
                    | sort: "date", "first" | reverse %}
                {% assign sorted_posts = "" | split: "," %}
                {% assign sorted_modified = "" | split: "," %}

                {% for post in all_posts %}
                    {% if post.last_modified %}
                        {% assign testDate = site.time
                            | date: "%s" %}
                        {% assign cutoff = testDate
                            | minus: 2592000 %}
                        {% assign testPost = post.last_modified
                            | date: "%s" | minus: 0 %}
                        {% if testPost >= cutoff %}
                            {% assign sorted_modified = sorted_modified
                                | push: post %}
                        {% else %}
                            {% assign sorted_posts = sorted_posts
                                | push: post %}
                        {% endif %}
                    {% else %}
                        {% assign sorted_posts = sorted_posts
                            | push: post %}
                    {% endif %}
                {% endfor %}

                {% assign sorted_modified = sorted_modified
                    | sort: "last_modified", "first" | reverse %}

                {% if sorted_modified.size > 0 %}
                <div class="card card-body">
                    <p style = "text-align: center;"><em>Recently updated:</em></p>
                    {% for post in sorted_modified %}
                        {% if post.url %}
                        <a href = "{{ post.url }}">{{ post.title }} - <i>{{ post.last_modified | date_to_string: "ordinal", "US" }} (updated)</i></a>
                        <br>
                        {% endif %}
                    {% endfor %}
                </div>

                <br>
                {% endif %}

                {% if sorted_posts.size > 0 %}
                    <div class="card card-body">
                    {% for post in sorted_posts %}
                        {% if post.url %}
                        <a href = "{{ post.url }}">{{ post.title }} - <i>{{ post.date | date_to_string: "ordinal", "US" }}</i></a>
                        <br>
                        {% endif %}
                    {% endfor %}
                    </div>
                {% endif %}
            </div>

        {% endif %}

    {% endfor %}
    <hr style = "border: 0; border: 1px solid green; width: 15%; text-align: center; margin: 2% auto;">

</div>
