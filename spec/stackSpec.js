describe("stack", function() {
  var stack;

  // Before each test runs, create a new Stack
  beforeEach(function() {
    if (runner.is('src/functional') || runner.is('src/functional-shared')) {
      stack = makeStack();
    } else if (runner.is('src/prototypal')) {
      stack = Stack();
    } else if (runner.is('src/pseudoclassical')) {
      stack = new Stack();
    }
  });

  // Any stack implementation should have the following methods
  it('should have "add", "remove", and "size" methods', function() {
    expect(stack.add).to.be.a('function');
    expect(stack.remove).to.be.a('function');
    expect(stack.size).to.be.a('function');
  });

  // Organize your tests with nested describe() statements
  // Use '#methodName()' to denote tests that focus on a certain method
  describe('#add()', function() {
    it('should take one argument', function() {
      // Make sure add() takes a single argument using (see http://mdn.io/Function.length)
      expect(stack.add.length).to.equal(1);
    });
    it('should increase in size by the number of elements added', function() {
      stack.add('string1');
      expect(stack.size()).to.equal(1);
    });
    it('should return value on .add(value)', function() {
      expect(stack.add('string2')).to.equal('string2');
    });
  });

  describe('#remove()', function() {
    it('should remove one argument', function() {
      stack.add('blahasdf');
      stack.remove();
      expect(stack.size()).to.equal(0);
    });
    it('should return the most recently added value', function(){
      stack.add('string4');
      stack.add('string3');
      expect(stack.remove()).to.equal('string3');
    });
    it('should throw an error when stack is empty', function(){
      stack.add('string8');
      stack.remove();
      expect( function(){stack.remove(); } ).to.throw();
    });
  });

  describe('#size()', function(){
    it('should return correct number of values in storage', function() {
      stack.add('string5');
      expect(stack.size()).to.equal(1);
      stack.add('string6');
      stack.add('string7');
      expect(stack.size()).to.equal(3);
      stack.remove();
      expect(stack.size()).to.equal(2);
    });
    it('should not change size when error is thrown', function(){
      try {
        stack.remove();
      } catch (e) {}
      expect(stack.size()).to.equal(0);
    });

  });

  // Hey! Add more tests here to test the functionality of stack
});
