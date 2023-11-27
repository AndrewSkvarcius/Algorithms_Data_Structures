function findSurvivor(numPeople, skip) {
    let queue = [];
  
    // Enqueue all people
    for (let i = 1; i <= numPeople; i++) {
      queue.push(i);
    }
  
    while (queue.length > 1) {
      for (let i = 1; i < skip; i++) {
        // Dequeue and immediately re-enqueue skip - 1 people
        queue.push(queue.shift());
      }
      // Dequeue one person permanently
      queue.shift();
    }
  
    // The last remaining person is the survivor
    return queue[0];
  }
  
  console.log(findSurvivor(10, 3)); // 4

  