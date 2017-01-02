const kinveyKey = 'kid_ryr_EhREx';
const kinveySecret = '94fdd0928a1c4e9e9ec4d17475916971';
const kinveyBasicHeaders = { 'Authorization': 'Basic ' + btoa(kinveyKey + ':' + kinveySecret) };
const guestUserAuthToken = '5f5caf62-1739-430c-9351-d3f76d7d62d0.G8Bo2PmMszHoT+fTtRlf1USGNswiJDiWU1zcwF2CghU=';
const kinveyHeaderKey = 'Authorization';
const kinveyUserAuthorization = 'Kinvey ';

const kinveyAppDataUrl = 'https://baas.kinvey.com/appdata/kid_ryr_EhREx';

const kinveyUsersProfileColleciton = '/usersProfile';
const kinveyJobsCollection = '/jobs';
const kinveyJobsApplicationsCollection = '/jobsApplications';
const kinveyCommentsCollection = '/comments';

export { kinveyKey, kinveySecret, kinveyHeaderKey, kinveyUserAuthorization, 
    kinveyBasicHeaders, kinveyAppDataUrl, guestUserAuthToken, kinveyUsersProfileColleciton,
    kinveyJobsCollection, kinveyJobsApplicationsCollection, kinveyCommentsCollection };
