migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("t0uc2xu49a1z8cu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "frxh4w30",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yedb4w8q",
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
  const collection = dao.findCollectionByNameOrId("t0uc2xu49a1z8cu")

  // remove
  collection.schema.removeField("frxh4w30")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yedb4w8q",
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
