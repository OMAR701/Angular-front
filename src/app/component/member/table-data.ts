export interface Project {
  title: string;
  description: string;
}

export interface Member {
  image: string;
  uname: string;
  gmail: string;
  projects: Project[];
  phone: string;
  budget: string;
}

export const members: Member[] = [
  {
    image: 'assets/images/users/user1.jpg',
    uname: 'Hanna Gover',
    gmail: 'hgover@gmail.com',
    projects: [
      { title: 'Project 1', description: 'Project 1 description' },
      { title: 'Project 2', description: 'Project 2 description' },
      { title: 'Project 3', description: 'Project 3 description' },
      { title: 'Project 3', description: 'Project 3 description' },
      { title: 'Project 3', description: 'Project 3 description' },
      { title: 'Project 3', description: 'Project 3 description' },

    ],
    phone: '0643770290',
    budget: '95K',
  },
  {
    image: 'assets/images/users/user2.jpg',
    uname: 'John Doe',
    gmail: 'johndoe@gmail.com',
    projects: [
      { title: 'Project A', description: 'Project A description' },
      { title: 'Project B', description: 'Project B description' },
      { title: 'Project C', description: 'Project C description' },
    ],
    phone: '0635635625',
    budget: '95K',
  },
  {
    image: 'assets/images/users/user3.jpg',
    uname: 'Jane Smith',
    gmail: 'janesmith@gmail.com',
    projects: [
      { title: 'Project X', description: 'Project X description' },
      { title: 'Project Y', description: 'Project Y description' },
      { title: 'Project Z', description: 'Project Z description' },
    ],
    phone: '0643770290',
    budget: '95K',
  },
  {
    image: 'assets/images/users/user4.jpg',
    uname: 'Michael Johnson',
    gmail: 'michaeljohnson@gmail.com',
    projects: [
      { title: 'Project Alpha', description: 'Project Alpha description' },
      { title: 'Project Beta', description: 'Project Beta description' },
      { title: 'Project Gamma', description: 'Project Gamma description' },
    ],
    phone: '0643770290',
    budget: '95K',
  },
];
