import { TechnologiesEnum, WorkType } from "../../types"

class Work {
  id: string
  name: string
  desc: string
  technologies: TechnologiesEnum[]
  bgImageUrl: string
  mockupUrl: string
  url: string
  bgColor: string

  constructor(
    id = "01",
    name = "Great Project",
    desc = "Great Desc",
    technologies = [TechnologiesEnum.flutter],
    bgImageUrl: string,
    mockupUrl: string,
    url = "http://localhost:5000",
    bgColor: string
  ) {
    this.id = id
    this.name = name
    this.desc = desc
    this.technologies = technologies
    this.bgImageUrl = bgImageUrl
    this.mockupUrl = mockupUrl
    this.url = url
    this.bgColor = bgColor
  }
}

export const worksData: WorkType[] = [
  // new Work(
  //   "01",
  //   "coderhouse (in progress)",
  //   "web app & realtime voice call",
  //   [
  //     TechnologiesEnum.reactjs,
  //     TechnologiesEnum.recoiljs,
  //     TechnologiesEnum.webrtc,
  //     TechnologiesEnum.socketio,
  //   ],
  //   "/images/bgs/coderhouse.jpg",
  //   "",
  //   "",
  //   ""
  // ),
  new Work(
    "01",
    "just eats",
    "realtime food delivery app",
    [
      TechnologiesEnum.reactnative,
      TechnologiesEnum.nestjs,
      TechnologiesEnum.graphql,
      TechnologiesEnum.apollo,
      TechnologiesEnum.typescript,
    ],
    "",
    "/images/bgs/just-eats.png",
    "https://github.com/saurabh-619/just-eats",
    "#A6B1E1"
  ),
  new Work(
    "02",
    "project tracker",
    "productivity web app for startups",
    [
      TechnologiesEnum.reactjs,
      TechnologiesEnum.reduxjs,
      TechnologiesEnum.tailwind,
      TechnologiesEnum.nlp,
      TechnologiesEnum.nodejs,
      TechnologiesEnum.mongodb,
      TechnologiesEnum.firebase,
    ],
    "/images/bgs/project-tracker.svg",
    "/images/works/projecttracker.png",
    "https://project-tracker-web.herokuapp.com/",
    "#ffc93c"
  ),
  new Work(
    "03",
    "kira skin cancer foundation",
    "open source web app",
    [
      TechnologiesEnum.reactjs,
      TechnologiesEnum.cnnDeepLearning,
      TechnologiesEnum.mapbox,
      TechnologiesEnum.socketio,
      TechnologiesEnum.nodejs,
      TechnologiesEnum.mongodb,
    ],
    "/images/bgs/kira.svg",
    "/images/works/kira.png",
    "https://kira-skin-cancer.netlify.app/",
    "#ff2e63"
  ),
  new Work(
    "04",
    "crypto tracker",
    "desktop crypto coin app",
    [TechnologiesEnum.electronjs, TechnologiesEnum.reactjs],
    "/images/bgs/crypto.svg",
    "/images/bgs/crypto.svg",
    "https://github.com/saurabh-619/crypto-tracker/releases/tag/v0.1.0",
    "#DB9FE5"
  ),
  new Work(
    "05",
    "sbcart",
    "shopping app",
    [
      TechnologiesEnum.flutter,
      TechnologiesEnum.firebase,
      TechnologiesEnum.razorpay,
    ],
    "/images/bgs/sbcart.png",
    "/images/works/sbcart.png",
    "https://drive.google.com/file/d/1H_1xS16hFBAKEzUsPQySHXKmJ0vCu1T5/view?usp=drivesdk",
    "#032b5c"
  ),
  new Work(
    "06",
    "homiegram",
    "social media app",
    [
      TechnologiesEnum.flutter,
      TechnologiesEnum.firebase,
      TechnologiesEnum.googleoauth,
    ],
    "/images/bgs/homiegram.png",
    "/images/works/homiegram.png",
    "https://drive.google.com/file/d/1FIcY_z7b6vqSaoudrm7oKSRPmZHmqfHn/view?usp=drivesdk",
    "#fe8668"
  ),
]
