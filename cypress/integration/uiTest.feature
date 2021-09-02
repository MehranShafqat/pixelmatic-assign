Feature: User interface

    As a user on the pixelmatic website
    I will perform UI tests to make sure they comply with requirements
        
    @ui-test
    Scenario: Performing UI tests on the website
        When I open pixelmatic website
        Then I should see the title as "UI Testing" on every site
        And The company logo must be present
        And I verify that when I click on the Home button, I should get navigated to the Home page
        And When I click on the Home button, it should turn to active status
        And When I click on the Form button, I should get navigated to the Form page
        And When I click on the Form button, it should turn to active status
        And When I click on the Error button, I should get a 404 HTTP response code
        And When I click on the UI Testing button, I should get navigated to the Home page
        And The following text should be visible on the Home page in h1 tag: "Welcome to Pixelmatic QA department"
        And The following text should be visible on the Home page in p tag: "This site is dedicated to perform some exercises and demonstrate automated web testing."
        And On the Form page, a form should be visible with one input box and one submit button

    Scenario Outline: Verify form output with multiple permutations
        When I open pixelmatic website
        And On the Form page, if you type <VALUE> the input field and submit the form, you should get redirected to the Hello page
        Examples:
            | VALUE |
            |"John" |
            |"Sophia"|
            |"Charlie"|
            |"Emily"  |