const TITLE = '#site';
const LOGO = '#if_logo';
const HOME_BUTTON = "#home";
const FORM_BUTTON = "#form";
const ERROR_BUTTON = "#error";
const ACTIVE_TAB = "li[class='active'] > a";
const INPUT_BOX = "#hello-input";
const SUBMIT_BUTTON = "#hello-submit";

class HomePage {
  static visit() {
    cy.log("Open home page of the website");
    cy.openHomePage();
  }

  static verifTitle(title) {
    cy.log("Verify website's title");
    cy.get(TITLE).invoke('text').then((titleFound) => {
      expect(titleFound).to.eq(title);
    });
  }

  static assertLogoPresence() {
    cy.log("Verify logo is present");
    cy.get(LOGO).should('be.visible');
  }

  static clickHome() {
    cy.log("click home button");
    cy.get(HOME_BUTTON).click();
  }

  static assertHome() {
    cy.url().should('eq', 'http://127.0.0.1:8080/');
  }

  static assertActiveTab(tabName) {
    cy.get(ACTIVE_TAB).invoke("text").then((activeTab) => {
      expect(activeTab).to.be.eq(tabName);
    });
  }

  static clickForm() {
    cy.log("click form button");
    cy.get(FORM_BUTTON).click();
  }

  static assertFormPage() {
    cy.url().should('contain', 'form');
  }

  static clickError() {
    cy.get(ERROR_BUTTON).click();
  }

  static verifyPageHeading(text) {
    cy.get('h1').invoke("text").then((heading) => {
      expect(heading).to.eq(text);
    });
    cy.visit("/");
  }

  static clickTitle() {
    cy.get(TITLE).click();
  }

  static verifyParagraph(text) {
    cy.get("p").invoke("text").then((paragraph) => {
      expect(text).to.eq(paragraph);
    });
  }

  static verifyInputField() {
    cy.get(INPUT_BOX).should('be.visible');
  }

  static verifySubmitBtn() {
    cy.get(SUBMIT_BUTTON).should('be.visible');
  }

  static typeTextInInputField(value) {
    cy.get(INPUT_BOX).type(value);
    cy.get(SUBMIT_BUTTON).click();
  }
}

export default HomePage;
