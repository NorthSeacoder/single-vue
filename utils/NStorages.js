const KEYS = {
    FMCOURSE: 'fm-course'
};
const isLocalStorageAvailable = () => typeof localStorage !== 'undefined';
const setJson = (key, payload) => {
    if (isLocalStorageAvailable()) {
        localStorage.setItem(key, JSON.stringify(payload));
    }
};
const getJson = key => (isLocalStorageAvailable() ? JSON.parse(localStorage.getItem(key)) : null);

export default {
    setCourseInfo: list => setJson(KEYS.FMCOURSE, list),
    getCourseInfo:()=>getJson(KEYS.FMCOURSE)
};
