# Issue when using enums in Apollo GraphQL wither Federation

## Install packages
`npm install`

## Run
`node src/index.js`

## Query in Ground
### Works as expected
This returns the value `1` which maps to `GREEN`
```
query {
  colorGood
}
```

### Fails due to error
This fails with the error `"Expected a value of type \"AllowedColor\" but received: 0"` Even though `AllowedColor` has defined `0` to be `RED`
```
query {
  colorBad
}
```


If you disable remove the call to `buildFederatedSchema`, the queries work as expected
