migrate((db) => {
  const collection = new Collection({
    "id": "xga4ey4wls0ffil",
    "created": "2023-05-28 01:46:05.042Z",
    "updated": "2023-05-28 01:46:05.042Z",
    "name": "likes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "adv7vrxg",
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
        "id": "cb5xwlwz",
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
        "id": "yjf0mfmx",
        "name": "commentId",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "t0uc2xu49a1z8cu",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
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
  const collection = dao.findCollectionByNameOrId("xga4ey4wls0ffil");

  return dao.deleteCollection(collection);
})
