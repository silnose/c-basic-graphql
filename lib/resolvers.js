'use strict';
const courses = [
  {
    _id: 'anyid',
    title: 'React',
    description: 'Basics with react',
    teacher: 'Oscar Barajas',
    topic: 'js',
  },
  {
    _id: 'anyid',
    title: 'Redux',
    description: 'Basics with react',
    teacher: 'Silvana Murgo',
    topic: 'js',
  },
  {
    _id: 'anyid',
    title: 'React Router',
    description: 'Basics with react',
    teacher: 'Edgardo Ponce',
    topic: 'js',
  },
];

module.exports = {
  getCourses: () => {
    return courses;
  },
};
