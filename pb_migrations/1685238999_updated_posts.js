migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wrontgzywxqyqzx")

  // remove
  collection.schema.removeField("nwmigfuw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "q6rt8a9g",
    "name": "field",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 99,
      "maxSize": 5242880,
      "mimeTypes": [
        "image/jpeg",
        "image/png",
        "image/svg+xml",
        "image/gif",
        "image/webp"
      ],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wrontgzywxqyqzx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nwmigfuw",
    "name": "images",
    "type": "json",
    "required": true,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("q6rt8a9g")

  return dao.saveCollection(collection)
})
