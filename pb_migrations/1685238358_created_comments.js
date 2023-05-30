migrate((db) => {
  const collection = new Collection({
    "id": "t0uc2xu49a1z8cu",
    "created": "2023-05-28 01:45:58.563Z",
    "updated": "2023-05-28 01:45:58.563Z",
    "name": "comments",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "uniwv9md",
        "name": "userId",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "yedb4w8q",
        "name": "postId",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "wrontgzywxqyqzx",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "sdrguzt7",
        "name": "content",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("t0uc2xu49a1z8cu");

  return dao.deleteCollection(collection);
})
