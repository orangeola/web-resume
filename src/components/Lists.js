import '../styles/Lists.css'

function Lists() {
  const frontend = ['html', 'css', 'javascript', 'pug', 'react', 'webpack'];
  const frontendLoop = frontend.map((tech) => <p key={tech}>{tech}</p>);

  const backend = ['nodejs', 'express', 'passport', 'firebase', 'bcrypt', 'mongoose', 'mongodb'];
  const backendLoop = backend.map((tech) => <p key={tech}>{tech}</p>);

  const misc = ['npm', 'jest', 'git', 'sourcetree', 'github', 'bitbucket', 'c#', 'c++', 'python', 'unity', ];
  const miscLoop = misc.map((tech) => <p key={tech}>{tech}</p>);

  return (
    <div className="Lists">
      <div className="frontend">
        <h2>frontend</h2>
        {frontendLoop}
      </div>
      <div className="misc">
        <h2>misc</h2>
        {miscLoop}
      </div>
      <div className="backend">
        <h2>backend</h2>
        {backendLoop}
      </div>
    </div>
  );
}

export default Lists;
