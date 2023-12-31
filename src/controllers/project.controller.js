const logger = require('../logger');
const projectServices = require('../services/project.service');
const userService = require('../services/user.service');
const { HttpError } = require('../utils/httpError');
const caseStudyService = require('../services/case-study.service');
const staffingDetailsService = require('../services/staffing-details.service');

const getWholeProject = async (req, res) => {
  try {
    const { id } = req.params;
    logger.info('fetching project by id: ' + id);
    const project = await projectServices.getProject(id);

    // get users data in engagements from staffing details
    const usersInEngagement = await staffingDetailsService.getUsersInEngagement(id);
    const usersInEngagementData = await Promise.all(
      usersInEngagement.map(async entry => {
        const userData = await userService.getUser(entry.userId);
        userData.staffingEntry = entry;
        return userData;
      })
    );
    const pastUsersInEngagement = await staffingDetailsService.getPastUsersInEngagement(id);
    const pastUsersInEngagementData = await Promise.all(
      pastUsersInEngagement.map(async entry => {
        const userData = await userService.getUser(entry.userId);
        userData.staffingEntry = entry;
        return userData;
      })
    );
    // get case studies in engagement
    const caseStudiesInEngagement = await caseStudyService.getCaseStudiesByEngagementId(id);

    res.status(200).json({
      data: {
        projectData: project,
        usersInEngagement: usersInEngagementData,
        caseStudiesInEngagement: caseStudiesInEngagement,
        pastUsersInEngagement: pastUsersInEngagementData,
        user: req.user,
      },
    });
  } catch (error) {
    {
      logger.error(error);
      res.status(500).json({
        error: error.message,
        user: req.user,
      });
    }
  }
};

const getProject = async (req, res) => {
  try {
    const { id } = req.params;
    logger.info('fetching project by id: ' + id);
    const project = await projectServices.getProject(id);
    res.status(200).json({ data: project, user: req.user });
  } catch (error) {
    if (error instanceof HttpError) {
      res.status(error.statusCode).json({
        error: error.message,
        user: req.user,
      });
    } else {
      res.status(500).json({
        error: error.message,
        user: req.user,
      });
    }
  }
};
const listSectors = async (req, res) => {
  try {
    logger.info('fetching all the sectors');
    const sectors = await projectServices.getSectors();
    res.status(200).json({ data: sectors, success: true });
  } catch (error) {
    logger.error(error);
    {
      res.status(500).json({
        error: error.message,
        success: true,
      });
    }
  }
};
const listProjects = async (req, res) => {
  try {
    logger.info('fetching all the projects');
    let allProjects;
    if (req.query.page && req.query.page > 0) {
      allProjects = await projectServices.listProjects(req.query.page);
    } else {
      allProjects = await projectServices.listProjects();
    }
    res.status(200).json({ data: allProjects, success: true });
  } catch (error) {
    logger.error(error);
    {
      res.status(500).json({
        error: error.message,
        success: false,
      });
    }
  }
};

const updateProject = async (req, res) => {
  try {
    logger.info('updating project:' + req.params.id);
    const { id } = req.params;
    const { body } = req;
    const updatedProject = await projectServices.updateProject(id, body);
    if (body['userIds']) {
      const usersAlreadyInEngagement = await Promise.all(
        updatedProject.userIds.map(async userId => userService.getUser(userId))
      );
      usersAlreadyInEngagement.forEach(async user => {
        if (!body['userIds'].includes(user.userId)) {
          logger.info(`removing engagementId: ${updatedProject.engagementId} from user: ${user.userId}`);
          await userService.removeCurrentEngagement(user.userId, updatedProject.engagementId);
        }
      });
      await Promise.all(
        body['userIds'].map(userId => userService.addCurrentEngagement(userId, updatedProject.engagementId))
      );
      updatedProject['userIds'] = body['userIds'];
    }
    res.status(200).json({ data: updatedProject, user: req.user });
  } catch (error) {
    console.log(error);
    if (error instanceof HttpError) {
      res.status(error.statusCode).json({
        error: error.message,
        user: req.user,
      });
    } else {
      res.status(500).json({
        message: error.message,
        user: req.user,
      });
    }
  }
};
const deleteProject = async (req, res) => {
  try {
    logger.info('deleting project with id: ' + req.params.id);
    const { id } = req.params;
    const { userIds } = await projectServices.getProject(id);
    await userService.deleteProjectFromUsers(userIds, id);
    await caseStudyService.removeProjectFromCaseStudy(id);
    await projectServices.deleteProject(id);
    res.status(200).json({ message: 'engagement has been deleted', user: req.user });
  } catch (error) {
    logger.error(error);
    res.status(500).json({
      error: error.message,
      user: req.user,
    });
  }
};

