import React from 'react';
import './about.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <img src="/docs/img/78238.jpg" alt="プロフィール写真" className="profile-pic" />
        <div className="info">
          <h2 className="name">名前: 竹内 快</h2>
          <p className="age">年齢: 24歳</p>
          <p className="affiliation">所属: 立教大学大学院 人工知能科学研究科 人工知能科学専攻</p>
          <p className="hobbies">趣味: ゲーム（原神）、漫画を読むこと</p>
          <p className="effort">最近の取り組み: 自主制作アプリの改修、競技プログラミング、モダンな技術の習得</p>
        </div>
      </div>
    </section>
  );
};

export default About;
