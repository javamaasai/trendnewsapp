import { Injectable } from '@angular/core';

export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  read: boolean;
  image:string;
  news:string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public messages: Message[] = [
    {
      fromName: 'Dell XPS 15',
      subject: 'By Matt Chorsey',
      date: '9:32 AM',
      id: 0,
      read: false,
      image:'9077324877C5B8E966A34A58B944BB9A.jpg',
      news:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      fromName: 'Sumsung Note 20',
      subject: 'By Lauren Ruthford',
      date: '6:12 AM',
      id: 1,
      read: false,
      image:'sumsungnote20.jpg',
      news:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      fromName: 'Beyond the tv remote',
      subject: 'By Jordan Firth',
      date: '4:55 AM',
      id: 2,
      read: false,
      image:'remote-tv.jpg',
      news:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      fromName: 'Android 11',
      subject: 'By Bill Thomas',
      date: 'Yesterday',
      id: 3,
      read: false,
      image:'android11.jpg',
      news:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      fromName: 'Corsair military gaming mouse',
      subject: 'By Bill Thomas',
      date: 'Yesterday',
      id: 4,
      read: false,
      image:'corsairgamingmouse.jpg',
      news:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      fromName: 'Tesla Model 3',
      subject: 'By Andrea Cornerston',
      date: 'Yesterday',
      id: 5,
      read: false,
      image:'tesla-Mode-3-red.jpg',
      news:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      fromName: 'HP Laser Only Printer',
      subject: 'By Moe Chamont',
      date: 'Last Week',
      id: 6,
      read: false,
      image:'laterprinterhp.jpg',
      news:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      fromName: 'Godox AD600 Flash kit',
      subject: 'By Kelly Richardson',
      date: 'Last Week',
      id: 7,
      read: false,
      image:'godox-ad-600-pro-kit-1.jpg',
      news:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ];

  constructor() { }

  public getMessages(): Message[] {
    return this.messages;
  }

  public getMessageById(id: number): Message {
    return this.messages[id];
  }
}
