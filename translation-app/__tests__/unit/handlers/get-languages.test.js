// Import all functions from get-all-items.js 
const lambda = require('../../../src/handlers/get-languages.js');
// This includes all tests for getAllItemsHandler() 
describe('Test getLanguagesHandler', () => {
    it('should return languages', async () => {

        const event = {
            httpMethod: 'GET'
        }

        // Invoke helloFromLambdaHandler() 
        const result = await lambda.getLanguagesHandler(event);

        const expectedResult = {
            statusCode: 200,
            body: JSON.stringify('body')
        };

        // Compare the result with the expected result 
        expect(result).toEqual(expectedResult);
    });
}); 
