migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xga4ey4wls0ffil")

  // remove
  collection.schema.removeField("yjf0mfmx")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xga4ey4wls0ffil")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
