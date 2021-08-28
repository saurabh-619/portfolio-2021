import { TechnologiesEnum, WorkType } from '../../types';

class Work {
  id: string;
  name: string;
  desc: string;
  technology: TechnologiesEnum[];
  bgImageUrl: string;
  url: string;

  constructor(
    id = '01',
    name = 'Great Project',
    desc = 'Great Desc',
    technology = [TechnologiesEnum.flutter],
    bgImageUrl: string,
    url = 'http://localhost:5000',
  ) {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.technology = technology;
    this.bgImageUrl = bgImageUrl;
    this.url = url;
  }
}

export const worksData: WorkType[] = [
  new Work(
    '01',
    'coderhouse',
    'web app & realtime voice call',
    [
      TechnologiesEnum.reactjs,
      TechnologiesEnum.recoiljs,
      TechnologiesEnum.webrtc,
      TechnologiesEnum.socketio,
    ],
    '/images/bgs/coderhouse.jpg',
    'https://codershouse.netlify.app/',
  ),
  new Work(
    '02',
    'project tracker',
    'productivity web app for startups',
    [
      TechnologiesEnum.reactjs,
      TechnologiesEnum.reduxjs,
      TechnologiesEnum.tailwind,
      TechnologiesEnum.nlp,
      TechnologiesEnum.nodejs,
      TechnologiesEnum.mongodb,
      TechnologiesEnum.firebase,
    ],
    '/images/bgs/project-tracker.svg',
    'https://project-tracker-web.herokuapp.com/',
  ),
  new Work(
    '03',
    'kira skin cancer foundation',
    'open source web app',
    [
      TechnologiesEnum.reactjs,
      TechnologiesEnum.cnnDeepLearning,
      TechnologiesEnum.mapbox,
      TechnologiesEnum.socketio,
      TechnologiesEnum.nodejs,
      TechnologiesEnum.mongodb,
    ],
    '/images/bgs/kira.svg',
    'https://kira-skin-cancer.netlify.app/',
  ),
  new Work(
    '04',
    'sbcart',
    'shopping app',
    [TechnologiesEnum.flutter, TechnologiesEnum.firebase, TechnologiesEnum.razorpay],
    '/images/bgs/sbcart.png',
    'https://drive.google.com/file/d/1H_1xS16hFBAKEzUsPQySHXKmJ0vCu1T5/view?usp=drivesdk',
  ),
  new Work(
    '05',
    'homiegram',
    'social media app',
    [TechnologiesEnum.flutter, TechnologiesEnum.firebase, TechnologiesEnum.googleoauth],
    '/images/bgs/homiegram.png',
    'https://drive.google.com/file/d/1FIcY_z7b6vqSaoudrm7oKSRPmZHmqfHn/view?usp=drivesdk',
  ),
];
