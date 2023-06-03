export interface Labo {
  title: string;
  description: string;
}

export interface School {
  uname: string;
  labos: Labo[];
}

export const schools: School[] = [
  {
    uname: 'FSSM',
    labos: [
      { title: 'Labo Informatique', description: 'Labo established in the jaber iben hayan center' },
      { title: 'Labo Chemie', description: 'Labo established in the jaber iben hayan center' },
      { title: 'Labo biology', description: 'Labo established in the jaber iben hayan center' },
    ],
  },
  {
    uname: 'FSTG',
    labos: [
      { title: 'Labo Informatique', description: 'Labo established in the jaber iben hayan center' },
      { title: 'Labo Chemie', description: 'Labo established in the jaber iben hayan center' },
      { title: 'Labo biology', description: 'Labo established in the jaber iben hayan center' },
    ],

  },
  {
    uname: 'ESTS',
    labos: [
      { title: 'Labo Informatique', description: 'Labo established in the jaber iben hayan center' },
      { title: 'Labo Chemie', description: 'Labo established in the jaber iben hayan center' },
      { title: 'Labo biology', description: 'Labo established in the jaber iben hayan center' },
    ],
  },
  {
    uname: 'FPS',
    labos: [
      { title: 'Labo Informatique', description: 'Labo established in the jaber iben hayan center' },
      { title: 'Labo Chemie', description: 'Labo established in the jaber iben hayan center' },
      { title: 'Labo biology', description: 'Labo established in the jaber iben hayan center' },
    ],
  },
];
