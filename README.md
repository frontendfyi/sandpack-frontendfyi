# Sandpack bundler

This repository is a standalone version of the Sandpack Bundler, used on frontend.fyi, deployed on it's own domain.
I've been inspired by Josh Comeau to self host this, to be less dependent on CodeSandbox, and to improve the performance. A big benefit is also being able to host my assets on the bunder, instead of loading them from frontend.fyi (which I did until using this bundler).

## Generating the bundler

In order to self-host, we have to follow a procedure to generate the bundle from the codesandbox-client codebase.

Link to steps: https://sandpack.codesandbox.io/docs/advanced-usage/client#hosting-the-bundler

Here are the steps to perform:

1. `cd` into `../codesandbox-client`. Do a `git pull origin master` to make sure I have the latest files
2. Switch to Node v16 with NVM (or whichever version is requested by `engines` in package.json)
3. Reinstall dependencies with `yarn install`.
4. `yarn build:deps` to build some of the packages lerna needs for internal links.
5. `yarn build:sandpack` to create the built files
