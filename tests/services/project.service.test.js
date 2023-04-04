const { engagements, users, case_studies } = require('../../src/models');
const projectService = require('../../src/services/project.service');
const mockData = require('../__mocks__/project');
const mockDataUser = require('../__mocks__/user');
const mockCaseStudyData = require('../__mocks__/case-study');
const { NotFoundError } = require('../../src/utils/httpError');

describe('Engagement Services', () => {
  describe('Function getProject', () => {
    it('should return a project with a specified projectId', async () => {
      jest.spyOn(engagements, 'findOne').mockResolvedValue(mockData.project);
      const project = await projectService.getProject(1);
      expect(project).toEqual(mockData.project);
    });
    it('Should throw an error when project with the specific projectId is now found', async () => {
      jest.spyOn(engagements, 'findOne').mockResolvedValue(null);
      await expect(projectService.getProject(1)).rejects.toThrowError(new NotFoundError('Engagement not found'));
    });
  });
  describe('Function getProjectByChargeCode', () => {
    it('should return a project with a specified chargeCode', async () => {
      jest.spyOn(engagements, 'findOne').mockResolvedValue(mockData.project);
      const project = await projectService.getProjectByChargeCode('1234');
      expect(project).toEqual(mockData.project);
    });
    it('Should throw an error when project with the specific chargeCode is now found', async () => {
      jest.spyOn(engagements, 'findOne').mockResolvedValue(null);
      await expect(projectService.getProjectByChargeCode('1234')).rejects.toThrowError(
        new NotFoundError('Engagement not found')
      );
    });
  });
  describe('Function listProjects', () => {
    it('should return list of all engagements from the database', async () => {
      jest.spyOn(engagements, 'findAll').mockResolvedValue([mockData.allProjects.data]);
      const projectData = await projectService.listProjects();
      expect(projectData).toEqual([mockData.allProjects.data]);
    });
    it('Should throw an error when the database is not connected', async () => {
      jest.spyOn(engagements, 'findAll').mockRejectedValue(new Error('Database not connected'));
      await expect(projectService.listProjects()).rejects.toThrowError(new Error('Database not connected'));
    });
  });
  describe('Function getProjectsByName', () => {
    it('Should return a list of projects with the specified name', async () => {
      jest.spyOn(engagements, 'findAll').mockResolvedValue([mockData.project]);
      const project = await projectService.getProjectsByName('test');
      expect(project).toEqual([mockData.project]);
    });
  });
  it('should delete engagement of the given id from the database', async () => {
    jest.spyOn(engagements, 'destroy').mockResolvedValue([mockData.todelete.mockEnagement]);
    const project = await projectService.deleteProject(2);
    expect(project).toEqual(undefined);
  });
  describe('Function  updateProject', () => {
    it('should update the project and return the updated project', async () => {
      jest.spyOn(engagements, 'findByPk').mockResolvedValue(mockData.project.resolvedValue);
      jest.spyOn(users, 'findByPk').mockResolvedValue(mockDataUser.getUser.resolvedValue);
      const updatedProject = await projectService.updateProject(
        mockData.project.resolvedValue.engagementId,
        mockData.project.editedProject
      );
      expect(updatedProject).toEqual(mockData.project.editedProject);
    });
    it('Should throw an error when the project is not found', async () => {
      jest.spyOn(engagements, 'findByPk').mockResolvedValue(null);
      await expect(
        projectService.updateProject(mockData.project.resolvedValue.engagementId, mockData.project.editedProject)
      ).rejects.toThrowError(new NotFoundError('Project not found'));
    });
    it('should create the project and return the created project', async () => {
      jest.spyOn(engagements, 'findByPk').mockResolvedValue(mockData.project.resolvedValue);
      const createdProject = await projectService.updateProject({
        ...mockData.project.editedProject,
        chargeCode: '1244',
      });
      expect(createdProject).toEqual(mockData.project.editedProject);
    });
  });
  describe('Function updateCaseStudyInProject', () => {
    it('should update the case study in the project', async () => {
      const resolvedValue = { ...mockData.project.resolvedValue, save: jest.fn() };
      jest.spyOn(case_studies, 'findOne').mockResolvedValue(mockCaseStudyData.update.resolvedValue);
      jest.spyOn(engagements, 'findOne').mockResolvedValue(resolvedValue);
      await projectService.updateCaseStudyInProject(mockCaseStudyData.update.mockReq.params.id, {
        ...mockCaseStudyData.update.mockReq.body,
        engagementId: '123',
      });
      expect(resolvedValue.save).toHaveBeenCalled();
    });
  });
  describe('Function createProject', () => {
    it('Should create a new project and return the created project', async () => {
      jest.spyOn(engagements, 'create').mockResolvedValue(mockData.project.resolvedValue);
      const project = await projectService.createProject(mockData.project.mockProject);
      expect(project).toEqual(mockData.project.resolvedValue);
    });
    it('Should throw an error when there is an error creating the project', async () => {
      jest.spyOn(engagements, 'create').mockRejectedValue(new Error('Database not connected'));
      await expect(projectService.createProject(mockData.project.mockProject)).rejects.toThrow(
        new Error('Database not connected')
      );
    });
  });
  describe('Function getProjectInMonths', () => {
    it('Should return a list of projects in the specified month', async () => {
      jest
        .spyOn(engagements, 'findAll')
        .mockResolvedValue([{ ...mockData.project, startDate: '2023-04-03T09:24:13.388Z' }]);
      const projectMetrics = await projectService.getProjectsInMonths();
      expect(projectMetrics).toEqual([0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    });
    it('Should throw an error when there is an error getting the projects', async () => {
      jest.spyOn(engagements, 'findAll').mockRejectedValue(new Error('Database not connected'));
      await expect(projectService.getProjectsInMonths(1, 2020)).rejects.toThrow(new Error('Database not connected'));
    });
  });
  describe('Function getEngagementsMonthwise', () => {
    it('Should return all the engagements which are in the specified month', async () => {
      jest.spyOn(engagements, 'findAll').mockResolvedValue([mockData.project]);
      const engagementsMonthwise = await projectService.getEngagementsMonthwise(new Date());
      expect(engagementsMonthwise).toEqual([mockData.project]);
    });
  });
  describe('Function getEngagementStatus', () => {
    it('Should return the count of engagements of each status', async () => {
      jest.spyOn(engagements, 'findAll').mockResolvedValue([{ ...mockData.project.resolvedValue, status: 'active' }]);
      const engagementStatus = await projectService.getEngagementStatus();
      expect(engagementStatus).toEqual({ active: 1 });
    });
  });
  describe('Function getEngagementCount', () => {
    it('Should return the count of engagements', async () => {
      jest.spyOn(engagements, 'count').mockResolvedValue(1);
      const engagementCount = await projectService.getEngagementsCount();
      expect(engagementCount).toEqual(1);
    });
    it('Should throw an error when there is an error getting the count of engagements', async () => {
      jest.spyOn(engagements, 'count').mockRejectedValue(new Error('Database not connected'));
      await expect(projectService.getEngagementsCount()).rejects.toThrow(new Error('Database not connected'));
    });
  });
  describe('Function removeCaseStudyFromProject', () => {
    it('should remove the case study from the project', async () => {
      const resolvedValue = { ...mockData.project.resolvedValue, save: jest.fn() };
      jest.spyOn(case_studies, 'findOne').mockResolvedValue(mockCaseStudyData.update.resolvedValue);
      jest.spyOn(engagements, 'findOne').mockResolvedValue(resolvedValue);
      await projectService.removeCaseStudyFromProject(
        mockCaseStudyData.update.mockReq.params.id,
        mockCaseStudyData.update.mockReq.body
      );
      expect(resolvedValue.save).toHaveBeenCalled();
    });
  });
});
