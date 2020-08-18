export class UrlConstants {
  constructor() {}
  static URLS = {
    DEV_URL: 'https://mcapi-qa.kaakateeya.com',
  };
  static ENDPOINTS = {
    stage_URL:
      'http://ec2-35-154-46-177.ap-south-1.compute.amazonaws.com/swagger',

    DEV_URL: 'http://localhost:3000/',
    ADD_USER: 'api/emp/emp',
    GET_USERS: 'api/emp/getAllEmp',
    DELETE_EMP: 'api/emp/deleteEmp',
  };
}
