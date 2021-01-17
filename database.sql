CREATE TABLE "pics" (
    "id" SERIAL PRIMARY KEY,
    "filename" VARCHAR NOT NULL,
    "description" VARCHAR NOT NULL,
    "likes" INTEGER DEFAULT 0,
    "orientation" VARCHAR(9)
);

INSERT INTO "pics" ("filename", "description", "orientation")
VALUES ('airport_man.jpg','A man eats a bad meal in an airport restaurant before leaving for japan','portrait'),
('through_the_window.jpg', 'A bearded man taks a picture of another bearded man through a window', 'landscape'),
('ramen_boys.jpg', 'Three young men happily wait for ramen', 'portrait'),
('beauty_boys.jpg', 'Three naturaly beautiful men pose for a series of photos', 'portrait'),
('breakfast.jpg', 'A traditional Japanese breakfast consisting of a hotdog with mustard and a black coffee', 'landscape'),
('interview_boys.jpg', 'A man interviews the three young men about different parts of the world for Japanese TV.', 'portrait'),
('landscaping.jpg', 'Beautiful landscaping', 'landscape'),
('dotonburi.jpg', 'Dotonburi canal', 'landscape'),
('beard_boys.jpg', 'A couple of bearded gentlemen pose for a tender photo in a booth at an okonomiyaki restaurant', 'landscape'),
('strong_man.jpg', 'A man shows off his strength by holding 10 liters of whiskey.', 'portrait'),
('kfc.jpg', 'A man poses for a picture in front of a statue of Colonel Sanders dressed in a Hanshin Tigers uniform', 'portrait'),
('balloon_boy.jpg', 'A happy baseball fan holds up his Hanshin Tigers 7th inning balloon', 'portrait'),
('bar_dudes.jpg', 'A couple dudes hanging in a bar', 'landscape'),
('udon.jpg', 'A wildly delicious bowl of udon with beef and yuzu', 'portrait'),
('temple_boys.jpg', 'Three boys just chilling outside the Kiyomizu-dera temple', 'portrait'),
('mayo_train.jpg', 'A train wrapped in advertising for the greatest mayo brand on earth', 'portrait'),
('owl_man.jpg', 'A man with an owl on his head', 'portrait'),
('tokyo_skyline.jpg', 'An aerial view of Minato, Tokyo', 'portrait');

DROP TABLE "pics";