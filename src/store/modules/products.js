import luongThuc from './product-types/type-luong-thuc.js';
import thucPhamDongGoi from './product-types/type-thuc-pham-dong-goi.js';
import giaVi from './product-types/type-gia-vi.js';
import banhKeo from './product-types/type-banh-keo.js';
import nhuYeuPhamKhac from './product-types/type-nhu-yeu-pham-khac.js';

const state = {
  products: [
    ...luongThuc,
    ...thucPhamDongGoi,
    ...giaVi,
    ...banhKeo,
    ...nhuYeuPhamKhac,
  ],
};

const getters = {
  products: (state) => state.products,
  banhKeo: (state) => {
    return state.products.filter((product) => product.type == 'banh-keo');
  },
  luongThuc: (state) => {
    return state.products.filter((product) => product.type == 'luong-thuc');
  },
  giaVi: (state) => {
    return state.products.filter((product) => product.type == 'gia-vi');
  },
  nhuYeuPhamKhac: (state) => {
    return state.products.filter(
      (product) => product.type == 'nhu-yeu-pham-khac'
    );
  },
  thucPhamDongGoi: (state) => {
    return state.products.filter(
      (product) => product.type == 'thuc-pham-dong-goi'
    );
  },
  thucPhamTuoiSong: (state) => {
    return state.products.filter(
      (product) => product.type == 'thuc-pham-tuoi-song'
    );
  },
};
const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
