// eslint-disable-next-line
const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner(
  {
    serverUrl: `${process.env.SONAR_HOST_URL}`,
    options: {
      'sonar.projectKey': 'sysco_canada_customer_on_boarding_ui',
      'sonar.projectName': 'Sysco Canada Customer On-Boarding UI',
      'sonar.projectDescription': 'Sysco Canada Customer On-Boarding User Interface',
      'sonar.sources': 'src',
      'sonar.sourceEncoding': 'UTF-8',
      'sonar.exclusions': 'src/**/*.test.js,src/**/*.mock.js',
      'sonar.test.inclusions': 'src/**/*.test.js',
      'sonar.coverage.exclusions': 'src/**/*.test.js,src/**/*.mock.js,node_modules/*,coverage/**',
      'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info',
      'sonar.testExecutionReportPaths': 'test-report.xml',
      'sonar.pullrequest.key': `${process.env.UPDATED_CODEBUILD_WEBHOOK_TRIGGER}`,
      'sonar.pullrequest.branch': `${process.env.UPDATED_CODEBUILD_WEBHOOK_HEAD_REF}`,
      'sonar.pullrequest.base': `${process.env.UPDATED_CODEBUILD_WEBHOOK_BASE_REF}`
    }
  },
  () => {}
);