## Messages

### Message [/messages/{id}]

+ Parameters
    - id: 1 (integer) - id of the message

+ Attributes
    - message: hello (string, required) - Message body
    - _link: https://<host>/messages/1 (string, optional)


#### Create a Message [PUT]

+ Request (application/json; charset=utf-8)

    + Body

      ```
      {"message": "Hello CampJS VI"}
      ```

+ Response 200 (application/json; charset=utf-8)

    + Attributes (Message)


#### Retrieve a Message [GET]

+ Response 200 (application/json; charset=utf-8)

    + Attributes (Message)


#### Delete a Message [DELETE]

+ Response 204
