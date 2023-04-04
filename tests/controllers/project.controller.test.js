const projectController = require('../../src/controllers/project.controller');
const projectService = require('../../src/services/project.service');
const userService = require('../../src/services/user.service');
const caseStudyService = require('../../src/services/case-study.service');
const mockData = require('../__mocks__/project');
const mockDataUser = require('../__mocks__/user');
const mockDataCaseStudy = require('../__mocks__/case-study');
const staffingDetailsService = require('../../src/services/staffing-details.service');

describe('Engagements Controllers', () => {
  // it('should return the engagement details of the provided id', async () => {
  //   jest.spyOn(projectService, 'getProject').mockResolvedValue([mockData.project.resolvedValue]);
  //   await projectController.getProject(mockData.project.mockReq, mockData.project.mockRes);
  //   expect(mockData.project.mockRes.status).toBeCalledWith(200);
  //   expect(mockData.project.mockRes.json).toBeCalledWith([mockData.project.resolvedValue]);
  // });
  // it('should return error', async () => {
  //   jest.spyOn(projectService, 'getProject').mockRejectedValue(new Error(mockData.project.errorMessage));
  //   await projectController.getProject(mockData.project.mockReq, mockData.project.mockRes);
  //   expect(mockData.project.mockRes.status).toBeCalledWith(500);
  //   expect(mockData.project.mockRes.json).toBeCalledWith({ error: mockData.project.errorMessage });
  // });
  describe('Function getWholeProject', () => {
    it('Should return a project', async () => {
      jest.spyOn(projectService, 'getProject').mockResolvedValue(mockData.project.resolvedValue);
      jest.spyOn(staffingDetailsService, 'getUsersInEngagement').mockResolvedValue(mockDataUser.testData);
      jest.spyOn(Promise, 'all').mockResolvedValueOnce(mockDataUser.testData);
      jest.spyOn(userService, 'getUser').mockResolvedValue(mockDataUser.testData);
      jest.spyOn(staffingDetailsService, 'getPastUsersInEngagement').mockResolvedValue(mockDataUser.testData);
      jest.spyOn(Promise, 'all').mockResolvedValueOnce(mockDataUser.testData);
      jest.spyOn(caseStudyService, 'getCaseStudiesByEngagementId').mockResolvedValue(mockDataCaseStudy.testData);

      await projectController.getWholeProject(mockData.project.mockReq, mockData.project.mockRes);
      expect(mockData.project.mockRes.status).toBeCalledWith(200);
      expect(mockData.project.mockRes.json).toBeCalledWith({
        data: {
          projectData: mockData.project.resolvedValue,
          usersInEngagement: mockDataUser.testData,
          caseStudiesInEngagement: mockDataCaseStudy.testData,
          pastUsersInEngagement: mockDataUser.testData,
          user: mockData.project.mockReq.user,
        },
      });
    });
    it('Should throw an error when the project does not exist', async () => {
      jest.spyOn(projectService, 'getProject').mockImplementation(() => {
        throw new Error('Project not found');
      });
      await projectController.getWholeProject(mockData.project.mockReq, mockData.project.mockRes);
      expect(mockData.project.mockRes.status).toBeCalledWith(500);
    });
  });
  describe('Function getProject', () => {
    it('Should return a project', async () => {
      jest.spyOn(projectService, 'getProject').mockResolvedValue(mockData.project.resolvedValue);
      await projectController.getProject(mockData.project.mockReq, mockData.project.mockRes);
      expect(mockData.project.mockRes.status).toBeCalledWith(200);
      expect(mockData.project.mockRes.json).toBeCalledWith({
        data: mockData.project.resolvedValue,
        user: mockData.project.mockReq.user,
      });
    });
    it('Should return an error when the project with the given id does not exist', async () => {
      jest.spyOn(projectService, 'getProject').mockImplementation(() => {
        throw new Error('Project not found');
      });
      await projectController.getProject(mockData.project.mockReq, mockData.project.mockRes);
      expect(mockData.project.mockRes.status).toBeCalledWith(500);
    });
  });
  describe('Function updateProject', () => {
    it('Should update the project with given projectId', async () => {
      jest.spyOn(projectService, 'updateProject').mockResolvedValue(mockData.project.resolvedValue);
      jest.spyOn(userService, 'getUser').mockResolvedValue(mockDataUser.getUser.resolvedValue);
      jest.spyOn(userService, 'addCurrentEngagement').mockResolvedValue(mockDataUser.getUser.resolvedValue);
      jest.spyOn(userService, 'removeCurrentEngagement').mockResolvedValue(mockDataUser.getUser.resolvedValue);
      await projectController.updateProject(mockData.toUpdate.mockReq, mockData.project.mockRes);
      expect(mockData.project.mockRes.status).toBeCalledWith(200);
      expect(mockData.project.mockRes.json).toBeCalledWith({
        data: mockData.project.resolvedValue,
        user: mockData.toUpdate.mockReq.user,
      });
    });
    it('Should throw an error when the project with the given id does not exist', async () => {
      jest.spyOn(projectService, 'updateProject').mockImplementation(() => {
        throw new Error('Project not found');
      });
      await projectController.updateProject(mockData.toUpdate.mockReq, mockData.project.mockRes);
      expect(mockData.project.mockRes.status).toBeCalledWith(500);
    });
  });
  describe('Function getProjectsMonthwise', () => {
    it('Should return the number of projects in each month', async () => {
      jest.spyOn(projectService, 'getEngagementsMonthwise').mockResolvedValue([1, 2, 4, 5, 6, 7, 8, 9, 10]);
      await projectController.getProjectsMonthwise(mockData.toUpdate.mockReq, mockData.project.mockRes);
      expect(mockData.project.mockRes.status).toBeCalledWith(200);
    });
    it('Should throw an error when there is a database error', async () => {
      jest.spyOn(projectService, 'getEngagementsMonthwise').mockImplementation(() => {
        throw new Error('Project not found');
      });
      await projectController.getProjectsMonthwise(mockData.toUpdate.mockReq, mockData.project.mockRes);
      expect(mockData.project.mockRes.status).toBeCalledWith(500);
    });
  });
  it('should return list of all projects', async () => {
    jest.spyOn(projectService, 'listProjects').mockResolvedValue(mockData.allProjects.resolvedValue);
    await projectController.listProjects(mockData.allProjects.mockReq, mockData.allProjects.mockRes);
    expect(mockData.allProjects.mockRes.status).toBeCalledWith(200);
    expect(mockData.allProjects.mockRes.json).toBeCalledWith({
      data: mockData.allProjects.resolvedValue,
      user: mockData.allProjects.mockReq.user,
    });
  });
  it('should return error', async () => {
    jest.spyOn(projectService, 'listProjects').mockRejectedValue(new Error(mockData.allProjects.errorMessage));
    await projectController.listProjects(mockData.allProjects.mockReq, mockData.allProjects.mockRes);
    expect(mockData.allProjects.mockRes.status).toBeCalledWith(500);
    expect(mockData.allProjects.mockRes.json).toBeCalledWith({
      error: mockData.allProjects.errorMessage,
      user: mockData.allProjects.mockReq.user,
    });
  });
  describe('Function getEngagementStatus', () => {
    it('Should return the status of all engagements', () => {
      jest.spyOn(projectService, 'getEngagementStatus').mockResolvedValue(mockData.project.resolvedValue);
      projectController.getEngagementStatus(mockData.project.mockReq, mockData.project.mockRes);
      expect(mockData.project.mockRes.status).toBeCalledWith(200);
      expect(mockData.project.mockRes.json).toBeCalledWith({
        data: mockData.project.resolvedValue,
        user: mockData.project.mockReq.user,
      });
    });
    it('Should throw an error when theres a database error', () => {
      jest.spyOn(projectService, 'getEngagementStatus').mockImplementation(() => {
        throw new Error('Project not found');
      });
      projectController.getEngagementStatus(mockData.project.mockReq, mockData.project.mockRes);
      expect(mockData.project.mockRes.status).toBeCalledWith(500);
    });
  });
  describe('Function getEngagementsCount', () => {
    it('Should return the number of engagements', () => {
      jest.spyOn(projectService, 'getEngagementsCount').mockResolvedValue(mockData.project.resolvedValue);
      projectController.getEngagementsCount(mockData.project.mockReq, mockData.project.mockRes);
      expect(mockData.project.mockRes.status).toBeCalledWith(200);
      expect(mockData.project.mockRes.json).toBeCalledWith({
        data: mockData.project.resolvedValue,
        user: mockData.project.mockReq.user,
      });
    });
    it('Should throw an error when theres a database error', () => {
      jest.spyOn(projectService, 'getEngagementsCount').mockImplementation(() => {
        throw new Error('Project not found');
      });
      projectController.getEngagementsCount(mockData.project.mockReq, mockData.project.mockRes);
      expect(mockData.project.mockRes.status).toBeCalledWith(500);
    });
  });
  it('should delete engagement of the provided id', async () => {
    jest.spyOn(projectService, 'getProject').mockResolvedValue('engagement has been deleted');
    jest.spyOn(userService, 'deleteProjectFromUsers').mockResolvedValue('engagement has been deleted');
    jest.spyOn(caseStudyService, 'removeProjectFromCaseStudy').mockResolvedValue('engagement has been deleted');
    jest.spyOn(projectService, 'deleteProject').mockResolvedValue('engagement has been deleted');
    await projectController.deleteProject(mockData.todelete.mockReq, mockData.todelete.mockRes);
    expect(mockData.todelete.mockRes.status).toBeCalledWith(200);
    expect(mockData.todelete.mockRes.json).toBeCalledWith({
      message: 'engagement has been deleted',
      user: mockData.todelete.mockReq.user,
    });
  });
  it('should return error', async () => {
    jest.spyOn(projectService, 'getProject').mockRejectedValue(new Error(mockData.todelete.errorMessage));
    await projectController.deleteProject(mockData.todelete.mockReq, mockData.todelete.mockRes);
    expect(mockData.todelete.mockRes.status).toBeCalledWith(500);
    expect(mockData.todelete.mockRes.json).toBeCalledWith({
      error: mockData.todelete.errorMessage,
      user: mockData.todelete.mockReq.user,
    });
  });
  it('Should create a project', async () => {
    jest.spyOn(projectService, 'createProject').mockResolvedValue(mockData.project.resolvedValue);
    jest.spyOn(userService, 'addCurrentEngagement').mockResolvedValue(mockDataUser.getUser.resolvedValue);
    jest.spyOn(caseStudyService, 'addCurrentEngagement').mockResolvedValue(mockDataCaseStudy.update.resolvedValue);
    await projectController.createProject(mockData.toUpdate.mockReq, mockData.project.mockRes);
    expect(mockData.project.mockRes.status).toBeCalledWith(201);
    expect(mockData.project.mockRes.json).toBeCalledWith({
      data: mockData.project.resolvedValue,
      user: mockData.toUpdate.mockReq.user,
    });
  });
  it('Should return an array of engagements monthwise', async () => {
    jest.spyOn(projectService, 'getProjectsInMonths').mockResolvedValue(mockData.engagementByMonth.resolvedValue);
    await projectController.getProjectsInMonths(mockData.engagementByMonth.mockReq, mockData.engagementByMonth.mockRes);
    expect(mockData.engagementByMonth.mockRes.status).toBeCalledWith(200);
    expect(mockData.engagementByMonth.mockRes.json).toBeCalledWith({
      data: mockData.engagementByMonth.resolvedValue,
      user: mockData.engagementByMonth.mockReq.user,
    });
  });
});
