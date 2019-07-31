### This will be aour database structure

```javascript
// in the users collection one user can hold this data structure
user = {
  _id: "2jh14gu2h4i23j4i2hoij423o",
  name: "Abdurasul Abdurahimov",
  age: "20",
  phoneNumber: {
    number: "+998906327870",
    verified: true
  },
  email: "abdurahimov@gmail.com",
  photoURL: "https:www.photos/abdursul/2467634.com",
  OAuthProviders: [
    {
      provider: "Facebook",
      providerId: "21547623647823678",
      friends: "65"
    },
    {
      provider: "Instagram",
      providerId: "21547623647823678",
      followers: "287"
    },
    {
      provider: "Gmail",
      providerId: "21547623647823678"
    }
  ],
  courses: [
    {
      courseId: "gj21g4jh2k5323g4jkh",
      createdAt: "18/03/2019"
    },
    {
      courseId: "gj21g4jh2k5323g4jkh",
      createdAt: "18/03/2019"
    },
    {
      courseId: "gj21g4jh2k5323g4jkh",
      createdAt: "18/03/2019"
    }
  ],
  coursesCount: 3,
  stars: "33"
};

// couses collection contains an array of courses object that hold all the
// information about it
course = {
  courseId: "gj21g4jh2k5323g4jkh",
  createdAt: "18/03/2019",
  courseOwenerId: "2jh14gu2h4i23j4i2hoij423o",
  courseOwenerName: "Abdurasul Abdurahimov",
  numberOfMembers: 3,
  members: [
    {
      _id: "j234g23j4gk23hk234h",
      name: "Anil Yarkin Yucel"
    },
    {
      _id: "j234g23j4gk23hk234h",
      name: "Hardik Tank"
    },
    {
      _id: "j234g23j4gk23hk234h",
      name: "Toluwani Elemosho"
    }
  ],
  price: "15000",
  chatRoomId: "23hg4kjlb2k34hdjshfkjs",
  courseInfo: {
    departureFrom: {
      name: "Fergana",
      latLong: {
        lat: 3.52362,
        long: 6.836423
      },
      date: "11/02/2019"
    },
    arrivalTo: {
      name: "Jizzah",
      latLong: {
        lat: 4.9793247,
        long: 1.937363
      },
      date: "11/02/2019"
    }
  },
  supplamentary: {
    smoking: true,
    music: true,
    dogs: false,
    luggage: true
  }
};

// chatRoom is where one course members can chat between.
// every course will have a chatRoom that is identical only for a course members
chatRoom = {
  _id: "23hg4kjlb2k34hdjshfkjs",
  createdAt: "21/02/2019",
  members: [
    {
      _id: "j234g23j4gk23hk234h",
      name: "Anil Yarkin Yucel",
      message: [
        {
          createdAt: "21/02/2019/21:00",
          body: "this is the first chat message body"
        },
        {
          createdAt: "21/02/2019/21:13",
          body: "this is the second chat message body"
        },
        {
          createdAt: "21/02/2019/22:30",
          body: "this is the third chat message body"
        }
      ]
    },
    {
      _id: "j234g23j4gk23hk234h",
      name: "Hardik Tank"
    },
    {
      _id: "j234g23j4gk23hk234h",
      name: "Toluwani Elemosho"
    }
  ]
};
```
