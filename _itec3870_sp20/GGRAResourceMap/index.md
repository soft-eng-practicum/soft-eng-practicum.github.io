---
layout: project-page
title: "GGRA Resource Map"
date: 2020-04-22 14:00:00
categories: itec3870 create
collection: itec3870_sp20

phrase: "For updating and displaying locations and information"
tech: [ javascript, jquery, html/css, .netcore, c#, mssql, rest ]
screencast-youtube: XHLFTyXzt_4
members: "Team AmbigiousLarks: Khang Ho, Joshua Sales, and an anonymous member"
client: "Brendan Spaar, [Greater Gwinnett Reentry Alliance](https://www.gwinnettreentry.org/)"
demo-url: https://ggra-development.azurewebsites.net/larkMap.html
description: "Our group is continuing the development of a web app which assists ex offenders reintegrate into society listing public organizations and plotting them on an interactive map. The user may select an organization to view details: address, phone number, description and see that organization's location on a Google map. An administrator will be able to add new organizations to an SQL database through a web interface. Our product was accepted by the GGRA organization to be [integrated into their website](https://www.gwinnettreentry.org/map/) at the end of the semester, and [showcased at their monthly meeting](https://youtu.be/uKt8GCaQ_YQ?t=958)."
logo-full: flyer-GGRA.png
logo-thumb: thumb-flyer-GGRA.png
repo-url: https://github.com/soft-eng-practicum/GGRAwebsite
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
