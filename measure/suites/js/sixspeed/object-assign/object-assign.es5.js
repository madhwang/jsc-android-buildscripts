module.exports = {
  run: function (assertEqual) {

    var obj = {
      a: 1,
      b: true,
      c: function () { },
      d: null,
      e: 'e'
    };

    var fn = function (src) {
      var o = {};
      var keys = Object.keys(src);
      for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        o[key] = src[key];
      }
      return o;
    };

    var r = fn(obj);
    assertEqual(r.a, obj.a);
    assertEqual(r.b, obj.b);
    assertEqual(r.c, obj.c);
    assertEqual(r.d, obj.d);
    assertEqual(r.e, obj.e);

  }
};
