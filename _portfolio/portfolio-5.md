---
title: "Tableau: Mapping and Visualising Sydney's Data"
collection: portfolio
header:
  teaser: Capture.JPG
--- 

To evaluate how I am responding to my exercise routine, I needed an app that could collect both quantitative and qualitative data from each workout. I wanted a tracker that could collect information on: 
* Measurements like weight
* What exercises I have done in each workout
* How many sets and reps per exercise
* Qualitative comments for each set

I first gave Excel a crack, but found this to be far too laborious and ineffecive as each set would need its own row. This meant that while I would be able to include any qualitative comments I had for that set, I would also have to repeat the metadata (the date etc.) multiple times per workout. It also meant that the dataset produced was messy and visualising change in metrics across time was more difficult than necessary. 

Instead, I turned to Python to design my own bespoke solution using an SQLite relational database and a Flask web app for the UI. As you can see below, I can enter workout information through the form and view past workouts in the history tab, while also keeping my data secure by saving it locally. Their are also two charts in the history tab that visualise change in measurements over time, and change in Estimated 1 Rep Max over time using the Epley formula. 

