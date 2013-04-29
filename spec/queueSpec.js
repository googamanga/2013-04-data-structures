describe("queue", function() {
  var queue;

  // Before each test runs, create a new Queue
  beforeEach(function() {
    if (runner.is('src/functional') || runner.is('src/functional-shared')) {
      queue = makeQueue();
    } else if (runner.is('src/prototypal')) {
      queue = Queue();
    } else if (runner.is('src/pseudoclassical')) {
      queue = new Queue();
    }
  });
  // Any queue implementation should have the following methods
  it('should have "enqeue", "dequeue", and "size" methods', function() {
    expect(queue.enqueue).to.be.a('function');
    expect(queue.dequeue).to.be.a('function');
    expect(queue.size).to.be.a('function');
  });

  // Organize your tests with nested describe() statements
  // Use '#methodName()' to denote tests that focus on a certain method
  describe('#enqueue()', function() {
    it('should take one argument', function() {
      // Make sure add() takes a single argument using (see http://mdn.io/Function.length)
      expect(queue.enqueue.length).to.equal(1);
    });
    it('should increase the size by one', function() {
      var size = queue.size();
      queue.enqueue('string');
      expect(queue.size()).to.equal(size+1);
    });
    it('should return enqueued values', function() {
      expect(queue.enqueue("string")).to.equal("string");
    });
  });
  describe('#dequeue()', function() {
    it('should take away one argument', function() {
      queue.enqueue('string');
      var size = queue.size();
      queue.dequeue();
      expect(queue.size()).to.equal(size-1);
    });
    it('should throw an error if size is 0', function() {
      expect(function(){queue.dequeue()}).to.throw();
    });
    it('should return dequeued strings in FIFO order', function() {
      queue.enqueue('string');
      queue.enqueue('string1');
      queue.enqueue('string2');
      expect(queue.dequeue()).to.equal('string');
      expect(queue.dequeue()).to.equal('string1');
    });
  });
  describe('#size()', function() {
    it('should return the total number of stored objects', function() {
      queue.enqueue('string');
      queue.enqueue('string1');
      queue.dequeue();
      expect(queue.size()).to.equal(1);
    });
  });

  // Hey! Add more tests here to test the functionality of queue
});