# cfups-get

Cloud Foundry user-provided service get credentials

This module simply parses the cloud foundry VCAP_SERVICES structure to
return a cups service credentials.

# Why

The VCAP_SERVICES user-provider structure is a set of nested objects followed by
an object array which contains a nested credentials object. You can write a
lot of code to get down to the configuration from the `process.env` command.

This module allows you to enter the name of the service and pass in the the env
object and it returns the the credentials object.

# Example

```
var cfups = require('cfups')

var dbConfig = cfups('db-config', process.env)
```

If your env object had the following:

``` json
{
  "VCAP_SERVICES": {
    "user-provided": [
      {
        "name": "db-config",
        "credentials": {
          "host": "foo.com"
        }
      }
    ]
  }
}
```

Then the method above would return:

```
{
  "host": "foo.com"
}
```

This module removes the complexity of traversing the objects and arrays and allows
the developer to just pass the cups name and get the defined credentials.

# Test

```
npm test

```

# License

MIT

# Contributions

- bugs fixes are welcome - submit a PR

# Thanks

- Cloud Foundry Community
- Ramda Community
- NodeJS Community
