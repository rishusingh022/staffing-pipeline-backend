const { HttpError } = require('../../src/utils/httpError');
const userController = require('../../src/controllers/user.controller');
const userServices = require('../../src/services/user.service');
const roleFeatureServices = require('../../src/services/role-feature.service');
const mockdata = require('../__mocks__/user');
jest.mock('../../src/services/user.service');
jest.mock('../../src/services/staffing-details.service');
jest.mock('../../src/services/project.service');
jest.mock('../../src/services/skills.service');
jest.mock('../../src/services/role-feature.service');

//const email = 'testuser@example.com';
const userRoles = {
  userId: 123,
  roles: ['admin', 'editor'],
};
const userFeatures = [
  {
    roleName: 'admin',
    features: [
      { featureName: 'create_user', featureAvailable: true },
      { featureName: 'delete_user', featureAvailable: true },
      { featureName: 'edit_user', featureAvailable: false },
    ],
  },
  {
    roleName: 'editor',
    features: [
      { featureName: 'create_post', featureAvailable: true },
      { featureName: 'delete_post', featureAvailable: false },
      { featureName: 'edit_post', featureAvailable: true },
    ],
  },
];

// Create mocks for the userServices and roleFeatureServices functions

userServices.getUserRole.mockResolvedValue(userRoles);
roleFeatureServices.getRoleFeatures.mockResolvedValue(userFeatures);

