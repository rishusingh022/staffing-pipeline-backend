const project = {
  mockReq: {
    params: {
      id: 1,
    },
    user: {
      role: 'engineer 1',
    },
    body: {
      name: 'Project 1',
      startDate: '2020-01-01',
    },
  },
  mockRes: {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  },
  resolvedValue: {
    engagementId: 1223,
    userIds: ['1', '2', '3'],
    caseStudyIds: ['23', '34', '56'],
    save: jest.fn(),
  },
  editedProject: {
    engagementId: 1223,
    userIds: ['1', '2'],
    caseStudyIds: ['23', '34', '56'],
    save: jest.fn(),
  },
  errorMessage: 'Internal Server error!!',
};
const allProjects = {
  resolvedValue: [
    {
      engagementId: 1223,
      userIds: ['771', '882', '93'],
      caseStudyIds: ['263', '364', '586'],
    },
    {
      engagementId: 1223,
      userIds: ['41', '62', '38'],
      caseStudyIds: ['23', '34', '56'],
    },
    {
      engagementId: 1223,
      userIds: ['41', '72', '96'],
      caseStudyIds: ['235', '364', '576'],
    },
  ],
  mockReq: {
    query: {
      page: 1,
    },
    user: {
      role: 'engineer 1',
    },
  },
  mockRes: {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  },
  errorMessage: 'Internal Server error!!',
};
const todelete = {
  mockReq: {
    params: jest.fn(),
    user: {
      role: 'engineer 1',
    },
  },
  mockRes: {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  },
  errorMessage: 'Internal Server error!!',
  mockEnagement: {
    userIds: [1, 2, 3],
  },
};

const toUpdate = {
  mockReq: {
    params: jest.fn(),
    body: project.resolvedValue,
    user: {
      role: 'engineer 1',
    },
  },
  mockRes: {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  },
  errorMessage: 'Internal Server error!!',
};
const engagementByMonth = {
  mockReq: {
    params: jest.fn(),
    body: project.resolvedValue,
    user: {
      role: 'engineer 1',
    },
  },
  mockRes: {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  },
  resolvedValue: {
    data: [1, 2, 3],
    user: {
      role: 'engineer 1',
    },
  },
};
module.exports = {
  project,
  allProjects,
  todelete,
  toUpdate,
  engagementByMonth,
};
