let testEmail = 'johndoe@mckinsey.com';
let testName = 'John Doe';
const testData = [
  {
    user_id: '9a492c13-85e8-4b26-9339-a5d037664d1a',
    email: 'johndoe@mckinsey.com',
    name: 'John Doe',
    updatedAt: '2023-02-09T15:02:53.658Z',
    createdAt: '2023-02-09T15:02:53.658Z',
    fmno: null,
    case_study_ids: null,
    skills: null,
    role: null,
    guild: null,
    image: null,
  },
  {
    user_id: '1',
    name: 'john doe',
    email: 'johndoe@mckinsey.com',
    fmno: '123456',
    caseStudyIds: ['1', '2'],
    skills: ['node, react'],
    role: 'intern',
    guild: 'swe',
    createdAt: '2022-01-17T04:33:12.000Z',
    updatedAt: '2022-01-17T04:33:12.000Z',
  },
];
const createUser = {
  mockRes: {
    json: jest.fn(),
    status: jest.fn().mockReturnThis(),
  },
  mockReq: {
    body: {
      email: testEmail,
      name: testName,
    },
    user: {
      role: 'engineer 1',
    },
  },
  mockReqName: {
    body: {
      name: testName,
    },
    user: {
      role: 'engineer 1',
    },
  },
  resolvedValue: {
    data: testData[0],
    success: true,
    user: {
      role: 'engineer 1',
    },
  },
  newUser: {
    id: 1,
    name: testName,
    email: testEmail,
    password: '12345',
  },
  errorMessage: 'notNull Violation: users.email cannot be null',
  errorCode: 400,
};
const getUser = {
  mockRes: {
    status: jest.fn(),
    json: jest.fn(),
  },
  mockReq: {
    params: {
      user_id: '1',
    },
    query: {
      page: 1,
    },
    user: {
      role: 'engineer 1',
    },
  },
  resolvedValue: testData[1],
};
const deleteUser = {
  mockReq: {
    params: {
      user_id: '1',
    },
    user: {
      role: 'engineer 1',
    },
  },
  mockRes: {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  },
  resolvedValue: testData[1],
  deletedUser: {
    id: 1,
    name: testName,
    email: testEmail,
    password: '12345',
  },
  mockUser: {
    userIds: [11, 23],
    dataValues: {
      currentEngagementIds: [12, 13],
      pastEngagementIds: [12, 13],
    },
    map: jest.fn(),
  },
  mockUsers: {
    userId: 22,
    currentEngagementIds: [122, 154],
    pastEngagementIds: [12, 13],
  },
};
const updateUser = {
  mockReq: {
    params: {
      id: '1',
    },
    body: {
      name: testName,
      email: testEmail,
    },
    user: {
      role: 'engineer 1',
    },
  },
  mockRes: {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  },
  resolvedValue: testData[1],
};

module.exports = {
  testData,
  createUser,
  getUser,
  deleteUser,
  updateUser,
};