describe('User Controller', () => {
  describe('function createUser', () => {
    it('should create the user and status returned is 201', async () => {
      jest.spyOn(userServices, 'createUser').mockResolvedValue(mockdata.createUser.resolvedValue.data);
      await userController.createUser(mockdata.createUser.mockReq, mockdata.createUser.mockRes);
      expect(mockdata.createUser.mockRes.status).toBeCalledWith(201);
      expect(mockdata.createUser.mockRes.json).toBeCalledWith(mockdata.createUser.resolvedValue);
    });
    it('should throw error with status 400', async () => {
      jest.spyOn(userServices, 'createUser').mockImplementation(() => {
        throw new HttpError(mockdata.createUser.errorMessage, mockdata.createUser.errorCode);
      });
      await userController.createUser(mockdata.createUser.mockReqName, mockdata.createUser.mockRes);
      expect(mockdata.createUser.mockRes.status).toBeCalledWith(400);
      expect(mockdata.createUser.mockRes.json).toBeCalledWith({
        error: mockdata.createUser.errorMessage,
        user: mockdata.createUser.mockReq.user,
      });
    });
  });
  describe('function listUsers', () => {
    it('Should return all users', async () => {
      const resolvedValue = [mockdata.getUser.resolvedValue];
      jest.spyOn(userServices, 'listUsers').mockResolvedValue(resolvedValue);
      await userController.listUsers(mockdata.getUser.mockReq, mockdata.getUser.mockRes);
      expect(mockdata.getUser.mockRes.status).toHaveBeenCalledWith(200);
      expect(mockdata.getUser.mockRes.json).toHaveBeenCalledWith({
        data: resolvedValue,
        user: mockdata.getUser.mockReq.user,
      });
    });
  });
  describe('function deleteUser', () => {
    it('Should delete the user', async () => {
      jest.spyOn(userServices, 'deleteUser').mockResolvedValue(mockdata.deleteUser.resolvedValue);
      await userController.deleteUser(mockdata.deleteUser.mockReq, mockdata.deleteUser.mockRes);
      expect(mockdata.deleteUser.mockRes.status).toHaveBeenCalledWith(200);
      expect(mockdata.deleteUser.mockRes.json).toHaveBeenCalled();
    });
    it('Should throw an error when something went wrong', async () => {
      jest.spyOn(userServices, 'deleteUser').mockRejectedValue(new Error('Something went wrong'));
      await userController.deleteUser(mockdata.deleteUser.mockReq, mockdata.deleteUser.mockRes);
      expect(mockdata.deleteUser.mockRes.status).toHaveBeenCalledWith(500);
      expect(mockdata.deleteUser.mockRes.json).toHaveBeenCalledWith({
        message: 'Something went wrong.',
        user: mockdata.deleteUser.mockReq.user,
      });
    });
  });
  describe('getUserRole', () => {
    it('should return user role and available features', async () => {
      // Create mock request and response objects
      // Call the getUserRole function with the mock request and response
      await userServices.getUserRole(mockdata.createUser.mockReq, mockdata.createUser.mockRes);

      // Assert that the response has the expected data
      expect(mockdata.createUser.mockRes.status).toHaveBeenCalled();
      expect(mockdata.createUser.mockRes.json).toHaveBeenCalled();
    });
    it('Should throw an error when something went wrong', async () => {
      jest.spyOn(userServices, 'getUserRole').mockRejectedValue(new Error('Something went wrong'));
      await userController.getUserRole(mockdata.createUser.mockReq, mockdata.createUser.mockRes);
      expect(mockdata.createUser.mockRes.status).toHaveBeenCalledWith(500);
      expect(mockdata.createUser.mockRes.json).toHaveBeenCalled();
    });
  });
  describe('Funtion getUserMetrics', () => {
    it('Should return user metrics', async () => {
      jest.spyOn(userServices, 'getUserMetrics').mockResolvedValue(mockdata.testData);
      await userController.getUserMetrics(mockdata.createUser.mockReq, mockdata.createUser.mockRes);
      expect(mockdata.createUser.mockRes.status).toHaveBeenCalledWith(200);
      expect(mockdata.createUser.mockRes.json).toHaveBeenCalledWith({
        data: mockdata.testData,
        user: mockdata.createUser.mockReq.user,
      });
    });
    it('Should throw an error when something went wrong', async () => {
      jest.spyOn(userServices, 'getUserMetrics').mockRejectedValue(new Error('Something went wrong'));
      await userController.getUserMetrics(mockdata.createUser.mockReq, mockdata.createUser.mockRes);
      expect(mockdata.createUser.mockRes.status).toHaveBeenCalledWith(500);
      expect(mockdata.createUser.mockRes.json).toHaveBeenCalled();
    });
  });
  describe('function updateUser', () => {
    it('should update user details', async () => {
      jest.spyOn(userServices, 'updateUser').mockResolvedValue(mockdata.updateUser.resolvedValue);
      await userController.updateUser(mockdata.updateUser.mockReq, mockdata.updateUser.mockRes);
      expect(mockdata.updateUser.mockRes.status).toHaveBeenCalledWith(200);
      expect(mockdata.updateUser.mockRes.json).toHaveBeenCalledWith({
        data: mockdata.updateUser.resolvedValue,
        user: mockdata.updateUser.mockReq.user,
      });
    });
    it('should return 404 if user not found', async () => {
      const resolvedValue = null;
      jest.spyOn(userServices, 'updateUser').mockResolvedValue(resolvedValue);
      await userController.updateUser(mockdata.updateUser.mockReq, mockdata.updateUser.mockRes);
      expect(mockdata.updateUser.mockRes.status).toHaveBeenCalledWith(404);
      expect(mockdata.updateUser.mockRes.json).toHaveBeenCalledWith({
        message: 'User not found',
        user: mockdata.updateUser.mockReq.user,
      });
    });
    describe('Function getUsersCount', () => {
      it('Should return users count', async () => {
        jest.spyOn(userServices, 'getUsersCount').mockResolvedValue(mockdata.testData);
        await userController.getUsersCount(mockdata.createUser.mockReq, mockdata.createUser.mockRes);
        expect(mockdata.createUser.mockRes.status).toHaveBeenCalledWith(200);
        expect(mockdata.createUser.mockRes.json).toHaveBeenCalledWith({
          data: mockdata.testData,
          user: mockdata.createUser.mockReq.user,
        });
      });
      it('Should throw an error when something went wrong', async () => {
        jest.spyOn(userServices, 'getUsersCount').mockRejectedValue(new Error('Something went wrong'));
        await userController.getUsersCount(mockdata.createUser.mockReq, mockdata.createUser.mockRes);
        expect(mockdata.createUser.mockRes.status).toHaveBeenCalledWith(500);
        expect(mockdata.createUser.mockRes.json).toHaveBeenCalled();
      });
    });
    it('should return 500 if something went wrong', async () => {
      jest.spyOn(userServices, 'updateUser').mockRejectedValue(new Error('Something went wrong'));
      await userController.updateUser(mockdata.updateUser.mockReq, mockdata.updateUser.mockRes);
      expect(mockdata.updateUser.mockRes.status).toHaveBeenCalledWith(500);
      expect(mockdata.updateUser.mockRes.json).toHaveBeenCalledWith({
        message: 'Something went wrong',
        user: mockdata.updateUser.mockReq.user,
      });
    });
  });
});
