import { And, Then, When } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../../pages/UI/home-page';

When(/^I open pixelmatic website$/, () => {
  HomePage.visit();
});

Then(/^I should see the title as "([^"]*)" on every site$/, (title) => {
  HomePage.verifTitle(title);
});

And(/^The company logo must be present$/, () => {
  HomePage.assertLogoPresence();
});

And(/^I verify that when I click on the Home button, I should get navigated to the Home page$/, () => {
  HomePage.clickHome();
  HomePage.assertHome();
});

And(/^When I click on the Home button, it should turn to active status$/, () => {
  HomePage.assertActiveTab("Home");
});

And(/^When I click on the Form button, I should get navigated to the Form page$/, () => {
  HomePage.clickForm();
  HomePage.assertFormPage();
});

And(/^When I click on the Form button, it should turn to active status$/, () => {
  HomePage.assertActiveTab("Form");
});

And(/When I click on the Error button, I should get a 404 HTTP response code$/, () => {
  HomePage.clickError();
  HomePage.verifyPageHeading("404 Error: File not found :-(");
});

And(/^When I click on the UI Testing button, I should get navigated to the Home page$/, () => {
  HomePage.clickTitle();
  HomePage.assertHome();
});

And(/^The following text should be visible on the Home page in h1 tag: "([^"]*)"$/, (heading) => {
  HomePage.verifyPageHeading(heading);
});

And(/^The following text should be visible on the Home page in p tag: "([^"]*)"$/, (paragraph) => {
  HomePage.verifyParagraph(paragraph);
});

And(/^On the Form page, a form should be visible with one input box and one submit button$/, () => {
  HomePage.clickForm();
  HomePage.verifyInputField();
  HomePage.verifySubmitBtn();
});

And(/^On the Form page, if you type "([^"]*)" the input field and submit the form, you should get redirected to the Hello page$/, (value) => {
  HomePage.clickForm();
  HomePage.typeTextInInputField(value);
  HomePage.verifyPageHeading(`Hello ${value}!`);
});
