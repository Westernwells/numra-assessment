export const currentUser = {
  id: 1,
  name: "Jane Doe",
  email: "janedoe@gmail.com",
};

export const usersDb = [
  {
    id: 1,
    name: "Jane Doe",
    email: "janedoe@gmail.com",
  },
  {
    id: 2,
    name: "Janet Doe",
    email: "janetdoe@gmail.com",
  },
  {
    id: 3,
    name: "Oani Bridge",
    email: "oanibridge@gmail.com",
  },
  {
    id: 4,
    name: "Kiara Smith",
    email: "kiarasmith@gmail.com",
  },
  {
    id: 5,
    name: "Diania Bauer",
    email: "dianabauer@gmail.com",
  },
];

export const eventsDb = {
  mine: [
    {
      id: 1, //event-count
      eventId: 1_1, // userId_id(i.e event-count)
      title:
        "BestSeller Book Bootcamp -write, Market & Publish Your Book -Lucknow",
      location: "Ilorin, Nigeria",
      description:
        "DesignHub organized a 3D Modeling Workshop using Blender on 16th February at 5 PM. The workshop taught participants the magic of creating stunning 3D models and animations using Blender. It was suitable for both beginners and experienced users. The event was followed by a blender-render competition, which added to the excitement.",
      date: "1/09/2024",
      time: "4pm",
      reminder: false,
      organizerInfo: {
        organizerId: 1,
        name: "Jane",
        email: "jane@gmail.com",
      },
      sentInvites: {
        eventId: 1_1,
        invitedLIst: [
          {
            id: 5,
            name: "Diania Bauer",
            email: "dianabauer@gmail.com",
          },
        ],
      },

      registered: [
        {
          id: 2,
          name: "Janet Doe",
          email: "janetdoe@gmail.com",
        },
        {
          id: 3,
          name: "Oani Bridge",
          email: "oanibridge@gmail.com",
        },
      ],
    },
    {
      id: 2, //event-count
      eventId: 1_2, // userId_id(i.e event-count)
      title: "BestSeller Book Bootcamp",
      location: "Ilorin, Nigeria",
      description:
        "DesignHub organized a 3D Modeling Workshop using Blender on 16th February at 5 PM. The workshop taught participants the magic of creating stunning 3D models and animations using Blender. It was suitable for both beginners and experienced users. The event was followed by a blender-render competition, which added to the excitement.",
      date: "1/09/2024",
      time: "4pm",
      reminder: true,
      organizerInfo: {
        organizerId: 1,
        name: "Jane",
        email: "janedoe@gmail.com",
      },
      sentInvites: {
        eventId: 1_1,
        invitedLIst: [
          {
            id: 5,
            name: "Diania Bauer",
            email: "dianabauer@gmail.com",
          },
        ],
      },

      registered: [
        {
          id: 2,
          name: "Janet Doe",
          email: "janetdoe@gmail.com",
        },
        {
          id: 3,
          name: "Oani Bridge",
          email: "oanibridge@gmail.com",
        },
      ],
    },
  ],

  others: [
    {
      id: 4, //event-count
      eventId: 2_4, // userId_id(i.e event-count)
      title: "BestSeller Nothing Bootcamp",
      location: "Offa, Nigeria",
      description:
        "DesignHub organized a 3D Modeling Workshop using Blender on 16th February at 5 PM. The workshop taught participants the magic of creating stunning 3D models and animations using Blender. It was suitable for both beginners and experienced users. The event was followed by a blender-render competition, which added to the excitement.",
      date: "5/09/2024",
      time: "8am",
      reminder: false,
      organizerInfo: {
        organizerId: 2,
        name: "Janet",
        email: "janetdoe@gmail.com",
      },
    },
    {
      id: 5, //event-count
      eventId: 2_5, // userId_id(i.e event-count)
      title: "BestSeller Clothes Bootcamp",
      location: "Offa, Nigeria",
      description:
        "DesignHub organized a 3D Modeling Workshop using Blender on 16th February at 5 PM. The workshop taught participants the magic of creating stunning 3D models and animations using Blender. It was suitable for both beginners and experienced users. The event was followed by a blender-render competition, which added to the excitement.",
      date: "5/09/2024",
      time: "8am",
      reminder: true,
      organizerInfo: {
        organizerId: 2,
        name: "Janet",
        email: "janetdoe@gmail.com",
      },
    },
  ],
};

export const invitesDb = [
  {
    eventId: 1,
  },
];
