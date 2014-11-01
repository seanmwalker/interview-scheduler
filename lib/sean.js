var foo = 'bar';
foo += ' is not foo';
// This line blows chunks, make it instead remove ' is not foo' and add ' is bar', and also remove this comment.
foo--=+ me;