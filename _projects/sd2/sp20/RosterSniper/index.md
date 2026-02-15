---
layout: project_page
title: "Roster Sniper"
date: 2020-04-22 14:00:00
categories: itec3870 create
collection: itec3870_sp20
sponsor_key: [ "cengiz-gunay", "binh-tran" ]
project_key: "roster-sniper"
semester_key: "sp20"

phrase: "Notifies you for openings in full courses"
tech: [ python, django, html/css, mysql ]
screencast-streamable: s/ndkddh/ojasn
cohort: "Thinking Code"
members: "Thinking Code: Ryan Cosentino and Shaun Mitchell"
client: "GGC IT faculty, [Dr. Binh Tran](https://www.ggc.edu/about-ggc/directory/binh-tran)"
description: "Have you ever found a course which matches your schedule perfectly only to realize it's run out of seats? Say goodbye to checking banner everyday for weeks and hello to Roster Sniper! Our website helps students track courses by sending email notifications once a particular course becomes available. Students are able to create accounts, login and logout, search for and track courses, and manage notifications through our easy to use web application developed with Django. Course data is stored in a MySQL database and is updated periodically by scraping data from banner."
logo-full: flyer-roster-sniper.png
logo-thumb: thumb-flyer-roster-sniper.png
demo-url: https://rostersniper.com/
repo-url: https://github.com/soft-eng-practicum/ggc-coursicle
course_key: sd2
student_ids: [ "Ryan-Cosentino", "Shaun-Mitchell" ]
---

Detailed information about the {{ page.title }} development process.

<!-- lightgallery -->
<script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
<script src="https://cdn.jsdelivr.net/lightgallery/1.3.7/js/lightgallery.min.js">
</script>
<script src="https://cdn.jsdelivr.net/g/lg-zoom"></script>

<script type="text/javascript">

    $(document).ready(function() {

        $("body").lightGallery({

            zoom: true,
            selector: 'a#lightgallery',
            selectWithin: 'body'

        });

    });

</script>

[ggc]: http://www.ggc.edu
[gunay-ggc]: http://www.ggc.edu/about-ggc/directory/cengiz-gunay
[doloc-ggc]: http://www.ggc.edu/about-ggc/directory/anca-doloc-mihu
