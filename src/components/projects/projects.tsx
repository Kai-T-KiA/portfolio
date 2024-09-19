import React from 'react';
import './projects.css';

// プロジェクトデータの型定義
interface Project {
  title: string;
  description: string;
  image: string;
  githubLink: string; // GitHubリンク
  deployLink: string; // デプロイ先リンク
}


const Projects: React.FC = () => {
  // プロジェクトデータの配列
  const projects: Project[] = [
    {
      title: "CafeChargeFinder",
      description: "コンセントのあるカフェを探すアプリです。テストユーザーなどの情報はGithubをご確認ください。",
      image: "img/Cafe charge finder2.png",
      githubLink: "https://github.com/Kai-T-KiA/CafeChargeFinder",
      deployLink: "https://myapp1-ccf-6e668bad6da2.herokuapp.com/"
    },
    // 追加のプロジェクトデータをここに追加
  ];

  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-links">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                View on GitHub
              </a>
              <a href={project.deployLink} target="_blank" rel="noopener noreferrer" className="project-link">
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;