const tree = {
  name: 1,
  left: {
    name: 2,
    left: {
      name: 4,
      left: {
        name: 8
      }
    },
    right: {
      name: 5
    }
  },
  right: {
    name: 3,
    left: {
      name: 6
    }
  }
};

const LEFT = "left";
const RIGHT = "right";


const dfs = tree => {
  const queue = [];

  console.log('name in', tree.name)

  if (tree.left) {
    queue.push(tree.left);
  }
  if (tree.right) {
    queue.push(tree.right);
  }

  while (queue.length) {
    const child = queue.shift();
    console.log(`-------------------------`);
    console.log(`name in`, child.name);
    console.log(`-------------------------`);

    if (child.left) {
      queue.push(child.left);
    }
    if (child.right) {
      queue.push(child.right);
    }
  }
};

const path = dfs(tree);
