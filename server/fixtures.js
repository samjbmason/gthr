if (Messages.find().count() === 0) {
  var now = new Date().getTime();
  
  Messages.insert({
    content: 'Hi everyone',
    name: 'Sacha Greif',
    submitted: now - 5 * 3600 * 1000
  });

  Messages.insert({
    content: 'Hi Sacha',
    name: 'Tom Coleman',
    submitted: now - 7 * 3600 * 1000
  });

  Messages.insert({
    content: 'Wow this is cool',
    name: 'Tom Coleman',
    submitted: now - 8 * 3600 * 1000,
  });
}