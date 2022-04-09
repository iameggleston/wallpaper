import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
// リロードしてもStateの中身を消さずに維持
// import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const initialState = {
  lists: [
    [
      {
        id: 1,
        count: 0,
        new: false,
        src: 'out-wallpaper_1'
      },
      {
        id: 2,
        count: 0,
        new: false,
        src: 'out-wallpaper_2'
      },
      {
        id: 3,
        count: 0,
        new: false,
        src: 'out-wallpaper_3'
      },
      {
        id: 4,
        count: 0,
        src: 'out-wallpaper_4'
      },
      {
        id: 5,
        count: 0,
        new: false,
        src: 'out-wallpaper_5'
      },
      {
        id: 6,
        count: 0,
        new: false,
        src: 'out-wallpaper_6'
      }
    ],
    [
      {
        id: 7,
        count: 0,
        new: true,
        src: 'wallpaper_3_1'
      },
      {
        id: 8,
        count: 0,
        new: true,
        src: 'wallpaper_3_2'
      },
      {
        id: 9,
        count: 0,
        new: true,
        src: 'wallpaper_3_3'
      },
      {
        id: 10,
        count: 0,
        new: true,
        src: 'wallpaper_3_4'
      },
      {
        id: 11,
        count: 0,
        new: true,
        src: 'wallpaper_3_5'
      },
      {
        id: 12,
        count: 0,
        new: true,
        src: 'wallpaper_3_6'
      },
      {
        id: 13,
        count: 0,
        new: true,
        src: 'wallpaper_3_7'
      },
      {
        id: 14,
        count: 0,
        new: true,
        src: 'wallpaper_3_8'
      },
      {
        id: 15,
        count: 0,
        new: false,
        src: 'wallpaper_2_1'
      },
      {
        id: 16,
        count: 0,
        new: false,
        src: 'wallpaper_2_2'
      },
      {
        id: 17,
        count: 0,
        new: false,
        src: 'wallpaper_2_3'
      },
      {
        id: 18,
        count: 0,
        new: false,
        src: 'wallpaper_2_4'
      }
    ]
  ],
  tabs: [
    {
      id: 1,
      text: '社外用',
      status: true
    },
    {
      id: 2,
      text: '社内用',
      status: false
    }
  ]
}

export default new Vuex.Store({
  state: initialState,
  mutations,
  actions,
  strict: process.env.NODE_ENV !== 'production'
})
