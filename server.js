const rclnodejs = require('rclnodejs');
const execSync = require('child_process').execSync;

rclnodejs.init().then(() =>
{
  const node = rclnodejs.createNode('turtlebot_api');

  const timer = node.createTimer(1000, () =>
  {
    const data = get_node_list();
    console.log(data);
  });

  rclnodejs.spin(node);
});

//
// get_node_list
//
// : get nodes and return nodes for array
function get_node_list()
{
  const output = execSync('ros2 node list').toString().split('\n');
  return output.slice(0, output.length-1).filter(node => node !== '/turtlebot_api');
};


