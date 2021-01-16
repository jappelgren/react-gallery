CREATE TABLE "pics" (
    "id" SERIAL PRIMARY KEY,
    "filename" VARCHAR NOT NULL,
    "description" VARCHAR NOT NULL,
    "likes" INTEGER DEFAULT 0,
    "orientation" VARCHAR(9)
);

INSERT INTO "pics" ("filename", "description", "orientation")
VALUES ('burger_sushi.jpg', 'Conveyor belt sushi cheeseburger', 'portrait' ),
('through_the_window.jpg', 'A bearded man taks a picture of another bearded man through a window', 'landscape')
;