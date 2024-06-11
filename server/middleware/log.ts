export default eventHandler(event => {
  console.log('Request URL: ' + event.node.req.url)
  })