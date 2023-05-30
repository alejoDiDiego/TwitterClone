migrate((db) => {
  const collection = new Collection({
    "id": "wrontgzywxqyqzx",
    "created": "2023-05-28 01:40:00.155Z",
    "updated": "2023-05-28 01:40:00.155Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "fbxmw56q",
        "name": "creatorId",
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
        "id": "7zkgttvj",
        "name": "content",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "nwmigfuw",
        "name": "images",
        "type": "json",
        "required": true,
        "unique": false,
        "options": {}
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
  const collection = dao.findCollectionByNameOrId("wrontgzywxqyqzx");

  return dao.deleteCollection(collection);
})
