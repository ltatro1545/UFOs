# UFO Sightings
## Overview
The purpose of this project was to create a responsive HTML page that houses UFO sighting data and allows the reader to filter the data based on a few parameters. A JavaScript app was written to build the table that holds the data on the webpage. Each individual row of data did not need to be written into the HTML code because the JS app used a forEach loop that created a new table row for each object in the array of data. Additionally, the JS app has a function to update the table filters whenever the user clicks anywhere on the page - a "filter search" button does not otherwise exist. A CSS file was used to enhance the visuals on the page by changing the color of the body text and adding a NASA image to the jumbotron.

## Results
The top half of the webpage contains text positing the possibility of alien existence to the inquisitive mind, and addresses differing opinions held by other NPC's we have worked for during this data bootcamp's term. Fortunately, the interactive piece of the webpage is easy to identify and to manipulate. Below is a labeled image of the webpage.
![2022-01-15](https://user-images.githubusercontent.com/92493572/149641380-be959dd7-ca40-4ab6-8a1a-b658f48e0bbe.png)

To change the data, the user needs to input their search criteria into the data filter section. The search parameters must be an exact match to the data the user wishes to display; to search for Arizona, type "az" into the State search. It should be noted that the data inside the duration field is not uniform across all sightings. It is for this reason that it is not possible to filter based on duration, as the filter method is using verbatim parameters. Below are example images to stress the importance in having parameters match the data's format.
![2022-01-15 (1)](https://user-images.githubusercontent.com/92493572/149641829-3c6198a4-2ca4-4663-aca4-009e3c568d9e.png)
![2022-01-15 (2)](https://user-images.githubusercontent.com/92493572/149641722-618d9d33-928b-4e18-8689-0ed3396d3b56.png)

## Summary
The webpage functions as intended, all while being visually appealing, though it has some shortcomings. The site is unable to handle multiple filter parameters for each section. For instance, it may be valuable to users to filter for multiple states, perhaps even an entire region. Additionally, an interactive Google API heatmap or marker map displaying all the UFO sightings could assist in users digesting messy table data in a meaningful way. 
