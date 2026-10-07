# Daily Ping

**Your silent safety net.**

Website: [dailyping.net](https://dailyping.net)

Support: [support@dailyping.net](mailto:support@dailyping.net)

Daily Ping is a daily check-in application. Users tap Ping to check in, choose
trusted contacts to receive overdue alerts, and review their check-in history.
The homepage introduces the app using its six real screens in `AppScreenshots/`:
check-in, contacts, history, profile, settings, and sign-in.

## Website

Built with plain HTML, CSS, and JavaScript, with no build step or runtime
framework. `index.html`, `app.css`, and `script.js` power the app introduction.
The gallery supports full-screen screenshot previews, and the mobile layout
uses a swipeable screenshot gallery. Support links open an email to the team.
When app-store listings are available, add their verified URLs to the main call
to action.

## Local preview and deployment

Run `python3 -m http.server 8000` from this directory, then open
`http://localhost:8000/`. GitHub Pages publishes the `main` branch from the
repository root using the custom domain in `CNAME`.

## Privacy Policy

The public policy at [dailyping.net/privacy](https://dailyping.net/privacy)
is served from `privacy/index.html`, with `styles.css` and `privacy/privacy.css`.
It requires no sign-in or JavaScript. Navigation, the homepage privacy section,
and the footer link to it. GitHub Pages redirects `/privacy` to `/privacy/`.

Users delete their account and all account data in the app through
**Profile → Settings → Delete account**. When data practices change, update the
policy's dates and notify users as described in the policy. Keep retention
wording aligned with actual application storage and provider settings.

© Daily Ping Technology Enterprise.
