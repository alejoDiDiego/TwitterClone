migrate((db) => {
  const collection = new Collection({
    "id": "myxy3931aobu9s2",
    "created": "2023-06-02 04:15:07.770Z",
    "updated": "2023-06-02 04:15:07.770Z",
    "name": "userFollower",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ada8xrbx",
        "name": "userFollowed",
        "type": "relation",
        "required": false,
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
        "id": "ut0j6r9n",
        "name": "Follower",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
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
  const collection = dao.findCollectionByNameOrId("myxy3931aobu9s2");

  return dao.deleteCollection(collection);
})
