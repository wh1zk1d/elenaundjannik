import MusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'

import topOfTheWorld from '../assets/songs/top_of_the_world.mp3'
import topOfTheWorldCover from '../assets/img/top_of_the_world_cover.jpg'

import nurEinWort from '../assets/songs/nur_ein_wort.mp3'
import nurEinWortCover from '../assets/img/nur_ein_wort_cover.jpg'

import mac from '../assets/songs/let_my_baby_stay.mp3'
import macCover from '../assets/img/salad_days_cover.png'

import ganzEgal from '../assets/songs/ganz_egal.mp3'
import ganzEgalCover from '../assets/img/ganz_egal_cover.jpg'

const songs = [
  {
    name: 'Top of the world',
    singer: 'Carpenters',
    musicSrc: topOfTheWorld,
    cover: topOfTheWorldCover,
  },
  {
    name: 'Nur ein Wort',
    singer: 'Wir sind Helden',
    musicSrc: nurEinWort,
    cover: nurEinWortCover,
  },
  {
    name: 'Let my baby stay',
    singer: 'Mac DeMarco',
    musicSrc: mac,
    cover: macCover,
  },
  {
    name: 'Ganz egal',
    singer: 'AnnenMayKantereit',
    musicSrc: ganzEgal,
    cover: ganzEgalCover,
  },
]

const options = {
  audioLists: songs,
  autoPlay: false,
  glassBg: true,
  mode: 'full',
  showThemeSwitch: false,
  showPlayMode: false,
  showDownload: false,
  showReload: false,
  toggleMode: false,
  responsive: false,
}

const Player = () => <MusicPlayer {...options} />

export default Player
