
// require uuid
const uuid = require('uuid');


const practitioners = [
  {
    'id': uuid.v4(),
    'name': 'John Does',
    'location': 'Toronto',
    'skills': [
      'React', 'Node', 'Mongo', 'Express'
    ],
    'pastStudies': [
      'ABC', 'DEF', 'GHI'
    ],
    'Role': 'Senior Engineer 1',
    'Tenure': 5,
    'Education': 'CSE'
  }
];



module.exports = { practitioners };