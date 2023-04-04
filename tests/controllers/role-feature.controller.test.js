const roleFeatureServices = require('../../src/services/role-feature.service');
const roleFeatureControllers = require('../../src/controllers/role-feature.controller');
const mockRole = {
  roleId: 1,
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
  ],
};

const permissions = {
  add_user: true,
  delete_user: true,
};

const allRoles = [
  {
    roleId: 1,
    roleName: 'Admin',
  },
  {
    roleId: 2,
    roleName: 'User',
  },
];

const mockReq = {
  params: {
    roleId: 1,
  },
  user: {
    userId: 1,
  },
};

const mockRes = {
  json: jest.fn(),
  status: jest.fn().mockReturnThis(),
};

describe('Role Feature Controller', () => {
  describe('getRoles', () => {
    it('should return all roles', async () => {
      jest.spyOn(roleFeatureServices, 'getRoles').mockResolvedValue(allRoles);
      await roleFeatureControllers.getRoles(mockReq, mockRes);
      expect(mockRes.json).toHaveBeenCalledWith({ data: allRoles });
    });
    it('should return an error', async () => {
      jest.spyOn(roleFeatureServices, 'getRoles').mockRejectedValue(new Error('Error'));
      await roleFeatureControllers.getRoles(mockReq, mockRes);
      expect(mockRes.status).toHaveBeenCalledWith(500);
      expect(mockRes.json).toHaveBeenCalledWith({ message: 'Error' });
    });
  });
  describe('getRole', () => {
    it('should return a role by id', async () => {
      jest.spyOn(roleFeatureServices, 'getRole').mockResolvedValue(allRoles[0]);
      await roleFeatureControllers.getRole(mockReq, mockRes);
      expect(mockRes.json).toHaveBeenCalledWith({ data: allRoles[0] });
    });
    it('should return an error', async () => {
      jest.spyOn(roleFeatureServices, 'getRole').mockRejectedValue(new Error('Error'));
      await roleFeatureControllers.getRole(mockReq, mockRes);
      expect(mockRes.status).toHaveBeenCalledWith(500);
      expect(mockRes.json).toHaveBeenCalledWith({ message: 'Error' });
    });
  });
});
