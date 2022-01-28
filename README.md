# Scheduled Netlify Deploys

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/eduardoboucas/scheduled-function-template)

You can make use of [Scheduled Functions](https://ntl.fyi/sched-func) and [Build Hooks](https://docs.netlify.com/configure-builds/build-hooks/) to automatically deploy your Netlify site on a recurring schedule.

Here's how:

1. Follow the [Scheduled Functions documentation](https://ntl.fyi/sched-func) to enable the experimental feature for your new site

2. Go to the site settings, [create a new Build hook](https://docs.netlify.com/configure-builds/build-hooks/), and copy the URL

    <img width="927" alt="Creating a build hook" src="https://user-images.githubusercontent.com/4162329/151607722-a0fa67bc-9c6b-4326-912b-f28bce246424.png">

3. Create an environment variable named `BUILD_HOOK_URL` with the URL from the previous step

    <img width="927" alt="Setting an environment variable" src="https://user-images.githubusercontent.com/4162329/151607905-9c2788f4-e142-4944-8439-c8f61c047dbe.png">

4. Copy the [example function](https://github.com/eduardoboucas/scheduled-function-template/blob/main/netlify/functions/scheduled.ts) into your `netlify/functions` directory
    - You can change the frequency from `@hourly` to `@daily`, `@weekly`, or any [valid cron expression](https://crontab.guru/)

5. Deploy your site and wait for the builds to start showing

    <img width="927" alt="Build logs" src="https://user-images.githubusercontent.com/4162329/151608195-618abf02-469f-47ee-a9b3-5be856d02fac.png">
