migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wrontgzywxqyqzx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5xm9jwnt",
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wrontgzywxqyqzx")

  // remove
  collection.schema.removeField("5xm9jwnt")

  return dao.saveCollection(collection)
})
