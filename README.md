# Scheduled Netlify Deploys

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/eduardoboucas/scheduled-function-template)

You can make use of [Scheduled Functions](https://ntl.fyi/sched-func) and [Build Hooks](https://docs.netlify.com/configure-builds/build-hooks/) to automatically deploy your Netlify site on a recurring schedule.

Here's how:

1. Follow the [Scheduled Functions documentation](https://ntl.fyi/sched-func) to enable the experimental feature for your new site

2. Go to the site settings, [create a new Build hook](https://docs.netlify.com/configure-builds/build-hooks/), and copy the URL

3. Create an environment variable named `BUILD_HOOK_URL` with the URL from the previous step

4. Copy the [example function](https://github.com/eduardoboucas/scheduled-function-template/blob/main/netlify/functions/scheduled.ts) into your `netlify/functions` directory

    - You can change the frequency from `@hourly` to `@daily`, `@weekly`, or any [valid cron expression](https://crontab.guru/)

5. Deploy your site and wait for the builds to start showing
