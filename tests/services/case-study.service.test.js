const { case_studies } = require('../../src/models');
const updateCaseStudyServices = require('../../src/services/case-study.service');
const caseStudyService = require('../../src/services/case-study.service');
const mockData = require('../__mocks__/case-study');

describe('Case Study Services', () => {
  describe('function updateCaseStudy', () => {
    it('Should update case study details', async () => {
      const resolvedValue = { ...mockData.update.resolvedValue, save: jest.fn() };
      jest.spyOn(case_studies, 'findOne').mockResolvedValue(resolvedValue);
      const caseStudy = await updateCaseStudyServices.updateCaseStudy(
        mockData.update.mockReq.params.id,
        mockData.update.mockReq.body
      );
      expect(caseStudy).toEqual(resolvedValue);
    });
  });
  describe('Function createCaseStudy', () => {
    it('Should create a new case study', async () => {
      const resolvedValue = { ...mockData.create.resolvedValue, save: jest.fn() };
      jest.spyOn(case_studies, 'create').mockResolvedValue(resolvedValue);
      const caseStudy = await updateCaseStudyServices.createCaseStudy(mockData.create.mockReq.body);
      expect(caseStudy).toEqual(resolvedValue);
    });
  });
  describe('Function getCaseStudiesBytEngagementId', () => {
    it('Should get case studies by engagement id', async () => {
      jest.spyOn(case_studies, 'findAll').mockResolvedValue([mockData.create.resolvedValue]);
      const caseStudy = await updateCaseStudyServices.getCaseStudiesByEngagementId(mockData.create.mockReq.params.id);
      expect(caseStudy).toEqual([mockData.create.resolvedValue]);
    });
  });
  describe('Function getCaseStudyByName', () => {
    it('Should get case study by name', async () => {
      jest.spyOn(case_studies, 'findOne').mockResolvedValue([mockData.create.resolvedValue]);
      const caseStudy = await updateCaseStudyServices.getCaseStudyByName(mockData.create.mockReq.params.name);
      expect(caseStudy).toEqual([mockData.create.resolvedValue]);
    });
  });
  describe('Function getCaseStudiesCount', () => {
    it('Should get case studies count', async () => {
      jest.spyOn(case_studies, 'count').mockResolvedValue(mockData.create.count);
      const caseStudy = await updateCaseStudyServices.getCaseStudiesCount();
      expect(caseStudy).toEqual(mockData.create.count);
    });
  });
  describe('function deleteCaseStudy', () => {
    it('Should delete case study', async () => {
      const resolvedValue = { ...mockData.toDelete.resolvedValue, destroy: jest.fn() };
      jest.spyOn(case_studies, 'findOne').mockResolvedValue(resolvedValue);
      const deletedCaseStudy = await updateCaseStudyServices.deleteCaseStudy(mockData.toDelete.mockReq.params.id);
      expect(deletedCaseStudy).toEqual(resolvedValue);
    });
  });
  describe('createCaseStudy', () => {
    it('should create a new case study', async () => {
      const { mockCaseStudy } = mockData.create;

      jest.spyOn(caseStudyService, 'createCaseStudy').mockResolvedValue(mockCaseStudy);

      const caseStudy = await caseStudyService.createCaseStudy(mockCaseStudy);

      expect(caseStudy).toEqual(mockCaseStudy);
    });
  });

  describe('function getCaseStudy', () => {
    it('Should get case study by id', async () => {
      jest.spyOn(case_studies, 'findOne').mockResolvedValue([mockData.toGet.resolvedValue]);
      const result = await updateCaseStudyServices.getCaseStudy();
      expect(result).toEqual([mockData.toGet.resolvedValue]);
    });
  });

  describe('function listCaseStudy', () => {
    it('should return list of all case studies from the database', async () => {
      jest.spyOn(case_studies, 'findAll').mockResolvedValue([mockData.toList.resolvedValue]);
      const result = await updateCaseStudyServices.listCaseStudies();
      expect(result).toEqual([mockData.toList.resolvedValue]);
    });
  });

  describe('function removeProjectFromCaseStudy', () => {
    it('Should set engagement id as null in case study entity', async () => {
      const resolvedValue = { ...mockData.update.resolvedValue, update: jest.fn() };
      jest.spyOn(case_studies, 'update').mockResolvedValue(resolvedValue);
      const result = await updateCaseStudyServices.removeProjectFromCaseStudy(mockData.update.mockReq.params.id);
      expect(result).toEqual(resolvedValue);
    });
  });

  describe('function addCurrentEngagement', () => {
    it('Should add engagementId to caseStudy', async () => {
      const resolvedValue = { ...mockData.update.resolvedValue, save: jest.fn() };
      jest.spyOn(case_studies, 'findOne').mockResolvedValue(resolvedValue);
      const result = await updateCaseStudyServices.addCurrentEngagement(
        mockData.update.mockReq.params.id,
        mockData.update.mockReq.params.id
      );
      expect(result).toEqual(undefined);
    });
  });
});
