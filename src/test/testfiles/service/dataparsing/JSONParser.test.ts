/**
 * Tests the JSON Parser
 */

import JSONParser from "../../../../service/dataparsing/JSONParser";

/**
 * Object to be tested 
 */

let parser: JSONParser = new JSONParser();

/**
 * JSON Parser test suite
 */
describe("JSONParser.ts Test", () => {
    test("Testing parse()", () => {

        const rawData: string = "{\"name\":\"John Doe\",\"age\":23,\"languages\": [\"C\",\"C++\",\"Python\"]}";
        const developer: any = parser.parse(rawData);

        expect(developer).toBeTruthy();
        expect(developer.name).toBe("John Doe");
        expect(developer.age).toBe(23);
        expect(developer.languages).toHaveLength(3);
        expect(developer.languages[0]).toBe("C");
        expect(developer.languages[1]).toBe("C++");
        expect(developer.languages[2]).toBe("Python");
    });
});

export{}