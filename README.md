Simple web app for second job interview

# Timezone web app

Timezones data came from the following array

      [
        {"timezone": "Australia/Sydney", "date": "2023-11-22", "time": "17:55"},
        {"timezone": "America/New_York", "date": "2023-03-23", "time": "08:04"},
        {"timezone": "Africa/Cairo", "date": "2023-07-07", "time": "15:39"},
        {"timezone": "Europe/Paris", "date": "2023-03-11", "time": "06:58"},
        {"timezone": "Europe/Paris", "date": "2023-01-16", "time": "05:57"},
        {"timezone": "Europe/Paris", "date": "2023-07-04", "time": "05:09"},
        {"timezone": "Africa/Cairo", "date": "2023-06-22", "time": "21:43"},
        {"timezone": "America/New_York", "date": "2023-11-14", "time": "11:27"},
        {"timezone": "Europe/London", "date": "2023-06-05", "time": "00:20"},
        {"timezone": "Europe/Berlin", "date": "2023-07-08", "time": "00:00"},
        {"timezone": "America/New_York", "date": "2023-01-24", "time": "03:06"},
        {"timezone": "Asia/Tokyo", "date": "2023-08-24", "time": "03:42"},
        {"timezone": "America/Los_Angeles", "date": "2023-05-14", "time": "21:05"},
        {"timezone": "Europe/Berlin", "date": "2023-09-07", "time": "21:24"},
        {"timezone": "America/Los_Angeles", "date": "2023-07-24", "time": "07:46"},
        {"timezone": "America/New_York", "date": "2023-04-23", "time": "14:40"},
        {"timezone": "America/Mexico_City", "date": "2023-03-04", "time": "22:15"},
        {"timezone": "Africa/Cairo", "date": "2023-07-05", "time": "03:24"},
        {"timezone": "Europe/Paris", "date": "2023-02-15", "time": "01:03"},
        {"timezone": "America/Los_Angeles", "date": "2023-04-04", "time": "22:16"}
      ]

In the middleware (src/middleware.ts) it's declared the restrictions depending if session token exists.

For cookie management I decided to use [next-client-cookies](https://www.npmjs.com/package/next-client-cookies) library.

The react-query documentation that i'm using is [TanStack Query Docs - Advance SSR](https://tanstack.com/query/latest/docs/react/guides/advanced-ssr).
Have in account that this Next app is using App Router, NOT Pages Router.

To clone the project use `git clone https://github.com/luiferg/prueba-tecnica-randomusers.git`

Run `npm install` to install the dependencies

create a `.env.local` file and for LOGIN_API variable put the login api source.

Then run `npm run dev` to be able to interact with the project at `http://localhost:3000/`
