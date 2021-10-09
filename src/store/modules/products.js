const state = {
	products : [
        {
          name: "Gạo Hoa Lúa",
          type: "luong-thuc",
          cost: 125000,
          imgUrl: "productsImage/luongThuc/gaoTe/gaoHoaLua.jpg"
        },
        {
          name: "Gạo 8 Thơm",
          type: "luong-thuc",
          cost: 14000,
          imgUrl: "productsImage/luongThuc/gaoTe/gaoThom.jpg"
        },
        {
          name: "Gạo Dẻo",
          type: "luong-thuc",
          cost: 120000,
          imgUrl: "productsImage/luongThuc/gaoTe/gaoThomDeo.jpg"
        },
        {
          name: "Gạo thơm A An",
          type: "luong-thuc",
          cost: 100000,
          imgUrl: "productsImage/luongThuc/gaoTe/Ann.jpg"
        },
        {
          name: "Khoai Lang",
          type: "luong-thuc",
          cost: 25000,
          imgUrl: "productsImage/luongThuc/khoai/khoaiLang.jpg"
        },
        {
          name: "Khoai Mỡ",
          type: "luong-thuc",
          cost: 24000,
          imgUrl: "productsImage/luongThuc/khoai/khoaiMo.jpg"
        },
        {
          name: "Khoai Môn",
          type: "luong-thuc",
          cost: 26000,
          imgUrl: "productsImage/luongThuc/khoai/khoaiMon.jpg"
        },
        {
          name: "Bắp Mỹ Loại 1",
          type: "luong-thuc",
          cost: 29000,
          imgUrl: "productsImage/luongThuc/ngo/bapMy.jpg"
        },
        {
          name: "Bắp Mỹ Loại 2",
          type: "luong-thuc",
          cost: 36000,
          imgUrl: "productsImage/luongThuc/ngo/bapMy1.jpg"
        },
        {
          name: "Bắp Nếp",
          type: "luong-thuc",
          cost: 25000,
          imgUrl: "productsImage/luongThuc/ngo/bapTrang.jpg"
        },
        {
          name: "Ngũ Cốc Huyết Rồng",
          type: "luong-thuc",
          cost: 42000,
          imgUrl: "productsImage/luongThuc/nguCocCacLoai/nguCoc.jpg"
        },
        {
          name: "Ngũ Cốc Oats",
          type: "luong-thuc",
          cost: 49000,
          imgUrl: "productsImage/luongThuc/nguCocCacLoai/nguCocDinhDuong.jpg"
        },
        {
          name: "Ngũ Cốc Việt Đài",
          type: "luong-thuc",
          cost: 48000,
          imgUrl: "productsImage/luongThuc/nguCocCacLoai/nguCocDinhDuong1.jpg"
        },
        {
          name: "Sắn Đà Nẵng",
          type: "luong-thuc",
          cost: 27000,
          imgUrl: "productsImage/luongThuc/san/khoaiSan.png"
        },
        {
          name: "Sẵn Mì",
          type: "luong-thuc",
          cost: 29000,
          imgUrl: "productsImage/luongThuc/san/sanNgon.jpg"
        },
        {
          name: "Sẵn Hà Nội",
          type: "luong-thuc",
          cost: 24000,
          imgUrl: "productsImage/luongThuc/san/sanNgon1.jpg"
        },
          {
            name: "Bánh Cosy Marie",
            type: "banh-keo",
            cost: 46000,
            imgUrl: "productsImage/banhKeo/banh/banhQuy.jpg"
          },
          {
            name: "Choco-Pie Tình",
            type: "banh-keo",
            cost: 49000,
            imgUrl: "productsImage/banhKeo/banh/chocoPie.jpg"
          },
          {
            name: "Oreo",
            type: "banh-keo",
            cost: 12000,
            imgUrl: "productsImage/banhKeo/banh/socolate.jpg"
          },
          {
            name: "Choco-Pie Dark",
            type: "banh-keo",
            cost: 49000,
            imgUrl: "productsImage/banhKeo/banh/Orion.jpg"
          },
          {
            name: "Kẹo sữa Sumika",
            type: "banh-keo",
            cost: 32000,
            imgUrl: "productsImage/banhKeo/keo/keoBo.jpg"
          },
          {
            name: "Kẹo Chupa Chups",
            type: "banh-keo",
            cost: 32000,
            imgUrl: "productsImage/banhKeo/keo/keoDeo.jpg"
          },
          {
            name: "Kẹo Migita",
            type: "banh-keo",
            cost: 8000,
            imgUrl: "productsImage/banhKeo/keo/keoMe.jpg"
          },
          {
            name: "Kẹo Galatine",
            type: "banh-keo",
            cost: 59000,
            imgUrl: "productsImage/banhKeo/keo/Galatine.jpg"
          },
            {
              name: "Bột ngọt Ajinomoto",
              type: "gia-vi",
              cost: 65000,
              imgUrl: "productsImage/giaVi/botNgot/botNgotAjinomoto.jpg"
            },
            {
              name: "Bột Ngọt hạt nhỏ",
              type: "gia-vi",
              cost: 56000,
              imgUrl: "productsImage/giaVi/botNgot/botNgotHatNho.jpg"
            },
            {
              name: "Bột Ngọt hạt lớn",
              type: "gia-vi",
              cost: 48000,
              imgUrl: "productsImage/giaVi/botNgot/botNgotHatLon.jpg"
            },
            {
              name: "Muối Sa Ớt",
              type: "gia-vi",
              cost: 10000,
              imgUrl: "productsImage/giaVi/muoi/muoiSaOt.jpg"
            },
            {
              name: "Muối Tiêu Chanh",
              type: "gia-vi",
              cost: 14000,
              imgUrl: "productsImage/giaVi/muoi/muoiTieuChanh.jpg"
            },
            {
              name: "Muối Tiêu đen",
              type: "gia-vi",
              cost: 12000,
              imgUrl: "productsImage/giaVi/muoi/muoiTieuDen.jpg"
            },
            {
              name: "Nước Mắm NN",
              type: "gia-vi",
              cost: 26000,
              imgUrl: "productsImage/giaVi/nuocMam/nuocMamNamNgu.jpg"
            },
            {
              name: "Nước Mắm PT",
              type: "gia-vi",
              cost: 39000,
              imgUrl: "productsImage/giaVi/nuocMam/nuocMamPhanThiet.jpg"
            },
            {
              name: "Nước Mắm Rim",
              type: "gia-vi",
              cost: 29000,
              imgUrl: "productsImage/giaVi/nuocMam/nuocMamRin.jpg"
            },
            {
              name: "Tương ớt",
              type: "gia-vi",
              cost: 11000,
              imgUrl: "productsImage/giaVi/tuongOt/tuongOt.jpg"
            },
            {
              name: "Tương ớt cay",
              type: "gia-vi",
              cost: 14000,
              imgUrl: "productsImage/giaVi/tuongOt/tuongOtCay.jpg"
            },
            {
              name: "Tương ớt gừng",
              type: "gia-vi",
              cost: 19000,
              imgUrl: "productsImage/giaVi/tuongOt/tuongOtGungjpg.jpg"
            },




              // {
              //   name: "Muối Tiêu đen",
              //   type: "nhu-yeu-pham-khac",
              //   cost: 59000,
              //   imgUrl: "productsImage/nhuYeuPhamKhac/daoThot/thotGoXaCu.jpg"
              // },
              {
                name: "Thớt Tròn",
                type: "nhu-yeu-pham-khac",
                cost: 100000,
                imgUrl: "productsImage/nhuYeuPhamKhac/daoThot/thotTron.jpg"
              },
              {
                name: "Gel Rửa Tay",
                type: "nhu-yeu-pham-khac",
                cost: 59000,
                imgUrl: "productsImage/nhuYeuPhamKhac/nhuyeupham/gelruatay1.jpg"
              },
              {
                name: "Gel Rửa Tay",
                type: "nhu-yeu-pham-khac",
                cost: 59000,
                imgUrl: "productsImage/nhuYeuPhamKhac/nhuyeupham/gelruatay2.jpg"
              },
              {
                name: "Giấy vệ sinh",
                type: "nhu-yeu-pham-khac",
                cost: 60000,
                imgUrl: "productsImage/nhuYeuPhamKhac/nhuyeupham/giayvesinh1.jpg"
              },
              {
                name: "Giấy vệ sinh",
                type: "nhu-yeu-pham-khac",
                cost: 80000,
                imgUrl: "productsImage/nhuYeuPhamKhac/nhuyeupham/giayvesinh2.jpg"
              },
              {
                name: "Giấy vệ sinh",
                type: "nhu-yeu-pham-khac",
                cost: 30000,
                imgUrl: "productsImage/nhuYeuPhamKhac/nhuyeupham/giayvesinh3.jpg"
              },
              {
                name: "Kem CloseUp",
                type: "nhu-yeu-pham-khac",
                cost: 45000,
                imgUrl: "productsImage/nhuYeuPhamKhac/nhuyeupham/kemdanhrangclose.jpg"
              },
              {
                name: "Kem PS",
                type: "nhu-yeu-pham-khac",
                cost: 39000,
                imgUrl: "productsImage/nhuYeuPhamKhac/nhuyeupham/kemdanhrangps.jpg"
              },
              {
                name: "Khăn Giấy",
                type: "nhu-yeu-pham-khac",
                cost: 29000,
                imgUrl: "productsImage/nhuYeuPhamKhac/nhuyeupham/khangiay.jpg"
              },
              {
                name: "Khẩu trang 3D",
                type: "nhu-yeu-pham-khac",
                cost: 79000,
                imgUrl: "productsImage/nhuYeuPhamKhac/nhuyeupham/khautrang3d.jpg"
              },
              {
                name: "Khẩu Trang 4 lớp",
                type: "nhu-yeu-pham-khac",
                cost: 50000,
                imgUrl: "productsImage/nhuYeuPhamKhac/nhuyeupham/khautrang4lop.jpg"
              },
              {
                name: "Tả Bobby",
                type: "nhu-yeu-pham-khac",
                cost: 259000,
                imgUrl: "productsImage/nhuYeuPhamKhac/nhuyeupham/tabobby.jpg"
              },
              {
                name: "Tả Pamper",
                type: "nhu-yeu-pham-khac",
                cost: 400000,
                imgUrl: "productsImage/nhuYeuPhamKhac/nhuyeupham/tapamper.jpg"
              },
              {
                name: "Khăn Ướt",
                type: "nhu-yeu-pham-khac",
                cost: 34000,
                imgUrl: "productsImage/nhuYeuPhamKhac/taDoChoBe/khanUot.jpg"
              },
              {
                name: "Khăn Ướt",
                type: "nhu-yeu-pham-khac",
                cost: 39000,
                imgUrl: "productsImage/nhuYeuPhamKhac/taDoChoBe/khanUot1.jpg"
              },
              {
                name: "Khăn Ướt Vip",
                type: "nhu-yeu-pham-khac",
                cost: 89000,
                imgUrl: "productsImage/nhuYeuPhamKhac/taDoChoBe/khanUotCaoCap.jpg"
              },




              {
                name: "Bột Bánh",
                type: "thuc-pham-dong-goi",
                cost: 19000,
                imgUrl: "productsImage/thucPhamDongGoi/botKho/botBanh.jpg"
              },
              {
                name: "Bột Mì",
                type: "thuc-pham-dong-goi",
                cost: 10000,
                imgUrl: "productsImage/thucPhamDongGoi/botKho/botMi.jpg"
              },
              {
                name: "Bột Chiên Giòn",
                type: "thuc-pham-dong-goi",
                cost: 19000,
                imgUrl: "productsImage/thucPhamDongGoi/botKho/botTamChienDon.jpg"
              },
              {
                name: "Cá Mòi",
                type: "thuc-pham-dong-goi",
                cost: 19000,
                imgUrl: "productsImage/thucPhamDongGoi/caHop/caMoi.jpg"
              },
              {
                name: "Cá Ngứ",
                type: "thuc-pham-dong-goi",
                cost: 129000,
                imgUrl: "productsImage/thucPhamDongGoi/caHop/caNgu.jpg"
              },
              {
                name: "Cá Trích",
                type: "thuc-pham-dong-goi",
                cost: 89000,
                imgUrl: "productsImage/thucPhamDongGoi/caHop/caTrich.jpg"
              },
              {
                name: "Sữa có đường",
                type: "thuc-pham-dong-goi",
                cost: 29000,
                imgUrl: "productsImage/thucPhamDongGoi/suaHop/coDuong.jpg"
              },
              {
                name: "Trà Sữa Matcha",
                type: "thuc-pham-dong-goi",
                cost: 39000,
                imgUrl: "productsImage/thucPhamDongGoi/suaHop/traSuaMatCha.jpg"
              },
              {
                name: "Sữa VinaMilk",
                type: "thuc-pham-dong-goi",
                cost: 30000,
                imgUrl: "productsImage/thucPhamDongGoi/suaHop/vinamilk.jpg"
              },
              {
                name: "Bò Nấu Đậu(1hộp)",
                type: "thuc-pham-dong-goi",
                cost: 39000,
                imgUrl: "productsImage/thucPhamDongGoi/thitHop/boNauDau.jpg"
              },
              {
                name: "Giò Heo",
                type: "thuc-pham-dong-goi",
                cost: 129000,
                imgUrl: "productsImage/thucPhamDongGoi/thitHop/gioHeo.jpg"
              },
              {
                name: "Sườn Heo(1hộp)",
                type: "thuc-pham-dong-goi",
                cost: 35000,
                imgUrl: "productsImage/thucPhamDongGoi/thitHop/suonHeo.jpg"
              },
              {
                name: "Bò Bít Tết(1hộp)",
                type: "thuc-pham-dong-goi",
                cost: 55000,
                imgUrl: "productsImage/thucPhamDongGoi/thucphamdonggoi/bobittet.jpg"
              },
              {
                name: "Cá Ngừ (1hộp)",
                type: "thuc-pham-dong-goi",
                cost: 34000,
                imgUrl: "productsImage/thucPhamDongGoi/thucphamdonggoi/cangu.jpg"
              },
              {
                name: "Chả cá",
                type: "thuc-pham-dong-goi",
                cost: 32000,
                imgUrl: "productsImage/thucPhamDongGoi/thucphamdonggoi/chaca.jpg"
              },
              {
                name: "Chả cá hấp",
                type: "thuc-pham-dong-goi",
                cost: 39000,
                imgUrl: "productsImage/thucPhamDongGoi/thucphamdonggoi/chacahap.jpg"
              },
              {
                name: "Cá viên(1 túi)",
                type: "thuc-pham-dong-goi",
                cost: 75000,
                imgUrl: "productsImage/thucPhamDongGoi/thucphamdonggoi/chacavien.jpg"
              },
              {
                name: "Chả Lụa(0.5kg)",
                type: "thuc-pham-dong-goi",
                cost: 90000,
                imgUrl: "productsImage/thucPhamDongGoi/thucphamdonggoi/chalua.jpg"
              },
              {
                name: "Heo hai lát(1hộp)",
                type: "thuc-pham-dong-goi",
                cost: 24000,
                imgUrl: "productsImage/thucPhamDongGoi/thucphamdonggoi/heo2lat.jpg"
              },
              {
                name: "Sườn hầm đậu(1hộp)",
                type: "thuc-pham-dong-goi",
                cost: 29000,
                imgUrl: "productsImage/thucPhamDongGoi/thucphamdonggoi/suonham.jpg"
              },
              


              {
                name: "Cá Hồi(1kg)",
                type: "thuc-pham-tuoi-song",
                cost: 300000,
                imgUrl: "productsImage/thucPhamTuoiSong/ca/caHoi.jpeg"
              },
              {
                name: "Cá Nục(1kg)",
                type: "thuc-pham-tuoi-song",
                cost: 50000,
                imgUrl: "productsImage/thucPhamTuoiSong/ca/caNuc.jpg"
              },
              {
                name: "Cá Trích(1kg)",
                type: "thuc-pham-tuoi-song",
                cost: 80000,
                imgUrl: "productsImage/thucPhamTuoiSong/ca/caTrich.jpg"
              },
              {
                name: "Đùi Gà(1kg)",
                type: "thuc-pham-tuoi-song",
                cost: 70000,
                imgUrl: "productsImage/thucPhamTuoiSong/giaCam/duiGa.jpg"
              },
              {
                name: "Mề Gà(0.5kg) ",
                type: "thuc-pham-tuoi-song",
                cost: 50000,
                imgUrl: "productsImage/thucPhamTuoiSong/giaCam/meGa.jpeg"
              },
              {
                name: "Ức Gà(1kg)",
                type: "thuc-pham-tuoi-song",
                cost: 60000,
                imgUrl: "productsImage/thucPhamTuoiSong/giaCam/ucGa.jpeg"
              },
              {
                name: "Thịt Bò Úc(100g)",
                type: "thuc-pham-tuoi-song",
                cost: 42000,
                imgUrl: "productsImage/thucPhamTuoiSong/thit/boUc.jpeg"
              },
              {
                name: "Thịt Thăn Bò(1kg)",
                type: "thuc-pham-tuoi-song",
                cost: 270000,
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
