import express from 'express';

const app = express();

app.get('/', (req, res) => {
  console.log(req);
  res.send('hello');
});

app.post('/', (req, res) => {
  // console.log('on post', req);
  console.log(res);
  res.send('hi');
})

app.listen(4000, () => {
  console.log('--App listening on port 4000');
});

// export default router;