import axiosClient from "./axiosClient";

const typeProductApi = {
    getAll() {
        const url = '/dataType';
        return axiosClient.get(url);
    },
    getById(id) {
        const url = `/dataType/${id}`;
        return axiosClient.get(url);
    },
    add(data) {
        const url = '/dataType';
        return axiosClient.post(url, data);
    },
    update(data) {
        const url = `/dataType/${data.id}`;
        return axiosClient.patch(url, data);
    },
    remove(id) {
        const url = `/dataType/${id}`;
        return axiosClient.delete(url);
    },
};

export default typeProductApi;