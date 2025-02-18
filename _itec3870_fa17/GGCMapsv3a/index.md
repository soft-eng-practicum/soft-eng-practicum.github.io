---
layout: project-page
title: "GGC Maps v3a"
date: 2017-11-30 14:00:00
categories: itec3870 create
collection: itec3870_fa17
photos:
- 24960882688_1b03c40551_o.jpg
- 37946694695_60c8d9a787_o.jpg
- 24960907228_4be8082c9e_o.jpg
- 24960919378_06c0ed8ebe_o.jpg
- 24960919508_6ff7c05418_o.jpg
- 24960952738_e068307f20_o.jpg
- IMG_20171130_140740485.jpg
- IMG_20171130_140750901.jpg
- IMG_20171130_140755482_HDR.jpg
- 27057157559_358dbceee0_o.jpg
- 27057246329_881b8cf4af_o.jpg
- 38117417614_13af5d072f_o.jpg

phrase: "New features: Event listing, safety mode, predictive search"
demo-url: https://soft-eng-practicum.github.io/ggcmaps/
members: "Team Adventuras: Bryan Yeap, Matt Soucy, Robert Westervelt, Nilaja Williams"
client: "Assistant Professor in Arts Catherine Moore, students Michael Deiters and David Rivera Rocha"
description: "Predictive Search Functionality: Provides multiple solutions based on current input by the user. User input can be at any place within the provided solutions. Safety Mode: Provides an overlay of safety related items. Items include AEDs, Fire Extinguishers, Fire Alarms, Trauma Kits, and Safety Shelters. Event Information Tab: Provides event information related to events held on GGC campus. Event list changes depending on the building being accessed. Provides events up to 2 weeks ahead of current date. Functional Service Worker: Checks all cache versions in the users browser and deletes any old versions. Additional files for cache. Updated Building Legend: Add locations and building labels. Turns off if parking legend is on, vice versa."
tech: "Single page application, HTML/CSS, Sass, Javascript, Grunt, SVG, Selenium and BrowserStack testing"
logo-full: flyer-ggcmaps-adventuras-new.jpg
logo-thumb: thumb-flyer-ggcmaps-adventuras-new.jpg
screencast-youtube: xVOkgmRYMaY
repo-url: https://github.com/soft-eng-practicum/ggcmaps
---

Detailed development information.

<!-- lightgallery -->
<script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
<script src="https://cdn.jsdelivr.net/lightgallery/1.3.7/js/lightgallery.min.js"></script>
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
