import axios from 'axios';

const axiosClient = axios.create();

axiosClient.defaults.baseURL = 'https://staging-cuan.awalmula.co/rest/default/V1/';

axiosClient.defaults.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
};

export function getRequest(Path) {
    return axiosClient.get(`${Path}`).then(response => response);
}

export function postRequest(Path, payload) {
    return axiosClient.post(`${Path}`, payload).then(response => response);
}

export function patchRequest(Path, payload) {
    return axiosClient.patch(`${Path}`, payload).then(response => response);
}

export function deleteRequest(Path) {
    return axiosClient.delete(`${Path}`).then(response => response);
}