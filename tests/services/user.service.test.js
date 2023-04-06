// require user.service.js
const userServices = require('../../src/services/user.service');
// require users models
const { users, m_user_role } = require('../../src/models');
const { case_studies } = require('../../src/models');
// require NotFoundError
const { NotFoundError } = require('../../src/utils/httpError');
const mockdata = require('../__mocks__/user');
const mockCaseStudyData = require('../__mocks__/case-study');
describe('User Services', () => {
  describe('function listUsers', () => {
    it('Should return an array of users', async () => {
      const resolvedValue = [mockdata.getUser.resolvedValue];
      jest.spyOn(users, 'findAll').mockResolvedValue(resolvedValue);
      const result = await userServices.listUsers();
      expect(result).toEqual(resolvedValue);
    });
    it('Should throw an error when there is an error getting users from the databasr', async () => {
      jest.spyOn(users, 'findAll').mockImplementation(() => {
        throw new Error('Database Error');
      });
      await expect(userServices.listUsers()).rejects.toThrow(new Error('Database Error'));
    });
  });
  describe('Function getUserByFmno', () => {
    it('Should return a user with the given fmno', async () => {
      jest.spyOn(users, 'findOne').mockResolvedValue(mockdata.testData[0]);
      const gotUser = await userServices.getUserByFmno(mockdata.testData[0].fmno);
      expect(gotUser).toEqual(mockdata.testData[0]);
    });
    it('Should throw an error when the user with given fmno is not found', async () => {
      jest.spyOn(users, 'findOne').mockResolvedValue(null);
      await expect(userServices.getUserByFmno('123456')).rejects.toThrow(new NotFoundError('User not found'));
    });
  });
  describe('Function getUsersByName', () => {
    it('Should return all users whose name matches the given name', async () => {
      jest.spyOn(users, 'findAll').mockResolvedValue(mockdata.testData);
      const gotUsers = await userServices.getUsersByName(mockdata.testData[0].name);
      expect(gotUsers).toEqual(mockdata.testData);
    });
  });
  describe('function getOneUser', () => {
    it('Should return a user object with given user_id', async () => {
      const resolvedValue = mockdata.getUser.resolvedValue;
      jest.spyOn(users, 'findOne').mockResolvedValue(resolvedValue);
      const result = await userServices.getUser('1');
      expect(result).toEqual(resolvedValue);
    });
    it('Should throw a NotFoundError if user_id is not found', async () => {
      const mockUserId = 59;
      const error = new NotFoundError('User not found');
      jest.spyOn(users, 'findOne').mockResolvedValue(null);
      await expect(userServices.getUser(mockUserId)).rejects.toThrow(error);
    });
  });
  describe('function deleteUser', () => {
    it('should delete an user', async () => {
      jest.spyOn(users, 'destroy').mockResolvedValue(mockdata.deleteUser.deletedUser);
      const response = await userServices.deleteUser(mockdata.deleteUser.deletedUser.id);
      expect(response).toEqual(mockdata.deleteUser.deletedUser);
    });
    it('should delete an user', async () => {
      jest.spyOn(users, 'destroy').mockResolvedValue(mockdata.deleteUser.deletedUser);
      const response = await userServices.deleteUser(mockdata.deleteUser.deletedUser.id);
      expect(response).toEqual(mockdata.deleteUser.deletedUser);
    });
  });
  describe('function createUser', () => {
    it('should create a new user', async () => {
      jest.spyOn(users, 'create').mockResolvedValue(mockdata.createUser.newUser);
      const response = await userServices.createUser(mockdata.createUser.newUser);
      expect(response).toEqual(mockdata.createUser.newUser);
    });
    it('Should throw an error when there is an error creating the user', async () => {
      jest.spyOn(users, 'create').mockImplementation(() => {
        throw new Error('Error creating user');
      });
      await expect(userServices.createUser(mockdata.createUser.newUser)).rejects.toThrow(
        new Error('Error creating user')
      );
    });
  });
  describe('function updateUser', () => {
    it('Should update user details', async () => {
      const resolvedValue = { ...mockdata.updateUser.resolvedValue, save: jest.fn() };
      jest.spyOn(users, 'findOne').mockResolvedValue(resolvedValue);
      const result = await userServices.updateUser(
        mockdata.updateUser.mockReq.params.id,
        mockdata.updateUser.mockReq.body
      );
      expect(result).toEqual(resolvedValue);
    });
    it('Should return null if there is no user with the given id', async () => {
      jest.spyOn(users, 'findOne').mockResolvedValue(null);
      const result = await userServices.updateUser(
        mockdata.updateUser.mockReq.params.id,
        mockdata.updateUser.mockReq.body
      );
      expect(result).toEqual(null);
    });
  });
  describe('function deleteFromUser', () => {
    it('should delete engagement of the given id from the database', async () => {
      jest.spyOn(users, 'findOne').mockResolvedValue(mockdata.deleteUser.mockUser);
      jest.spyOn(users, 'update').mockResolvedValue(mockdata.deleteUser.mockUsers);
      const project = await userServices.deleteProjectFromUsers(mockdata.deleteUser.mockUser.userIds, 2);
      expect(project).toEqual(undefined);
    });
  });
  describe('Function getUserRole', () => {
    it('Should return the role of the user with email', async () => {
      jest.spyOn(users, 'findOne').mockImplementation(() => {
        return { ...mockdata.testData[0], role: 'admin' };
      });
      jest.spyOn(m_user_role, 'findAll').mockImplementation(() => {
        return [{ user_id: mockdata.testData[0].user_id, role_id: '8543e9fe-a420-4cfb-9f0b-a9bea4d0962c' }];
      });
      await userServices.getUserRole(mockdata.testData[0].email);
    });
  });
  describe('getUserMetrics', () => {
    const mockDb = {
      users: {
        count: jest.fn().mockResolvedValue(3),
      },
      staffing_details: {
        count: jest.fn().mockImplementation(({ where }) => {
          const { assignment_start_date, assignment_end_date } = where;
          const assignments = [
            { user_id: 1, assignment_start_date: '2022-01-01', assignment_end_date: '2022-03-31' },
            { user_id: 2, assignment_start_date: '2022-02-01', assignment_end_date: '2022-05-31' },
            { user_id: 3, assignment_start_date: '2021-10-01', assignment_end_date: '2022-01-31' },
          ];
          return Promise.resolve(
            assignments.filter(
              a =>
                a.assignment_start_date <= assignment_end_date[db.Sequelize.Op.lte] &&
                a.assignment_end_date >= assignment_start_date[db.Sequelize.Op.gte]
            ).length
          );
        }),
      },
      Sequelize: {
        Op: {
          gte: '>=',
          lte: '<=',
        },
      },
    };
    it('Should return an array of 12 integers representing percentage of users assigned for each month', async () => {
      const metrics = await userServices.getUserMetrics(mockDb);
      expect(metrics).toHaveLength(12);
      metrics.forEach(metric => {
        expect(metric).toBeGreaterThanOrEqual(0);
        expect(metric).toBeLessThanOrEqual(100);
      });
    });
  });
  describe('function updateCaseStudyInUser', () => {
    it('should update case study in user database', async () => {
      const resolvedValue = { ...mockdata.updateUser.resolvedValue, save: jest.fn() };
      jest.spyOn(case_studies, 'findOne').mockResolvedValue(mockCaseStudyData.update.resolvedValue);
      jest.spyOn(users, 'findOne').mockResolvedValue(resolvedValue);
      await userServices.updateCaseStudyInUser(
        mockCaseStudyData.update.mockReq.params.id,
        mockCaseStudyData.update.mockReq.body
      );
      expect(resolvedValue.save).toHaveBeenCalled();
    });
  });
  describe('function removeCaseStudyFromUser', () => {
    it('should delete case study from user database', async () => {
      const resolvedValue = { ...mockdata.updateUser.resolvedValue, save: jest.fn() };
      jest.spyOn(case_studies, 'findOne').mockResolvedValue(mockCaseStudyData.update.resolvedValue);
      jest.spyOn(users, 'findOne').mockResolvedValue(resolvedValue);
      await userServices.removeCaseStudyFromUser(
        mockCaseStudyData.update.mockReq.params.id,
        mockCaseStudyData.update.mockReq.body
      );
      expect(resolvedValue.save).toHaveBeenCalled();
    });
  });
});
