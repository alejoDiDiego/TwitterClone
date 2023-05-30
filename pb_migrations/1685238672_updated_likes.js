migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xga4ey4wls0ffil")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cb5xwlwz",
    "name": "postId",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "wrontgzywxqyqzx",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xga4ey4wls0ffil")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
