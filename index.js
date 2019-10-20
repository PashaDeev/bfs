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

const getChildren = ({ left, right }) => {
  const chd = [];
  if (left) {
    chd.push(left);
  }

  if (right) {
    chd.push(right);
  }

  return chd;
};

const dfs = tree => {
  const queue = [];

  const children = getChildren(tree);

  queue.push(...children);

  while (queue.length) {
    const child = queue.shift();
    console.log(`-------------------------`);
    console.log(`name in`, child.name);
    console.log(`-------------------------`);

    const newChildren = getChildren(child);
    queue.push(...newChildren)
  }
};

const path = dfs(tree);
