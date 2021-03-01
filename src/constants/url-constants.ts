export class UrlConstants {
  constructor() {}
  static URLS = {
    DEV_URL: 'https://mcapi-qa.kaakateeya.com',
  };
  static ENDPOINTS = {
    stage_URL:
      'http://ec2-35-154-46-177.ap-south-1.compute.amazonaws.com/swagger',

    // DEV_URL: 'http://localhost',
    DEV_URL: 'http://13.235.95.164',
    ADD_USER: 'api/emp/emp',
    GET_USERS: 'api/emp/getAllEmp',
    DELETE_EMP: 'api/emp/deleteEmp',
    GET_GRAPH_DATA_ACCOUNTS: '/api/emp/getAccountGraphData',
    GET_GRAPH_DATA_PRACTICE: '/api/emp/getPracticeGraphData',
    USER_LOGIN: '/api/auth/login',
    AUTHENTICATE_USER: '/api/auth/authenticate',
    GET_SUMMERY_COUNT: '/api/emp/getAllCounts',
    // Hr Dashboadr url
    GET_HR_HEADER_DATA: '/api/hr/getHeaderData',
    GET_HR_ONBOARDED_SEPERATED_Data: '/api/hr/getOnboardedSeperatedgraphData',
    GET_HR_ACCOUNT_WISE_Data: '/api/hr/getEmployeeAttritiongraphData',
    GET_HR_HEADCOUNT_DEMOGRAPHIC_Data: '/api/hr/getDemographicsgraphData',
    GET_TOP_THREE_REASON_Data: '/api/hr/getTopThreeReason',
    GET_EMPLOYEE_ATTRITION_Data: '/api/hr/getEmployeeAttrition',
    GET_VOLUNTARY_ANALYSIS_Data: '/api/hr/getVoluntaryAttritionData',
    GET_EMPLOYEE_ENGAGEMENT_Data: '/api/hr/getEmployeeEngagement',
    GET_POST_ENGAGEMENT_Data: '/api/hr/getPostEngagement',

    // News and notification url
    CREATE_NEWS:'/api/news/createNews',
    GET_ALL_NEWS_Data: '/api/news/getAllNews',
    GET_ALL_PUBLISH_NEWS_Data: '/api/news/getPublishNews',
    GET_PUBLISH_NEWS_BY_DEPT: '/api/news/getPublishNewsByDept/:id',
    DELETE_NEWS: '/api/news/deletenews/:id',

    GET_ALL_NOTIFICATION_Data: '/api/notification/getAllNotification',
    GET_PUBLISH_NOTIFICATION_Data: '/api/notification/getPublishNotification',
  };
}
