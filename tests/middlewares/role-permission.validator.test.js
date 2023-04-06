const roleFeatureServices = require('../../src/services/role-feature.service');
const userServices = require('../../src/services/user.service');
const allFeatures = require('../../src/utils/features');
const { HttpError } = require('../../src/utils/httpError');
const { checkRolePermission } = require('../../src/middlewares/role-permission.validator');
const mockRole = {
  roleId: 12,
  roleName: 'Admin',
  features: [
    {
      featureName: 'add_user',
      featureAvailable: true,
    },
    {
      featureName: 'delete_user',
      featureAvailable: true,
    },
    {
      featureName: 'create_skill_self',
      featureAvailable: true,
    },
    {
      featureName: 'edit_skill_self',
      featureAvailable: true,
    },
    {
      featureName: 'edit_user_self',
      featureAvailable: true,
    },
    {
      featureName: 'delete_skill_self',
      featureAvailable: true,
    },
  ],
};

const mockRes = {
  json: jest.fn(),
  status: jest.fn().mockReturnThis(),
};
const mockReq = {
  params: {
    roleId: 1,
  },
  user: {
    userId: 1,
    email: 'someone@mckinsey.com',
  },
};

describe('Role Permission Validator', () => {
  it('should return true if user has permission to access the feature', async () => {
    jest.spyOn(userServices, 'getUserRole').mockResolvedValue({
      userId: '00u1qy4z5x1JgXW5P5d6',
      roles: ['123'],
    });
    jest.spyOn(roleFeatureServices, 'getRoleFeatures').mockResolvedValue([mockRole]);
    const next = jest.fn();
    await checkRolePermission('add_user')(mockReq, mockRes, next);
    expect(next).toHaveBeenCalled();
  });
  it('should return false if user does not have permission to access the feature', async () => {
    jest.spyOn(userServices, 'getUserRole').mockResolvedValue({
      userId: '00u1qy4z5x1JgXW5P5d6',
      roles: ['123'],
    });
    jest.spyOn(roleFeatureServices, 'getRoleFeatures').mockResolvedValue([mockRole]);
    const next = jest.fn();
    await checkRolePermission('create_user')(mockReq, mockRes, next);
    expect(mockRes.status).toHaveBeenCalledWith(403);
    expect(mockRes.json).toHaveBeenCalledWith({ message: 'Forbidden' });
  });
  it('should return false if user does not have permission to access the feature', async () => {
    jest.spyOn(userServices, 'getUserRole').mockResolvedValue({
      userId: '00u1qy4z5x1JgXW5P5d6',
      roles: ['123'],
    });
    jest.spyOn(roleFeatureServices, 'getRoleFeatures').mockResolvedValue([mockRole]);
    const next = jest.fn();
    await checkRolePermission('create_skill_self')(mockReq, mockRes, next);
    expect(mockRes.status).toHaveBeenCalledWith(403);
    expect(mockRes.json).toHaveBeenCalledWith({ message: 'Forbidden' });
  });
  it('should return false if user does not have permission to access the feature', async () => {
    jest.spyOn(userServices, 'getUserRole').mockResolvedValue({
      userId: '00u1qy4z5x1JgXW5P5d6',
      roles: ['123'],
    });
    jest.spyOn(roleFeatureServices, 'getRoleFeatures').mockResolvedValue([mockRole]);
    const next = jest.fn();
    await checkRolePermission('edit_skill_self')(mockReq, mockRes, next);
    expect(mockRes.status).toHaveBeenCalledWith(403);
    expect(mockRes.json).toHaveBeenCalledWith({ message: 'Forbidden' });
  });
  it('should return false if user does not have permission to access the feature', async () => {
    jest.spyOn(userServices, 'getUserRole').mockResolvedValue({
      userId: '00u1qy4z5x1JgXW5P5d6',
      roles: ['123'],
    });
    jest.spyOn(roleFeatureServices, 'getRoleFeatures').mockResolvedValue([mockRole]);
    const next = jest.fn();
    await checkRolePermission('edit_user_self')(mockReq, mockRes, next);
    expect(mockRes.status).toHaveBeenCalledWith(403);
    expect(mockRes.json).toHaveBeenCalledWith({ message: 'Forbidden' });
  });
  it('should return false if user does not have permission to access the feature', async () => {
    jest.spyOn(userServices, 'getUserRole').mockResolvedValue({
      userId: '00u1qy4z5x1JgXW5P5d6',
      roles: ['123'],
    });
    jest.spyOn(roleFeatureServices, 'getRoleFeatures').mockResolvedValue([mockRole]);
    const next = jest.fn();
    await checkRolePermission('delete_skill_self')(mockReq, mockRes, next);
    expect(mockRes.status).toHaveBeenCalledWith(403);
    expect(mockRes.json).toHaveBeenCalledWith({ message: 'Forbidden' });
  });
  it('should give 500 error', async () => {
    jest.spyOn(userServices, 'getUserRole').mockRejectedValue(new Error('Internal Server Error'));
    const next = jest.fn();
    await checkRolePermission('delete_skill_self')(mockReq, mockRes, next);
    expect(mockRes.status).toHaveBeenCalledWith(500);
    expect(mockRes.json).toHaveBeenCalledWith({ message: 'Internal Server Error' });
  });
});
