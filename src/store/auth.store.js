import { create } from "zustand";


export const useAuthStore = create(set => ({
  news: [],
  setNews: (news) => set(state => ({...state, news: news})),
  new_id: {},
  setNew: (new_id) => set(state => ({...state, new_id: new_id})),
  newsId: 1,
  setNewsId: (id) => set(state => ({...state, newsId: id})),
  sponsor: [],
  setSponsor: (sponsor) => set(state => ({...state, sponsor: sponsor})),
  leaders: [],
  setLeaders: (leaders) => set(state => ({...state, leaders: leaders})),
  
}))




