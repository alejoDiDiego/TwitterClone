migrate((db) => {
  const collection = new Collection({
    "id": "2t6wje5i1g06ka3",
    "created": "2023-05-28 01:19:53.860Z",
    "updated": "2023-05-28 01:19:53.860Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "h4wh6kec",
        "name": "test",
        "type": "text",
        "required": false,
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
  const collection = dao.findCollectionByNameOrId("2t6wje5i1g06ka3");

  return dao.deleteCollection(collection);
})
