'use strict';
const { ObjectID } = require('mongodb');
const connectDB = require('./db');
const errorHandler = require('./errorHandler');

module.exports = {
  createCourse: async (root, { input }) => {
    let db, course;
    try {
      db = await connectDB();
      course = await db.collection('courses').insertOne(input);
      input._id = course.ops[0]._id;
    } catch (error) {
      errorHandler(error);
    }
    return input;
  },

  editCourse: async (root, { id, input }) => {
    let db, course;
    try {
      db = await connectDB();
      course = await db
        .collection('courses')
        .updateOne({ _id: ObjectID(id) }, { $set: input });
      course = await db.collection('courses').findOne({ _id: ObjectID(id) });
    } catch (error) {
      errorHandler(error);
    }
    return course;
  },

  removeCourse: async (root, { id }) => {
    let db, course;
    try {
      db = await connectDB();
      course = await db
        .collection('courses')
        .findOneAndDelete({ _id: ObjectID(id) });
    } catch (error) {
      errorHandler(error);
    }
    return course.value;
  },

  createStudent: async (root, { input }) => {
    let db, student;
    try {
      db = await connectDB();
      student = await db.collection('students').insertOne(input);
      input._id = student.ops[0]._id;
    } catch (error) {
      errorHandler(error);
    }
    return input;
  },

  editStudent: async (root, { id, input }) => {
    let db, student;
    try {
      db = await connectDB();
      student = await db
        .collection('students')
        .updateOne({ _id: ObjectID(id) }, { $set: input });
      student = await db.collection('students').findOne({ _id: ObjectID(id) });
    } catch (error) {
      errorHandler(error);
    }
    return student;
  },

  removeStudent: async (root, { id }) => {
    let db, student;
    try {
      db = await connectDB();
      student = await db
        .collection('students')
        .findOneAndDelete({ _id: ObjectID(id) });
      console.log(student);
    } catch (error) {
      errorHandler(error);
    }
    return student.value;
  },

  addPeople: async (root, { courseID, personID }) => {
    let db, course, person;
    console.log(`courseid ${courseID}`);
    console.log(`pid ${personID}`);
    try {
      db = await connectDB();
      course = await db
        .collection('courses')
        .findOne({ _id: ObjectID(courseID) });
      console.log(course);
      person = await db
        .collection('students')
        .findOne({ _id: ObjectID(personID) });
      console.log(person);
      if (!course || !person) {
        errorHandler(Error("Person or Course doesn't exists"));
      }
      await db
        .collection('courses')
        .updateOne(
          { _id: ObjectID(courseID) },
          { $addToSet: { people: ObjectID(personID) } }
        );
    } catch (error) {
      errorHandler(error);
    }
    return course;
  },
};
