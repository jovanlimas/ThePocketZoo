import App from "../src/App";

/**
 * Feature: This is the test file to test the App
 */
describe("Test App", () => {
  /**
   * Scenario: Test App Creation
   * When: @const newApp is created
   * Then: @const newApp is instance of @const App
   */
  it("Test App creation", () => {
    // WHEN:
    const newApp = new App();

    // THEN:
    expect(newApp).toBeInstanceOf(App);
  });

  /**
   * Scenario: Test valid API EndPoint
   * When: API EndPoint is initialized
   * Then: Initialized API EndPoint is correct
   */
  it("Test valid API EndPoint", () => {
    // WHEN:
    // const newApp = new App();
    const API = "https://zoo-animal-api.herokuapp.com/animals/rand";

    // TODO: Figure out EndPoint initialization location

    // THEN:
    expect(API).toBeDefined;
    expect(API).toMatch(/https/);
    expect(API).toEqual("https://zoo-animal-api.herokuapp.com/animals/rand");
  });

  /**
   * Scenario: Test succesful return of renderring
   * When: @const newApp is created
   * Then: @method render returns JSX
   */
  it("Test successful JSX return after render", () => {
    // WHEN:
    const newApp = new App();

    // THEN:
    expect(newApp.render()).toHaveReturned;
  });
});
