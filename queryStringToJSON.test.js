import queryStringToJSON from "./queryStringToJSON";

test('Given "a=1&b=2" returns { "a": "1", "b": "2" }', () => {
    const input = "a=1&b=2";
    const output = queryStringToJSON(input);
    const expectedOutput = {
        "a": '1',
        "b": '2'
    };
    expect(output).toStrictEqual(expectedOutput);
});

test('Given "a=1&b=2" should not return { "a": 1, "b": 2 }', () => {
    const input = "a=1&b=2";
    const output = queryStringToJSON(input);
    const expectedOutput = {
        a: 1,
        b: 2
    };
    expect(output).not.toStrictEqual(expectedOutput);
});

test('Given "a[]=1&a[]=2" returns { "a": ["1", "2"] }', () => {
    const input = "a[]=1&a[]=2";
    const output = queryStringToJSON(input);
    const expectedOutput = { a : ["1", "2"] };
    expect(output).toStrictEqual(expectedOutput);
});

test('Given "&&&&crsource=google" should return { crsource: "google" }', () => {
    const input = "&&&&crsource=google";
    const output = queryStringToJSON(input);
    const expectedOutput = {
        crsource: "google"
    };
    expect(output).toStrictEqual(expectedOutput);
});

test('Given "&&&&crsource=google to              " should return { crsource: "google to              " }', () => {
    const input = "&&&&crsource=google to              ";
    const output = queryStringToJSON(input);
    const expectedOutput = {
        crsource: "google to              "
    };
    expect(output).toStrictEqual(expectedOutput);
});

test('Given "&&     &&crsource=google" should return { crsource: "google" }', () => {
    const input = "&&     &&crsource=google";
    const output = queryStringToJSON(input);
    const expectedOutput = {
        crsource: "google"
    };
    expect(output).toStrictEqual(expectedOutput);
});

test('Given "&&&&    crsource=google" should return { crsource: "google" }', () => {
    const input = "&&&&    crsource=google";
    const output = queryStringToJSON(input);
    const expectedOutput = {
        crsource: "google"
    };
    expect(output).toStrictEqual(expectedOutput);
});
