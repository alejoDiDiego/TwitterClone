migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wrontgzywxqyqzx")

  // update
  collection.schema.addField(new SchemaField({
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
      "displayFields": [
        "id"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wrontgzywxqyqzx")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
