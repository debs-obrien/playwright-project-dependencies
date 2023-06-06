# Project Dependencies for authentication

Example project showing how [project dependencies](https://playwright.dev/docs/next/test-projects#dependencies) in Playwright work so that you can login to an application and save your credentials in storage state. Tests that rely on the logged in setup can then use this storage stage when running the tests meaning they don't have to login again before each test.

```js
projects: [
    // this matches all tests ending with .setup.ts
    {
      name: 'setup',
      testMatch: '**/*.setup.ts',
    },
    // this project depends on the setup project
    {
      name: 'e2e tests logged in',
      testMatch: '**/*loggedin.spec.ts',
      dependencies: ['setup'],
      use: {
        storageState: STORAGE_STATE,
      },
    },
    // this project runs all tests except ones for logged in
    {
      name: 'e2e tests',
      testIgnore: ['**/*loggedin.spec.ts', '**/*.setup.ts'],
    },
  ],
```

## Clone project and run tests

In order to run the tests from this project locally first clone this repo and then [create an account on Wikepedia](https://en.wikipedia.org/w/index.php?title=Special:CreateAccount&returnto=Main+Page) and add your username and password to a `.env` file which you need to create at root level. 

Example of `.env` file:

```bash
USERNAME: your_username
PASSWORD: your_password
```
Make sure you install all dependencies.

```bash
npm install
```
Install necessary browsers

```bash
npx playwright install 
```

Run the tests using the [VS Code extension](https://playwright.dev/docs/getting-started-vscode) or the CLI.

```bash
npx playwright test
```

### Running specific tests

To run only the setup test

```bash
npx playwright test --project setup
```

To run only logged in tests that depend on the setup project

```bash
npx playwright test --project "e2e tests logged in"
```

To run the tests where no login is needed

```bash
npx playwright test --project "e2e tests"
```

## View reports and traces of the tests

Once you have run the tests you can see a report of the tests by running the `show-report` command.

```bash
npx playwright show-report
```

To see a trace of your tests locally including the setup tests run the tests with the flag `--trace on` and then open the report and click on the trace icon.

```bash
npx playwright test --trace on
```

![trace viewer showing trace of the login test](https://user-images.githubusercontent.com/13063165/225040918-f5316acc-e092-4e09-9da0-2d826dced162.png)

## Running the tests on CI

To run this project on CI you need to add the `USERNAME` and `PASSWORD` as GitHub secrets. This is done through the settings and under security you will see Secrets and Variables. Click on the actions and then add a new repository secret for both the `USERNAME` and `PASSWORD`.
