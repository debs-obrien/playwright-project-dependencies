# Project Dependencies for authentication

Example project showing how project dependencies work so that you can login to an application and save your credentials in storage state. Tests that rely on the logged in setup can then use this storage stage when running the tests meaning they don't have to login again before each test.

## Clone project and run tests

In order to run the tests from this project locally, first clone this repo. Then [create an account on Wikepedia](https://en.wikipedia.org/w/index.php?title=Special:CreateAccount&returnto=Main+Page) and add your username and password to a local .env file. 

```bash
USERNAME: your_username
PASSWORD: your_password
```
Make sure you install all dependencies.

````
npm install
````

Then run the tests using the [VS Code extension](https://playwright.dev/docs/getting-started-vscode) or the CLI.

```bash
npx playwright test
```

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

To see a trace of your tests locally including the setup tests run the tests with the flag `--trace on`

```bash
npx playwright test --trace on
```