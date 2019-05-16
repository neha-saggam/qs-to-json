# Query String to JSON ![](https://img.shields.io/circleci/project/github/neha-saggam/qs-to-json.svg)

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/28f6dacd61e24e7c9014026e29f997b8)](https://app.codacy.com/app/neha-saggam/qs-to-json?utm_source=github.com&utm_medium=referral&utm_content=neha-saggam/qs-to-json&utm_campaign=Badge_Grade_Dashboard)

Library to parse given query string and create a JSON object.

## Installation

Install qs-to-json using [`npm`](https://www.npmjs.com/):

```bash
npm install --save-dev qs-to-json
```

## Support

1.  Currently, it supports simple query string and an array

## Example

**NOTE:** : qs-to-json currently does not decode the query string. Make sure you pass decoded queryString.

1.  Convert "&a=1&b=2" to a JSON object:

```javascript
import queryStringToJSON from 'qs-to-json';

const queryString = "&a=1&b=2";
const json = queryStringToJSON(queryString);
console.log(json);
```

Output would be the following:

```json
{
  "a": "1",
  "b": "2"
}
```

2.  Convert "&a[]=1&a[]=2" to a JSON object:

```javascript
import queryStringToJSON from 'qs-to-json';

const queryString = "&a[]=1&a[]=2";
const json = queryStringToJSON(queryString);
console.log(json);
```

Output would be the following:

```json
{
  a: [ "1", "2" ]
}
```

## Contributing

We accept pull requests :D

## License

qs-to-json is [MIT licensed](./LICENSE).
