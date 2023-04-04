var a = {
  b: "123",
  c: function () {
    console.log(this.b);
  },
};

a.b = "321";
var fn = a.c ? a.c : undefined;

fn(); // ???
