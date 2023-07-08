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
  stuffLeader: [],
  setStuffLeader: (stuffLeader) => set(state => ({...state, stuffLeader: stuffLeader})),
  photos: [],
  setPhotos: (photos) => set(state => ({...state, photos: photos})),
  photo: [],
  setPhoto: (photo) => set(state => ({...state, photo: photo})),
  photo_id: [],
  setPhotoId: (id) => set(state => ({...state, photo_id: id})),
  videos: [],
  setVideos: (videos) => set(state => ({...state, videos: videos})),
  video_id: [],
  setVideoId: (id) => set(state => ({...state, video_id: id})),
}))




