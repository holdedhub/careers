This is a simple server that exposes the following endpoints:

## Real-time notifications

    ws://localhost:8080/notifications     

This endpoint emits a notification everytime a new document is created by other user.
Each notification is represented as a JSON document.

Example notifications:

    {"Timestamp":"2020-08-12T07:30:08.28093+02:00","UserID":"3ffe27e5-fe2c-45ea-8b3c-879b757b0455","UserName":"Alicia Wolf","DocumentID":"f09acc46-3875-4eff-8831-10ccf3356420","DocumentTitle":"Edmund Fitzgerald Porter"}
    {"Timestamp":"2020-08-12T07:30:08.281305+02:00","UserID":"fd525a6d-1255-4427-91fa-86af21e805d3","UserName":"Cindy Weissnat","DocumentID":"8d9b79cc-a48c-4f62-b385-607feb4276b8","DocumentTitle":"Schneider Aventinus"}
    {"Timestamp":"2020-08-12T07:30:11.284554+02:00","UserID":"8233841d-18b0-4f18-a1c1-9b9e8a8532e8","UserName":"Otho Denesik","DocumentID":"7efbb4f3-2dfa-44ed-a7bf-a6fcd890f01d","DocumentTitle":"Trappistes Rochefort 10"}
    {"Timestamp":"2020-08-12T07:30:12.288571+02:00","UserID":"09c49420-99ab-4fd8-81ec-f83328f0d6e1","UserName":"Cade Schumm","DocumentID":"77381dd5-15d8-4bfc-9981-31994ab8f7c3","DocumentTitle":"Samuel Smith's Imperial IPA"}
 

## Documents API 

    http://localhost:8080/documents     

This endpoint exposes the documents API through a simple JSON over HTTP endpoint.

Example response
    
```json    
    [
        {
            "CreatedAt": "2024-11-20T19:59:24.040Z",
            "UpdatedAt": "2025-02-19T09:52:16.717Z",
            "ID": "5407991e-4147-429a-a553-dfe1f2bf8988",
            "Title": "Gorgeous Bamboo Mouse",
            "Version": "9.19.10",
            "Attachments": [
                "Intelligent",
                "Electronic",
                "Small"
            ],
            "Contributors": [
                {
                    "ID": "8b9d7de2-940f-43c0-92ea-89d0f09cc77f",
                    "Name": "Sandra Rohan"
                },
                {
                    "ID": "39967723-5033-43a3-aa64-4dd026067caf",
                    "Name": "Mildred Weber"
                },
                {
                    "ID": "61af2cf1-fe01-40e0-b7ff-27b51ba36491",
                    "Name": "Phil Koch"
                }
            ]
        }
    ]
```

# Running the server
To run the server, you need Node.js installed in your workspace. Then run the following:

    npm install
    npm start

By default, the server listens to `localhost:8080`, if needed change the listening port by setting the PORT environment variable, for example:

    PORT=9091 npm start

# Security

This simple server is not intended for production usage. The code has some security issues left intentionally for the challenge.
