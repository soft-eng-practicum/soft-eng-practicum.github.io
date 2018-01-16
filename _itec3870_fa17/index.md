---
layout: projects
title:  "Fall 2017 Software Development 2 Course Projects"
date:   2017-11-30 14:00:00
categories: itec3870 create
collection: itec3870_fa16
photos:
- IMG_20171130_140740485.jpg
- IMG_20171130_140750901.jpg
- IMG_20171130_140755482_HDR.jpg
- IMG_20171130_140800295.jpg
- IMG_20171130_141522309_HDR.jpg
- IMG_20171130_141538247.jpg
- IMG_20171130_141709149.jpg
- IMG_20171130_141725331.jpg
- IMG_20171130_141734571.jpg

projects:
- name: LipidLator
  title: "formula, molar mass, abbreviation"
  demo-url: https://play.google.com/store/apps/details?id=teamtriplej.com.lipidlator21&hl=en
  members: "Team TripleJ: Jessica Sok, Joseph Tsegaye, Jose Moreno"
  client: Dr Jon Rees
  client-url: http://www.ggc.edu/about-ggc/directory/jon-rees
  description: "Lipid-Lator is a mobile application for the Android platform currently available on the Google Play Store. This application was designed for Dr. Jon Rees who needs this application to be able to perform daily tasks at his current employment. Due to the nature of the app, it can also be of use to many people around the world as it is a utility application. With Lipid-Lator, one is able to calculate the abbreviation, formula, and monoisotopic molar mass of over 97 million different combinations of lipids. All of the data is completely offline so there is no need for any internet connection at all. This application can and will help many chemists easily and rapidly find the information they need."
  tech: "Android app using Android Studio, works offline, calculates molar masses of over 97 million different combinations of options"
  logo-full: images/flyer-LipidLator.png
  logo-thumb: images/thumb-flyer-LipidLator.png
  screencast-youtube: B8mQj-wBI9A

- name: "GGC Maps (1)"
  title: "New features: Event listing, safety mode, predictive search"
  members: "Team Adventuras: Bryan Yeap, Matt Soucy, Robert Westervelt, Nilaja Williams"
  client: "Assistant Professor in Arts Catherine Moore, students Michael Deiters and David Rivera Rocha"
  description: "Predictive Search Functionality: Provides multiple solutions based on current input by the user. User input can be at any place within the provided solutions. Safety Mode: Provides an overlay of safety related items. Items include AEDs, Fire Extinguishers, Fire Alarms, Trauma Kits, and Safety Shelters. Event Information Tab: Provides event information related to events held on GGC campus. Event list changes depending on the building being accessed. Provides events up to 2 weeks ahead of current date. Functional Service Worker: Checks all cache versions in the users browser and deletes any old versions. Additional files for cache. Updated Building Legend: Add locations and building labels. Turns off if parking legend is on, vice versa."
  tech: "Single page application, HTML/CSS, Sass, Javascript, Grunt, SVG, Selenium and BrowserStack testing"
  logo-full: images/flyer-ggcmaps-adventuras-new.jpg
  logo-thumb: images/thumb-flyer-ggcmaps-adventuras-new.jpg
  screencast-youtube: xVOkgmRYMaY

- name: "GGC Maps (2)"
  title: "New features: Updated parking lots and search building 3000 rooms"
  members: "Team NavBenders: Maryam Najiarani, Richard A Williams Jr, Joseph Pelletier"
  client: "Assistant Professor in Arts Catherine Moore, students Michael Deiters and David Rivera Rocha"
  description: "Continuing previous project. Search Function properly works in all buildings and now for 3000 building. An updated look to all parking lots with accurate handicap, staff/faculty parking, etc. New updated legend for all parking lots."
  tech: "Single page application, HTML/CSS, Sass, Javascript, Grunt, SVG, Selenium and BrowserStack testing"
  logo-full: images/flyer-ggcmaps-navbenders.jpg
  logo-thumb: images/thumb-flyer-ggcmaps-navbenders.jpg
  screencast-vimeo: 245831389 

- name: SmartVid
  title: "Make learning fun by giving students the best viewing & learning experience"
  members: "The Brogrammers"
  client: Dr Shelby Fencil Shuler
  client-url: http://www.ggc.edu/about-ggc/directory/shelby-shuler
  description: "SmartVid is an educational platform designed to enable professors to create a more interactive learning experience by uploading videos to be viewed by their active classes. The benefit of SmartVid is that the videos created by the professors will be tailored toward the classes they teach, providing a personalized resource where students can access the material their professors are teaching. Additionally, professors will be able to monitor the activity of their students via progress bars showing how much of the video (and which part) the students have viewed. This will be coupled with periodically introduced quizzes as the video is viewed, designed by the professor(s). A professor would then be able to decide what action would be taken if the student fails the quiz (IE: the student must re-watch the video, the quiz must be immediately retaken, etc.)."
  tech: "PHP, Bootstrap, HTML/CSS, Javascript"
  logo-full: images/flyer-smartvid.jpg
  logo-thumb: images/thumb-flyer-smartvid.jpg
  screencast-youtube: l2tCRhr-2lY

---

These projects were developed during the ITEC 3870 Software
Development 2 course taught by [Dr. Cengiz Gunay][gunay-ggc] in the
Fall 2017 semester by [Georgia Gwinnett College][ggc] students. Each
project was commissioned and supervised by a GGC professor who
provided the idea, requirements, and direction throughout the
semester. Final products were demonstrated and tested by other
students and faculty at the GGC CREATE symposium. Click on
titles to see their demo sites.

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

[ggc]:		http://www.ggc.edu
[gunay-ggc]: 	http://www.ggc.edu/about-ggc/directory/cengiz-gunay
