migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("t0uc2xu49a1z8cu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hqe4tq8a",
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
  const collection = dao.findCollectionByNameOrId("t0uc2xu49a1z8cu")

  // remove
  collection.schema.removeField("hqe4tq8a")

  return dao.saveCollection(collection)
})
