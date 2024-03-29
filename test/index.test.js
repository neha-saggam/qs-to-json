import queryStringToJSON from "../src";

test("Given 'a=1&b=2' returns { 'a': '1', 'b': '2' }", () => {
    const input = "a=1&b=2";
    const output = queryStringToJSON(input);
    const expectedOutput = {
        "a": "1",
        "b": "2"
    };
    expect(output).toStrictEqual(expectedOutput);
});

test("Given 'a=1&b=2' should not return { 'a': 1, 'b': 2 }", () => {
    const input = "a=1&b=2";
    const output = queryStringToJSON(input);
    const expectedOutput = {
        a: 1,
        b: 2
    };
    expect(output).not.toStrictEqual(expectedOutput);
});

test("Given 'a[]=1&a[]=2' returns { a: ['1', '2'] }", () => {
    const input = "a[]=1&a[]=2";
    const output = queryStringToJSON(input);
    const expectedOutput = { a : ["1", "2"] };
    expect(output).toStrictEqual(expectedOutput);
});

test("Given '&&&&crsource=google' should return { crsource: 'google' }", () => {
    const input = "&&&&crsource=google";
    const output = queryStringToJSON(input);
    const expectedOutput = {
        crsource: "google"
    };
    expect(output).toStrictEqual(expectedOutput);
});

test("Given '&&&&crsource=google to              ' should return { crsource: 'google to              ' }", () => {
    const input = "&&&&crsource=google to              ";
    const output = queryStringToJSON(input);
    const expectedOutput = {
        crsource: "google to              "
    };
    expect(output).toStrictEqual(expectedOutput);
});

test("Given '&&     &&crsource=google' should return { crsource: 'google' }", () => {
    const input = "&&     &&crsource=google";
    const output = queryStringToJSON(input);
    const expectedOutput = {
        crsource: "google"
    };
    expect(output).toStrictEqual(expectedOutput);
});

test("Given '&&&&    crsource=google' should return { crsource: 'google' }", () => {
    const input = "&&&&    crsource=google";
    const output = queryStringToJSON(input);
    const expectedOutput = {
        crsource: "google"
    };
    expect(output).toStrictEqual(expectedOutput);
});

test("Given 'a[]=1&a[]=2&b=[]=3' returns { a: ['1', '2'], b: ['3'] }", () => {
    const input = "a[]=1&a[]=2&b[]=3";
    const output = queryStringToJSON(input);
    const expectedOutput = { a : ["1", "2"], b: ["3"] };
    expect(output).toStrictEqual(expectedOutput);
});


test("Given 'a[]=1&a[]=2&b=[]=3&c=4' returns { a: ['1', '2'], b: ['3'], c: '4' }", () => {
    const input = "a[]=1&a[]=2&b[]=3&c=4";
    const output = queryStringToJSON(input);
    const expectedOutput = { a : ["1" , "2"], b: ["3"], c: "4" };
    expect(output).toStrictEqual(expectedOutput);
});

test("Given 'a[]=1&b[]=2&a=[]=3' returns { a: ['1', '3'], b: ['2'] }", () => {
    const input = "a[]=1&b[]=2&a[]=3";
    const output = queryStringToJSON(input);
    const expectedOutput = { a : ["1", "3"], b: ["2"] };
    expect(output).toStrictEqual(expectedOutput);
});

test("Given 'a=Nick&b=John should return { 'a': 'Nick', 'b': 'John' }", () => {
    const input = "a=Nick&b=John";
    const output = queryStringToJSON(input);
    const expectedOutput = {
        a: "Nick",
        b: "John"
    };
    expect(output).toStrictEqual(expectedOutput);
});

test("Given \"a.name=Nick&b.name=John\" should return { \"a\": { \"name\": \"Nick\" }, \"b\": { \"name\":  \"John\" } }", () => {
    const input = "a.name=Nick&b.name=John";
    const output = queryStringToJSON(input);
    const expectedOutput = {
        a: { name: "Nick" },
        b: { name: "John" }
    };
    expect(output).toStrictEqual(expectedOutput);
});
