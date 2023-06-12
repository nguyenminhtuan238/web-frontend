import ApiServices from './api.services';
const ArtApi = {
  add(data) {
    const url = 'blog/create/';
    return ApiServices.post(url, data);
  },
  remove(id) {
    const url = `blog/delete/${id}`;
    return ApiServices.delete(url);
  },
  get() {
    const url = 'blog/list/';
    return ApiServices.get(url);
  },
  getid(id) {
    const url = `Blog/detail/${id}`;
    return ApiServices.get(url);
  },
  update(data) {
    const url = `blog/update`;
    return ApiServices.put(url, data);
  },
};
export default ArtApi;
