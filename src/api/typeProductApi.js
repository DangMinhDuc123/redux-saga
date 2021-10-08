import axiosClient from "./axiosClient";

const typeProductApi = {
    getAll(params) {
        const url = '/data-types';
        return axiosClient.get(url, { params });
    },
    getById(id) {
        const url = `/data-types/${id}`;
        return axiosClient.get(url);
    },
    add(data) {
        const url = '/data-types';
        return axiosClient.post(url, data);
    },
    update(data) {
        const url = `/data-types/${data.id}`;
        return axiosClient.put(url, data);
    },
    remove(id) {
        const url = `/data-types/${id}`;
        return axiosClient.delete(url);
    },
};

export default typeProductApi;