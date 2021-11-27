const skills = [
    {id: 125223, skill: 'Javascript', done: true},
    {id: 127904, skill: 'HTML', done: true},
    {id: 139605, skill: 'Express', done: true},
    {id: 139604, skill: 'SQL', done: false},
    {id: 139603, skill: 'CSS', done: true},
    {id: 139602, skill: 'Node.js', done: true},
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
  };
  
  function getAll() {
    return skills;
  }

  function getOne(id){
    return skills.find(skill => skill.id === parseInt(id));
  }

  function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
  }

  function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
  }
