const kinveyKey = 'kid_ryr_EhREx';
const kinveySecret = '94fdd0928a1c4e9e9ec4d17475916971';
const kinveyAuthHeaders = { 'Authorization': 'Basic ' + btoa(kinveyKey + ':' + kinveySecret) };

export { kinveyKey, kinveySecret, kinveyAuthHeaders };