const createProject = async (req, res) => {
  try {
    logger.info('creating a new project');
    const { body } = req;
    const createdProject = await projectServices.createProject(body);
    await Promise.all(
      createdProject?.caseStudyIds?.map(caseStudyId =>
        caseStudyService.addCurrentEngagement(caseStudyId, createdProject.engagementId)
      )
    );
    res.status(201).json({
      data: createdProject,
      user: req.user,
    });
  } catch (error) {
    logger.error(error);
    res.status(500).json({
      error: error.message,
      user: req.user,
    });
  }
};
const getProjectsMonthwise = async (req, res) => {
  try {
    const engagements = await projectServices.getEngagementsMonthwise(req.body.startDate);
    res.status(200).json({
      data: engagements,
      success: true,
    });
  } catch (error) {
    logger.error(error);
    res.status(500).json({
      error: error.message,
      success: false,
    });
  }
};
const getProjectsInMonths = async (req, res) => {
  try {
    const projectsInMonths = await projectServices.getProjectsInMonths();
    res.status(200).json({
      data: projectsInMonths,
      success: true,
    });
  } catch (error) {
    logger.error(error);
    res.status(500).json({
      error: error.message,
      success: false,
    });
  }
};

const getEngagementStatus = async (req, res) => {
  try {
    const engagementStatus = await projectServices.getEngagementStatus();
    res.status(200).json({
      data: engagementStatus,
      user: req.user,
    });
  } catch (error) {
    logger.error(error);
    res.status(500).json({
      error: error.message,
      user: req.user,
    });
  }
};
const getEngagementsCount = async (req, res) => {
  try {
    logger.info('fetching project count');
    const count = await projectServices.getEngagementsCount();
    res.status(200).json({ data: count, user: req.user });
  } catch (error) {
    logger.error(error);
    res.status(500).json({
      error: error.message,
      user: req.user,
    });
  }
};

const getProjectSectorsMetrics = async (req, res) => {
  try {
    logger.info('fetching sector metrics');
    const allEngagements = await projectServices.listProjects();
    const allSectors = await projectServices.getSectors();
    const metrics = allSectors.map(sector => {
      const engagements = allEngagements.filter(engagement => engagement.sector.name === sector.name);
      return {
        name: sector.name,
        y: engagements.length,
      };
    });
    res.status(200).json({ data: metrics, success: true });
  } catch (error) {
    logger.error(error);
    res.status(500).json({
      error: error.message,
      success: false,
    });
  }
};

const getCaseStudiesSectorMetrics = async (req, res) => {
  try {
    logger.info('fetching sector metrics');
    const allCaseStudies = await caseStudyService.listCaseStudies();
    const allSectors = await projectServices.getSectors();
    const metrics = allSectors.map(sector => {
      const caseStudies = allCaseStudies.filter(caseStudy => caseStudy.sector.name === sector.name);
      return {
        name: sector.name,
        y: caseStudies.length,
      };
    });
    res.status(200).json({ data: metrics, user: req.user });
  } catch (error) {
    logger.error(error);
    res.status(500).json({
      error: error.message,
      user: req.user,
    });
  }
};

module.exports = {
  getWholeProject,
  getProject,
  listProjects,
  deleteProject,
  updateProject,
  createProject,
  getEngagementsCount,
  getProjectsInMonths,
  getEngagementStatus,
  getProjectsMonthwise,
  listSectors,
  getProjectSectorsMetrics,
  getCaseStudiesSectorMetrics,
};
