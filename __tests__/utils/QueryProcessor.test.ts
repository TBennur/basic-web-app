import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return andrew id', () => {
        const query = "what is your andrew id";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "tbennur"
          ));
    });

    test('should return name', () => {
        const query = "what is your name";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "Tanay"
          ));
    });

    test('should return sum', () => {
        expect(QueryProcessor("What is 12 plus 93?")).toEqual("105");
        expect(QueryProcessor("What is 1 plus 93?")).toEqual("94");
    });

    test('should return multiply', () => {
        expect(QueryProcessor("What is 12 multiplied by 9?")).toEqual("108");
        expect(QueryProcessor("What is 1 multiplied by 93?")).toEqual("93");
    });
});