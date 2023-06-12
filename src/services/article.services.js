import ApiadminServices from './apiad.services';
const ArtApi = {
  add(data) {
    const url = 'blog/create/';
    return ApiadminServices.post(url, data);
  },
  remove(id) {
    const url = `blog/delete/${id}`;
    return ApiadminServices.delete(url);
  },
  get() {
    const url = 'blog/list/';
    return ApiadminServices.get(url);
  },
  getid(id) {
    const url = `Blog/detail/${id}`;
    return ApiadminServices.get(url);
  },
  update(data) {
    const url = `blog/update`;
    return ApiadminServices.put(url, data);
  },
};
export default ArtApi;
