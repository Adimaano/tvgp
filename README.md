# TVGP = Tetris Verein Gruppen Projekt

Authors:

- Adrian Dimaano
- John Naluz
- Clark Rabanillo

This project serves as a hyper experimental sandbox to learn technical ins and outs of software engineering.

Product goal:

- CV / Portfolio Page
- WebApp Calender (for Volleyball club activity administrations)

Some meta goals:

- Learning architectural design.
- Learning how to set up CI / CD from the ground up.
- Learning the process of functional design and development.
- Practicing collaborative development, coding, testing, intergration and troubleshooting.
- Experimenting with and on different stacks


## Build and Run the project

To run a local docker "cluster" and spin up the whole TVGP app with all its web services, just run:

"docker compose up --build"

from root (thats the highest level directory of the repository)


## Notes

In the future, it is also possible to break each entity up into its own repository for real even more isolated services.
And this as "Umbrella" repository that uses each service as sub-module.
