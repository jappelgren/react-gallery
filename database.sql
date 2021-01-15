CREATE TABLE "pics" (
    "id" SERIAL PRIMARY KEY,
    "filename" VARCHAR NOT NULL,
    "description" VARCHAR NOT NULL,
    "likes" INTEGER DEFAULT 0
);

INSERT INTO "pics" ("filename", "description")
VALUES ('goat_small.jpg', 'Photo of a goat taken at Glacier National Park.', );