const date = "25-04-2018";

module.exports = {
  date,
  intervals: [
    {
      begin: "08:00",
      end: "09:00",
      sessions: [require("../breakfasts").find(o => o.date === date)],
    },
    {
      begin: "09:00",
      end: "10:00",
      sessions: [require("../presentations/ken-wheeler")],
    },
    {
      begin: "10:00",
      end: "11:00",
      sessions: [require("../presentations/kasia-jastrzebska")],
    },
    {
      begin: "11:00",
      end: "11:30",
      sessions: [
        {
          title: "Lightning talks",
        },
        require("../presentations/michel-weststrate"),
        require("../presentations/patrick-hund"),
        require("../presentations/varya-stepanova"),
      ],
    },
    {
      begin: "11:30",
      end: "12:30",
      sessions: [require("../lunches").find(o => o.date === date)],
    },
    {
      begin: "12:30",
      end: "13:00",
      sessions: [require("../panels").filter(o => o.date === date)[0]],
    },
    {
      begin: "13:00",
      end: "14:00",
      sessions: [require("../presentations/christian-alfoni")],
    },
    {
      begin: "14:00",
      end: "15:00",
      sessions: [require("../presentations/sia-karamalegos")],
    },
    {
      begin: "15:00",
      end: "15:45",
      sessions: [require("../presentations/sara-vieira")],
    },
    {
      begin: "15:45",
      end: "16:30",
      sessions: [require("../presentations/rotem-mizrachi-meidan")],
    },
    {
      begin: "16:30",
      end: "17:00",
      sessions: [require("../coffee-breaks").find(o => o.date === date)],
    },
    {
      begin: "17:00",
      end: "17:30",
      sessions: [
        {
          title: "Lightning talks",
        },
      ],
    },
    {
      begin: "17:30",
      end: "18:00",
      sessions: [require("../panels").filter(o => o.date === date)[1]],
    },
  ],
};
