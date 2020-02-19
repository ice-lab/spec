const foo = 1;
function bar() {}
function baz() {}

module.exports = () => {
  console.log(111);
  console.log(111);
  console.log(111);
  console.log(111);
  console.log(111);
  console.log(111);
  console.log(111);
  console.log(111);
  console.log(111);
  console.log(111);
  console.log(111);
  console.log(111);
  const a = 'sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss';
  console.log(111, a);
  console.log(222);

  const b = {
    'a': 1,
    'b': 1,
  };
  const c = 'xxxx';
  console.log(b);

  if (foo) {
    bar();
  }

  if (foo) {
    bar();
    baz();
  }
};
