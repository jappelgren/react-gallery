# 2018 Japan Trip Photo Gallery

## Description

Duration: Project was built over the course of 2 days.

I built a photo album using React. This is my first attempt creating something with React and I was pleased with how well it went. The styling is a combination of vanilla css and components from Material UI. The first thing I did when I started the project was implement a database. The project was setup to store data on the server but I wanted to go the extra mile and make the data more permanent. I rewrote the get and put routes and implemented PG to talk to the database.

I wanted to make sure that the project looked appealing but wasn't overly styled as to take attention away from the photos. The photos are sorted by their id from the database and then by their orientation. Portrait photos appear first and landscape photos second. If a user clicks on the photo it will reveal a description of the photo. A like button is located on the lower left corner of the photo and when pressed increments a like counter on the right. The amount of likes a picture has is stored in the database. A expand photo button is placed to the right of the counter. Clicking on this will display a larger more full version of the photo. Clicking anywhere on the DOM will close the larger photo. These pop out photos are a modal from Material UI. It took me a minute to get them looking the way they do.

I had little difficulty with React. I really enjoyed working with it and am looking forward to do more with it. I also really like Material UI and now that I know how to use it I will probably implement it from the beginning of the next project and write less vanilla csss.
