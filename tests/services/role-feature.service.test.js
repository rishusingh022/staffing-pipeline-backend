const db = require('../../src/models');
const { HttpError } = require('../../src/utils/httpError');
const roleFeatureService = require('../../src/services/role-feature.service');
const mockRole = {
  roleId: 1,
  roleName: 'Admin',
  features: [
    {
      featureName: 'Add User',
      featureAvailable: true,
    },
    {
      featureName: 'Delete User',
      featureAvailable: true,
    },
  ],
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

describe('Role Feature Service', () => {
  describe('getRoles', () => {
    it('should return all roles', async () => {
      jest.spyOn(db.role, 'findAll').mockResolvedValue(allRoles);
      const roles = await roleFeatureService.getRoles();
      expect(roles).toEqual(allRoles);
    });
  });
  describe('getRole', () => {
    it('should return a role by id', async () => {
      jest.spyOn(db.role, 'findByPk').mockResolvedValue(allRoles[0]);
      const role = await roleFeatureService.getRole(1);
      expect(role).toEqual(allRoles[0]);
    });
    it('should throw an error if role not found', async () => {
      jest.spyOn(db.role, 'findByPk').mockResolvedValue(null);
      await expect(roleFeatureService.getRole(1)).rejects.toThrow(HttpError);
    });
  });
  describe('getRoleFeatures', () => {
    it('should return a role with features', async () => {
      jest.spyOn(db.role, 'findByPk').mockResolvedValue(mockRole);
      const role = await roleFeatureService.getRoleFeatures([1]);
      expect(role).toEqual([mockRole]);
    });
  });
  describe('getAllFeatures', () => {
    it('should return all features', async () => {
      jest.spyOn(db.feature, 'findAll').mockResolvedValue(mockRole.features);
      const features = await roleFeatureService.getAllFeatures();
      expect(features).toEqual(mockRole.features);
    });
  });
});
