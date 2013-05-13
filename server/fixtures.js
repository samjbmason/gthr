if (Messages.find().count() === 0) {
  Messages.insert({
    content: 'Hi everyone',
    name: 'Sacha Greif',
  });

  Messages.insert({
    content: 'Hi Sacha',
    name: 'Tom Coleman',
  });

  Messages.insert({
    content: 'Wow this is cool',
    name: 'Tom Coleman',
  });
}