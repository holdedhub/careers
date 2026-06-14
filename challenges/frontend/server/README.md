
This is a simple server that exposes the following endpoints:

## Real-time notifications

    ws://localhost:8080/notifications     

This endpoint emits a notification everytime a new document is created by other user.
Each notification is represented as a JSON document.

Example notifications:

    {"Timestamp":"2020-08-12T07:30:08.28093+02:00","UserID":"3ffe27e5-fe2c-45ea-8b3c-879b757b0455","UserName":"Alicia Wolf","DocumentID":"f09acc46-3875-4eff-8831-10ccf3356420","DocumentTitle":"Edmund Fitzgerald Porter"}
    {"Timestamp":"2020-08-12T07:30:08.281305+02:00","UserID":"fd525a6d-1255-4427-91fa-86af21e805d3","UserName":"Cindy Weissnat","DocumentID":"8d9b79cc-a48c-4f62-b385-607feb4276b8","DocumentTitle":"Schneider Aventinus"}
    {"Timestamp":"2020-08-12T07:30:11.284554+02:00","UserID":"8233841d-18b0-4f18-a1c1-9b9e8a8532e8","UserName":"Otho Denesik","DocumentID":"7efbb4f3-2dfa-44ed-a7bf-a6fcd890f01d","DocumentTitle":"Trappistes Rochefort 10"}
    {"Timestamp":"2020-08-12T07:30:12.288571+02:00","UserID":"09c49420-99ab-4fd8-81ec-f83328f0d6e1","UserName":"Cade Schumm","DocumentID":"77381dd5-15d8-4bfc-9981-31994ab8f7c3","DocumentTitle":"Samuel Smith’s Imperial IPA"}
 

## Documents API 

    http://localhost:8080/documents     

This endpoint exposes the documents API thru a simple JSON over HTTP endpoint.

Example response
    
```json    
    [
        {
            "Attachments": [
                "European Amber Lager",
                "Wood-aged Beer"
            ],
            "Contributors": [
                {
                    "ID": "1b41861e-51e2-4bf4-ba13-b20f01ce81ef",
                    "Name": "Jasen Crona"
                },
                {
                    "ID": "2a1d6ed0-7d2d-4dc6-b3ea-436a38fd409e",
                    "Name": "Candace Jaskolski"
                },
                {
                    "ID": "9ae28565-4a1c-42e3-9ae8-e39e6f783e14",
                    "Name": "Rosemarie Schaden"
                }
            ],
            "CreatedAt": "1912-03-08T06:01:39.382278739Z",
            "ID": "69517c79-a4b2-4f64-9c83-20e5678e4519",
            "Title": "Arrogant Bastard Ale",
            "UpdatedAt": "1952-02-29T22:21:13.817038244Z",
            "Version": "5.3.15"
        },
        {
            "Attachments": [
                "Strong Ale",
                "Stout",
                "Dark Lager",
                "Belgian Strong Ale"
            ],
            "Contributors": [
                {
                    "ID": "1bbb6853-390f-49aa-a002-fb60908f8b0e",
                    "Name": "Hermann Lowe"
                }
            ],
            "CreatedAt": "1993-11-12T00:55:44.438198299Z",
            "ID": "d7e00994-75e6-48f1-b778-e5d31ead7136",
            "Title": "Ten FIDY",
            "UpdatedAt": "1946-04-15T06:09:44.564202073Z",
            "Version": "5.1.15"
        },
        {
            "Attachments": [
                "Bock",
                "English Pale Ale",
                "Wood-aged Beer",
                "Belgian And French Ale"
            ],
            "Contributors": [
                {
                    "ID": "de30f704-1102-40f4-8517-a0361378370c",
                    "Name": "Velda Watsica"
                },
                {
                    "ID": "f65b8ce0-1276-4a07-899c-a41387c9360c",
                    "Name": "Helmer Hauck"
                }
            ],
            "CreatedAt": "2007-12-11T02:35:33.701912202Z",
            "ID": "fe6ad6ed-a5bd-480b-8688-fd3652b2a6d9",
            "Title": "Orval Trappist Ale",
            "UpdatedAt": "1972-01-02T13:12:29.948799707Z",
            "Version": "1.3.1"
        }
    ]
```

# Running the server

To run the server, you need Golang runtime installed in your workspace. Then run the following:

    go run server.go

By default, the server listen to `localhost:8080`, if needed change the listening address using `-addr` flag, for example:

    go run server.go -addr localhost:9090 

# Security

This simple server is not intended for production usage. The code has some security issues left intentionally for the challenge.  
