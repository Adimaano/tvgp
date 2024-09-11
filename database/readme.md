# Database Description

Initial database will be the popular non-relational database MongoDB.

The MongoDB system is setup (docker container with mongoDB image) and will be run with the compose build!

Current configuration is only with a local mounted volume!!

Meaning: 
Building this project will create a docker "volume" -> a metaphorical "folder" on your own PC.
You can delete and rebuild the whole project and all its images and containers, as long as the volume is not deleted, the mongo system will reconnect to the volume with the designated name "mongodata" (see compose.yaml) and all the data you created / manipulated is SAVED and there AGAIN.
This is called "persistance".

WARNING: The volume is persistant, because you only save it locally on your PC. 
Other Devs in the Team DO NOT have this volume. They will have their own volume created and do NOT SHARE the data stored.



## How to access the database?

Options:
1. API calls (see mongodb manpages and how to access db from your code)
2. MongoDB VScode extension (local database browser)
3. MongoDB Compass (official database browser (desktop app))
4. Deploy the MongoDB Express service (builds another container, which connects to MongoDB and you host your own GUI to access it)


## Future

1. Use a service to host the data ... somewhere else? (Gino's Oracle server or Adrian's home hardware (RBPI+Disk) )

2. We will be switching to Postgres + SQL some time, especially when we start using credentials.