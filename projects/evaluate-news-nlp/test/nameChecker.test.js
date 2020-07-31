
import { checkForName } from '../src/client/js/nameChecker'
jest.mock('../src/client/js/nameChecker')

describe("checks the name", () => {
    test("Testing the handleSubmit() function", () => {
        expect(checkForName).toBeDefined();
    });
});