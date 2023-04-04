const updateCaseStudy = require('../../src/controllers/case-study.controller');
const updateCaseStudyServices = require('../../src/services/case-study.service');
const mockData = require('../__mocks__/case-study');
const caseStudiesController = require('../../src/controllers/case-study.controller');
const caseStudiesServices = require('../../src/services/case-study.service');
const userServices = require('../../src/services/user.service');
const projectServices = require('../../src/services/project.service');

describe('CaseStudyController', () => {
  jest.spyOn(userServices, 'updateCaseStudyInUser').mockResolvedValue(true);
  jest.spyOn(projectServices, 'updateCaseStudyInProject').mockResolvedValue(true);
  describe('Function createCaseStudy', () => {
    it('Should create a new case study', async () => {
      jest.spyOn(caseStudiesServices, 'createCaseStudy').mockResolvedValue(mockData.create.resolvedValue);
      jest.spyOn(userServices, 'getUser').mockResolvedValue(mockData.create.mockReq.user);
      jest.spyOn(projectServices, 'getProject').mockResolvedValue(mockData.create.mockEngagement);
      await caseStudiesController.createCaseStudy(mockData.create.mockReq, mockData.create.mockRes);
      expect(mockData.create.mockRes.status).toHaveBeenCalledWith(201);
      expect(mockData.create.mockRes.json).toHaveBeenCalledWith({
        data: mockData.create.resolvedValue,
        user: mockData.create.mockReq.user,
      });
    });
    it('Should throw an error if something goes wrong', async () => {
      jest.spyOn(caseStudiesServices, 'createCaseStudy').mockRejectedValue(new Error('Something went wrong'));
      await caseStudiesController.createCaseStudy(mockData.create.mockReq, mockData.create.mockRes);
      expect(mockData.create.mockRes.status).toHaveBeenCalledWith(500);
      expect(mockData.create.mockRes.json).toHaveBeenCalledWith({
        message: 'Something went wrong',
        success: false,
        user: mockData.create.mockReq.user,
      });
    });
  });
  describe('updateCaseStudyController', () => {
    it('should update caseStudy details', async () => {
      jest.spyOn(updateCaseStudyServices, 'updateCaseStudy').mockResolvedValue(mockData.update.resolvedValue);
      await updateCaseStudy.updateCaseStudy(mockData.update.mockReq, mockData.update.mockRes);
      expect(mockData.update.mockRes.status).toHaveBeenCalledWith(200);
      expect(mockData.update.mockRes.json).toHaveBeenCalledWith({
        data: mockData.update.resolvedValue,
        user: mockData.update.mockReq.user,
      });
    });
    it('Should return 404 if caseStudy not found', async () => {
      const resolvedValue = null;
      jest.spyOn(updateCaseStudyServices, 'updateCaseStudy').mockResolvedValue(resolvedValue);
      await updateCaseStudy.updateCaseStudy(mockData.update.mockReq, mockData.update.mockRes);
      expect(mockData.update.mockRes.status).toHaveBeenCalledWith(404);
      expect(mockData.update.mockRes.json).toHaveBeenCalledWith({
        message: 'Case study not found',
        user: mockData.update.mockReq.user,
      });
    });
    it('Should return 500 if something went wrong', async () => {
      jest.spyOn(updateCaseStudyServices, 'updateCaseStudy').mockRejectedValue(new Error('Something went wrong'));
      await updateCaseStudy.updateCaseStudy(mockData.update.mockReq, mockData.update.mockRes);
      expect(mockData.update.mockRes.status).toHaveBeenCalledWith(500);
      expect(mockData.update.mockRes.json).toHaveBeenCalledWith({
        message: 'Something went wrong',
        user: mockData.update.mockReq.user,
      });
    });
  });
  describe('deleteCaseStudyController', () => {
    it('should delete caseStudy', async () => {
      jest.spyOn(userServices, 'removeCaseStudyFromUser').mockResolvedValue(true);
      jest.spyOn(projectServices, 'removeCaseStudyFromProject').mockResolvedValue(true);
      jest.spyOn(updateCaseStudyServices, 'deleteCaseStudy').mockResolvedValue(mockData.toDelete.resolvedValue);
      await updateCaseStudy.deleteCaseStudy(mockData.toDelete.mockReq, mockData.toDelete.mockRes);
      expect(mockData.toDelete.mockRes.status).toHaveBeenCalledWith(200);
      expect(mockData.toDelete.mockRes.json).toHaveBeenCalledWith({
        data: mockData.toDelete.resolvedValue,
        user: mockData.toDelete.mockReq.user,
      });
    });
    it('Should return 404 if caseStudy not found', async () => {
      const resolvedValue = null;
      jest.spyOn(updateCaseStudyServices, 'deleteCaseStudy').mockResolvedValue(resolvedValue);
      await updateCaseStudy.deleteCaseStudy(mockData.toDelete.mockReq, mockData.toDelete.mockRes);
      expect(mockData.toDelete.mockRes.status).toHaveBeenCalledWith(404);
      expect(mockData.toDelete.mockRes.json).toHaveBeenCalledWith({
        message: 'Case study not found',
        user: mockData.toDelete.mockReq.user,
      });
    });
    it('Should return 500 if something went wrong', async () => {
      jest.spyOn(updateCaseStudyServices, 'deleteCaseStudy').mockRejectedValue(new Error('Something went wrong'));
      await updateCaseStudy.deleteCaseStudy(mockData.toDelete.mockReq, mockData.toDelete.mockRes);
      expect(mockData.toDelete.mockRes.status).toHaveBeenCalledWith(500);
      expect(mockData.toDelete.mockRes.json).toHaveBeenCalledWith({
        message: 'Something went wrong',
        user: mockData.toDelete.mockReq.user,
      });
    });
  });
  describe('listCaseStudiesController', () => {
    it('should list all caseStudies', async () => {
      jest.spyOn(updateCaseStudyServices, 'listCaseStudies').mockResolvedValue(mockData.create.resolvedValue);
      jest.spyOn(Promise, 'all').mockResolvedValue([mockData.create.resolvedValue]);
      await updateCaseStudy.listCaseStudies(mockData.create.mockReq, mockData.create.mockRes);
      expect(mockData.create.mockRes.status).toHaveBeenCalled();
      expect(mockData.create.mockRes.json).toHaveBeenCalled();
    });
    it('Should throw an error if something goes wrong', async () => {
      jest.spyOn(updateCaseStudyServices, 'listCaseStudies').mockRejectedValue(new Error('Something went wrong'));
      await updateCaseStudy.listCaseStudies(mockData.create.mockReq, mockData.create.mockRes);
      expect(mockData.create.mockRes.status).toHaveBeenCalledWith(500);
      expect(mockData.create.mockRes.json).toHaveBeenCalledWith({
        message: 'Something went wrong',
        success: false,
        user: mockData.create.mockReq.user,
      });
    });
  });
  describe('Controller getCaseStudiesCount', () => {
    it('Should return count of caseStudies', async () => {
      jest.spyOn(updateCaseStudyServices, 'getCaseStudiesCount').mockResolvedValue(1);
      await updateCaseStudy.getCaseStudiesCount(mockData.create.mockReq, mockData.create.mockRes);
      expect(mockData.create.mockRes.status).toHaveBeenCalledWith(200);
      expect(mockData.create.mockRes.json).toHaveBeenCalledWith({
        data: 1,
        user: mockData.create.mockReq.user,
      });
    });
    it('Should throw an error if something goes wrong', async () => {
      jest.spyOn(updateCaseStudyServices, 'getCaseStudiesCount').mockRejectedValue(new Error('Something went wrong'));
      await updateCaseStudy.getCaseStudiesCount(mockData.create.mockReq, mockData.create.mockRes);
      expect(mockData.create.mockRes.status).toHaveBeenCalledWith(500);
      expect(mockData.create.mockRes.json).toHaveBeenCalledWith({
        message: 'Something went wrong',
        success: false,
        user: mockData.create.mockReq.user,
      });
    });
  });
  describe('getCaseStudyController', () => {
    it('should get case study by id ', async () => {
      jest.spyOn(updateCaseStudyServices, 'getCaseStudy').mockResolvedValue(mockData.toGet.resolvedValue);
      await updateCaseStudy.getCaseStudy(mockData.toGet.mockReq, mockData.toGet.mockRes);
      expect(mockData.toGet.mockRes.status).toHaveBeenCalledWith(200);
      expect(mockData.toGet.mockRes.json).toHaveBeenCalledWith({
        data: mockData.toGet.resolvedValue,
        user: mockData.toGet.mockReq.user,
      });
    });
    it('Should return 404 if caseStudy not found', async () => {
      const resolvedValue = null;
      jest.spyOn(updateCaseStudyServices, 'getCaseStudy').mockResolvedValue(resolvedValue);
      await updateCaseStudy.getCaseStudy(mockData.toGet.mockReq, mockData.toGet.mockRes);
      expect(mockData.toGet.mockRes.status).toHaveBeenCalledWith(404);
      expect(mockData.toGet.mockRes.json).toHaveBeenCalledWith({
        message: 'Case study not found',
        user: mockData.toGet.mockReq.user,
      });
    });
  });
  describe('listCaseStudycontroller', () => {
    it('should return list of case studies ', async () => {
      // jest.spyOn(updateCaseStudyServices, 'listCaseStudies').mockResolvedValue(mockData.toList.resolvedValue);
      // await updateCaseStudy.listCaseStudies(mockData.toList.mockReq, mockData.toList.mockRes);
      // expect(mockData.toList.mockRes.status).toHaveBeenCalledWith(200);
      // expect(mockData.toList.mockRes.json).toHaveBeenCalledWith(mockData.toList.resolvedValue);
    });
    it('Should return 500 if something went wrong', async () => {
      jest.spyOn(updateCaseStudyServices, 'listCaseStudies').mockRejectedValue(new Error('Something went wrong'));
      await updateCaseStudy.listCaseStudies(mockData.toList.mockReq, mockData.toList.mockRes);
      expect(mockData.toList.mockRes.status).toHaveBeenCalledWith(500);
      expect(mockData.toList.mockRes.json).toHaveBeenCalledWith({
        message: 'Something went wrong',
        user: mockData.toList.mockReq.user,
      });
    });
  });
});
