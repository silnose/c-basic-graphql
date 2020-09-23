'use strict';
const { ObjectID } = require('mongodb');
const connectDB = require('./db');
const errorHandler = require('./errorHandler');

module.exports = {
  Course: {
    people: async ({ people }) => {
      console.log('..............................');
      let db, peopleResult, ids;
      try {
        db = await connectDB();
        ids = people ? people.map((id) => ObjectID(id)) : [];
        peopleResult =
          ids.length > 0
            ? await db
                .collection('students')
                .find({ _id: { $in: ids.map((id) => ObjectID(id)) } })
                .toArray()
            : [];
      } catch (error) {
        errorHandler(error);
      }
      return peopleResult;
    },
  },
};
