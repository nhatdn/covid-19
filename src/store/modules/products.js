const state = {
	products : [
        {
          name: "Gạo Hoa Lúa",
          type: "luong-thuc",
          cost: "46.000đ",
          imgUrl: "productsImage/luongThuc/gaoTe/gaoHoaLua.jpg"
        },
        {
          name: "Gạo 8 Thơm",
          type: "luong-thuc",
          cost: "49.000đ",
          imgUrl: "productsImage/luongThuc/gaoTe/gaoThom.jpg"
        },
        {
          name: "Gạo Dẻo",
          type: "luong-thuc",
          cost: "12.000đ",
          imgUrl: "productsImage/luongThuc/gaoTe/gaoThomDeo.jpg"
        },
        {
          name: "Gạo thơm A An",
          type: "luong-thuc",
          cost: "49.000đ",
          imgUrl: "productsImage/luongThuc/gaoTe/Ann.jpg"
        },
        {
          name: "Khoai Lang",
          type: "luong-thuc",
          cost: "20.000đ",
          imgUrl: "productsImage/luongThuc/khoai/khoaiLang.jpg"
        },
        {
          name: "Khoai Mỡ",
          type: "luong-thuc",
          cost: "32.000đ",
          imgUrl: "productsImage/luongThuc/khoai/khoaiMo.jpg"
        },
        {
          name: "Khoai Môn",
          type: "luong-thuc",
          cost: "8.000đ",
          imgUrl: "productsImage/luongThuc/khoai/khoaiMon.jpg"
        },
        {
          name: "Bắp Mỹ Loại 1",
          type: "luong-thuc",
          cost: "59.000đ",
          imgUrl: "productsImage/luongThuc/ngo/bapMy.jpg"
        },
        {
          name: "Bắp Mỹ Loại 2",
          type: "luong-thuc",
          cost: "59.000đ",
          imgUrl: "productsImage/luongThuc/ngo/bapMy1.jpg"
        },
        {
          name: "Bắp Nếp",
          type: "luong-thuc",
          cost: "59.000đ",
          imgUrl: "productsImage/luongThuc/ngo/bapTrang.jpg"
        },
        {
          name: "Ngũ Cốc Huyết Rồng",
          type: "luong-thuc",
          cost: "59.000đ",
          imgUrl: "productsImage/luongThuc/nguCocCacLoai/nguCoc.jpg"
        },
        {
          name: "Ngũ Cốc Oats",
          type: "luong-thuc",
          cost: "59.000đ",
          imgUrl: "productsImage/luongThuc/nguCocCacLoai/nguCocDinhDuong.jpg"
        },
        {
          name: "Ngũ Cốc Việt Đài",
          type: "luong-thuc",
          cost: "59.000đ",
          imgUrl: "productsImage/luongThuc/nguCocCacLoai/nguCocDinhDuong1.jpg"
        },
        {
          name: "Sắn Đà Nẵng",
          type: "luong-thuc",
          cost: "59.000đ",
          imgUrl: "productsImage/luongThuc/san/khoaiSan.png"
        },
        {
          name: "Sẵn Mì",
          type: "luong-thuc",
          cost: "59.000đ",
          imgUrl: "productsImage/luongThuc/san/sanNgon.jpg"
        },
        {
          name: "Sẵn Hà Nội",
          type: "luong-thuc",
          cost: "59.000đ",
          imgUrl: "productsImage/luongThuc/san/sanNgon1.jpg"
        },
          {
            name: "Bánh Cosy Marie",
            type: "banh-keo",
            cost: "46.000đ",
            imgUrl: "productsImage/banhKeo/banh/banhQuy.jpg"
          },
          {
            name: "Choco-Pie Tình",
            type: "banh-keo",
            cost: "49.000đ",
            imgUrl: "productsImage/banhKeo/banh/chocoPie.jpg"
          },
          {
            name: "Oreo",
            type: "banh-keo",
            cost: "12.000đ",
            imgUrl: "productsImage/banhKeo/banh/socolate.jpg"
          },
          {
            name: "Choco-Pie Dark",
            type: "banh-keo",
            cost: "49.000đ",
            imgUrl: "productsImage/banhKeo/banh/Orion.jpg"
          },
          {
            name: "Kẹo sữa Sumika",
            type: "banh-keo",
            cost: "20.000đ",
            imgUrl: "productsImage/banhKeo/keo/keoBo.jpg"
          },
          {
            name: "Kẹo Chupa Chups",
            type: "banh-keo",
            cost: "32.000đ",
            imgUrl: "productsImage/banhKeo/keo/keoDeo.jpg"
          },
          {
            name: "Kẹo Migita",
            type: "banh-keo",
            cost: "8.000đ",
            imgUrl: "productsImage/banhKeo/keo/keoMe.jpg"
          },
          {
            name: "Kẹo Galatine",
            type: "banh-keo",
            cost: "59.000đ",
            imgUrl: "productsImage/banhKeo/keo/Galatine.jpg"
          },
            {
              name: "Bột ngọt Ajinomoto",
              type: "gia-vi",
              cost: "59.000đ",
              imgUrl: "productsImage/giaVi/botNgot/botNgotAjinomoto.jpg"
            },
            {
              name: "Bột Ngọt hạt nhỏ",
              type: "gia-vi",
              cost: "59.000đ",
              imgUrl: "productsImage/giaVi/botNgot/botNgotHatNho.jpg"
            },
            {
              name: "Bột Ngọt hạt lớn",
              type: "gia-vi",
              cost: "59.000đ",
              imgUrl: "productsImage/giaVi/botNgot/botNgotHatLon.jpg"
            },
            {
              name: "Muối Sa Ớt",
              type: "gia-vi",
              cost: "59.000đ",
              imgUrl: "productsImage/giaVi/muoi/muoiSaOt.jpg"
            },
            {
              name: "Muối Tiêu Chanh",
              type: "gia-vi",
              cost: "59.000đ",
              imgUrl: "productsImage/giaVi/muoi/muoiTieuChanh.jpg"
            },
            {
              name: "Muối Tiêu đen",
              type: "gia-vi",
              cost: "59.000đ",
              imgUrl: "productsImage/giaVi/muoi/muoiTieuDen.jpg"
            },
            {
              name: "Muối Tiêu đen",
              type: "gia-vi",
              cost: "59.000đ",
              imgUrl: "productsImage/giaVi/nuocMam/nuocMamNamNgu.jpg"
            },
            {
              name: "Muối Tiêu đen",
              type: "gia-vi",
              cost: "59.000đ",
              imgUrl: "productsImage/giaVi/nuocMam/nuocMamPhanThiet.jpg"
            },
            {
              name: "Muối Tiêu đen",
              type: "gia-vi",
              cost: "59.000đ",
              imgUrl: "productsImage/giaVi/nuocMam/nuocMamRin.jpg"
            },
            {
              name: "Muối Tiêu đen",
              type: "gia-vi",
              cost: "59.000đ",
              imgUrl: "productsImage/giaVi/tuongOt/tuongOt.jpg"
            },
            {
              name: "Muối Tiêu đen",
              type: "gia-vi",
              cost: "59.000đ",
              imgUrl: "productsImage/giaVi/tuongOt/tuongOtCay.jpg"
            },
            {
              name: "Muối Tiêu đen",
              type: "gia-vi",
              cost: "59.000đ",
              imgUrl: "productsImage/giaVi/tuongOt/tuongOtGungjpg.jpg"
            },




              // {
              //   name: "Muối Tiêu đen",
              //   type: "nhu-yeu-pham-khac",
              //   cost: "59.000đ",
              //   imgUrl: "productsImage/nhuYeuPhamKhac/daoThot/thotGoXaCu.jpg"
              // },
              {
                name: "Muối Tiêu đen",
                type: "nhu-yeu-pham-khac",
                cost: "59.000đ",
                imgUrl: "productsImage/nhuYeuPhamKhac/daoThot/thotTron.jpg"
              },
              {
                name: "Muối Tiêu đen",
                type: "nhu-yeu-pham-khac",
                cost: "59.000đ",
                imgUrl: "productsImage/nhuYeuPhamKhac/nhuyeupham/gelruatay1.jpg"
              },
              {
                name: "Muối Tiêu đen",
                type: "nhu-yeu-pham-khac",
                cost: "59.000đ",
                imgUrl: "productsImage/nhuYeuPhamKhac/nhuyeupham/gelruatay2.jpg"
              },
              {
                name: "Muối Tiêu đen",
                type: "nhu-yeu-pham-khac",
                cost: "59.000đ",
                imgUrl: "productsImage/nhuYeuPhamKhac/nhuyeupham/giayvesinh1.jpg"
              },
              {
                name: "Muối Tiêu đen",
                type: "nhu-yeu-pham-khac",
                cost: "59.000đ",
                imgUrl: "productsImage/nhuYeuPhamKhac/nhuyeupham/giayvesinh2.jpg"
              },
              {
                name: "Muối Tiêu đen",
                type: "nhu-yeu-pham-khac",
                cost: "59.000đ",
                imgUrl: "productsImage/nhuYeuPhamKhac/nhuyeupham/giayvesinh3.jpg"
              },
              {
                name: "Muối Tiêu đen",
                type: "nhu-yeu-pham-khac",
                cost: "59.000đ",
                imgUrl: "productsImage/nhuYeuPhamKhac/nhuyeupham/kemdanhrangclose.jpg"
              },
              {
                name: "Muối Tiêu đen",
                type: "nhu-yeu-pham-khac",
                cost: "59.000đ",
                imgUrl: "productsImage/nhuYeuPhamKhac/nhuyeupham/kemdanhrangps.jpg"
              },
              {
                name: "Muối Tiêu đen",
                type: "nhu-yeu-pham-khac",
                cost: "59.000đ",
                imgUrl: "productsImage/nhuYeuPhamKhac/nhuyeupham/khangiay.jpg"
              },
              {
                name: "Muối Tiêu đen",
                type: "nhu-yeu-pham-khac",
                cost: "59.000đ",
                imgUrl: "productsImage/nhuYeuPhamKhac/nhuyeupham/khautrang3d.jpg"
              },
              {
                name: "Muối Tiêu đen",
                type: "nhu-yeu-pham-khac",
                cost: "59.000đ",
                imgUrl: "productsImage/nhuYeuPhamKhac/nhuyeupham/khautrang4lop.jpg"
              },
              {
                name: "Muối Tiêu đen",
                type: "nhu-yeu-pham-khac",
                cost: "59.000đ",
                imgUrl: "productsImage/nhuYeuPhamKhac/nhuyeupham/tabobby.jpg"
              },
              {
                name: "Muối Tiêu đen",
                type: "nhu-yeu-pham-khac",
                cost: "59.000đ",
                imgUrl: "productsImage/nhuYeuPhamKhac/nhuyeupham/tapamper.jpg"
              },
              {
                name: "Muối Tiêu đen",
                type: "nhu-yeu-pham-khac",
                cost: "59.000đ",
                imgUrl: "productsImage/nhuYeuPhamKhac/taDoChoBe/khanUot.jpg"
              },
              {
                name: "Muối Tiêu đen",
                type: "nhu-yeu-pham-khac",
                cost: "59.000đ",
                imgUrl: "productsImage/nhuYeuPhamKhac/taDoChoBe/khanUot1.jpg"
              },
              {
                name: "Muối Tiêu đen",
                type: "nhu-yeu-pham-khac",
                cost: "59.000đ",
                imgUrl: "productsImage/nhuYeuPhamKhac/taDoChoBe/khanUotCaoCap.jpg"
              },




              {
                name: "Muối Tiêu đen",
                type: "thuc-pham-dong-goi",
                cost: "59.000đ",
                imgUrl: "productsImage/thucPhamDongGoi/botKho/botBanh.jpg"
              },
              {
                name: "Muối Tiêu đen",
                type: "thuc-pham-dong-goi",
                cost: "59.000đ",
                imgUrl: "productsImage/thucPhamDongGoi/botKho/botMi.jpg"
              },
              {
                name: "Muối Tiêu đen",
                type: "thuc-pham-dong-goi",
                cost: "59.000đ",
                imgUrl: "productsImage/thucPhamDongGoi/botKho/botTamChienDon.jpg"
              },
              {
                name: "Muối Tiêu đen",
                type: "thuc-pham-dong-goi",
                cost: "59.000đ",
                imgUrl: "productsImage/thucPhamDongGoi/caHop/caMoi.jpg"
              },
              {
                name: "Muối Tiêu đen",
                type: "thuc-pham-dong-goi",
                cost: "59.000đ",
                imgUrl: "productsImage/thucPhamDongGoi/caHop/caNgu.jpg"
              },
              {
                name: "Muối Tiêu đen",
                type: "thuc-pham-dong-goi",
                cost: "59.000đ",
                imgUrl: "productsImage/thucPhamDongGoi/caHop/caTrich.jpg"
              },
              {
                name: "Muối Tiêu đen",
                type: "thuc-pham-dong-goi",
                cost: "59.000đ",
                imgUrl: "productsImage/thucPhamDongGoi/suaHop/coDuong.jpg"
              },
              {
                name: "Muối Tiêu đen",
                type: "thuc-pham-dong-goi",
                cost: "59.000đ",
                imgUrl: "productsImage/thucPhamDongGoi/suaHop/traSuaMatCha.jpg"
              },
              {
                name: "Muối Tiêu đen",
                type: "thuc-pham-dong-goi",
                cost: "59.000đ",
                imgUrl: "productsImage/thucPhamDongGoi/suaHop/vinamilk.jpg"
              },
              {
                name: "Muối Tiêu đen",
                type: "thuc-pham-dong-goi",
                cost: "59.000đ",
                imgUrl: "productsImage/thucPhamDongGoi/thitHop/boNauDau.jpg"
              },
              {
                name: "Muối Tiêu đen",
                type: "thuc-pham-dong-goi",
                cost: "59.000đ",
                imgUrl: "productsImage/thucPhamDongGoi/thitHop/gioHeo.jpg"
              },
              {
                name: "Muối Tiêu đen",
                type: "thuc-pham-dong-goi",
                cost: "59.000đ",
                imgUrl: "productsImage/thucPhamDongGoi/thitHop/suonHeo.jpg"
              },
              {
                name: "Muối Tiêu đen",
                type: "thuc-pham-dong-goi",
                cost: "59.000đ",
                imgUrl: "productsImage/thucPhamDongGoi/thucphamdonggoi/bobittet.jpg"
              },
              {
                name: "Muối Tiêu đen",
                type: "thuc-pham-dong-goi",
                cost: "59.000đ",
                imgUrl: "productsImage/thucPhamDongGoi/thucphamdonggoi/cangu.jpg"
              },
              {
                name: "Muối Tiêu đen",
                type: "thuc-pham-dong-goi",
                cost: "59.000đ",
                imgUrl: "productsImage/thucPhamDongGoi/thucphamdonggoi/chaca.jpg"
              },
              {
                name: "Muối Tiêu đen",
                type: "thuc-pham-dong-goi",
                cost: "59.000đ",
                imgUrl: "productsImage/thucPhamDongGoi/thucphamdonggoi/chacahap.jpg"
              },
              {
                name: "Muối Tiêu đen",
                type: "thuc-pham-dong-goi",
                cost: "59.000đ",
                imgUrl: "productsImage/thucPhamDongGoi/thucphamdonggoi/chacavien.jpg"
              },
              {
                name: "Muối Tiêu đen",
                type: "thuc-pham-dong-goi",
                cost: "59.000đ",
                imgUrl: "productsImage/thucPhamDongGoi/thucphamdonggoi/chalua.jpg"
              },
              {
                name: "Muối Tiêu đen",
                type: "thuc-pham-dong-goi",
                cost: "59.000đ",
                imgUrl: "productsImage/thucPhamDongGoi/thucphamdonggoi/heo2lat.jpg"
              },
              {
                name: "Muối Tiêu đen",
                type: "thuc-pham-dong-goi",
                cost: "59.000đ",
                imgUrl: "productsImage/thucPhamDongGoi/thucphamdonggoi/suonham.jpg"
              },
              


              {
                name: "Muối Tiêu đen",
                type: "thuc-pham-tuoi-song",
                cost: "59.000đ",
                imgUrl: "productsImage/thucPhamTuoiSong/ca/caHoi.jpeg"
              },
              {
                name: "Muối Tiêu đen",
                type: "thuc-pham-tuoi-song",
                cost: "59.000đ",
                imgUrl: "productsImage/thucPhamTuoiSong/ca/caNuc.jpg"
              },
              {
                name: "Muối Tiêu đen",
                type: "thuc-pham-tuoi-song",
                cost: "59.000đ",
                imgUrl: "productsImage/thucPhamTuoiSong/ca/caTrich.jpg"
              },
              {
                name: "Muối Tiêu đen",
                type: "thuc-pham-tuoi-song",
                cost: "59.000đ",
                imgUrl: "productsImage/thucPhamTuoiSong/giaCam/duiGa.jpg"
              },
              {
                name: "Muối Tiêu đen",
                type: "thuc-pham-tuoi-song",
                cost: "59.000đ",
                imgUrl: "productsImage/thucPhamTuoiSong/giaCam/meGa.jpeg"
              },
              {
                name: "Muối Tiêu đen",
                type: "thuc-pham-tuoi-song",
                cost: "59.000đ",
                imgUrl: "productsImage/thucPhamTuoiSong/giaCam/ucGa.jpeg"
              },
              {
                name: "Muối Tiêu đen",
                type: "thuc-pham-tuoi-song",
                cost: "59.000đ",
                imgUrl: "productsImage/thucPhamTuoiSong/thit/boUc.jpeg"
              },
              {
                name: "Muối Tiêu đen",
                type: "thuc-pham-tuoi-song",
                cost: "59.000đ",
                imgUrl: "productsImage/thucPhamTuoiSong/thit/thanBo.jpeg"
              },
    ]
}

const getters = {
	products: state => state.products,
  banhKeo: state => {
      return state.products.filter(product => product.type == 'banh-keo')
  },
  luongThuc: state => {
    return state.products.filter(product => product.type == 'luong-thuc')
  },
  giaVi: state => {
    return state.products.filter(product => product.type == 'gia-vi')
  },
  nhuYeuPhamKhac: state => {
    return state.products.filter(product => product.type == 'nhu-yeu-pham-khac')
  },
  thucPhamDongGoi: state => {
    return state.products.filter(product => product.type == 'thuc-pham-dong-goi') 
  },
  thucPhamTuoiSong: state => {
    return state.products.filter(product => product.type == 'thuc-pham-tuoi-song') 
  }
}
const actions = {}

const mutations = {}

export default {
	state,
	getters,
	actions,
	mutations
}
