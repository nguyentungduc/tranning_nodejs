export default () => ({
  regex: {
    postcode: new RegExp(/^[a-z]{1,2}\d[a-z\d]?\s*\d[a-z]{2}$/i),
  },
});
