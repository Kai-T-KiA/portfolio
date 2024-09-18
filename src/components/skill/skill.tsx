import React from 'react';
import Slider from 'react-slick';
import './skill.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


// スキルデータの型定義
interface SkillItem {
  name: string;
  image: string;
  description: string;
}


const Skill: React.FC = () => {
  // スキルデータの配列
  const skills: SkillItem[] = [
    {
      name: "HTML",
      image: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000", 
      description: "自作Webアプリの作成に使用"
    },
    {
      name: "CSS",
      image: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000", 
      description: "自作Webアプリの作成に使用。"
    },
    {
      name: "JavaScript",
      image: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000", 
      description: "自作Webアプリの作成に使用。勉強中。"
    },
    {
      name: "PHP",
      image: "https://img.icons8.com/?size=100&id=ylXrZF2zxsFE&format=png&color=000000",
      description: "自作Webアプリの作成に使用。"
    },
    {
      name: "Laravel",
      image: "img/laravel-logo.png",
      description: "自作Webアプリの作成に使用。勉強中。"
    },
    {
      name: "AWS",
      image: "https://img.icons8.com/?size=100&id=33039&format=png&color=000000",
      description: "自作Webアプリの作成に使用。勉強中。"
    },
    {
      name: "Google Cloud Platform",
      image: "https://img.icons8.com/?size=100&id=WHRLQdbEXQ16&format=png&color=000000",
      description: "自作WebアプリでAPIを使用。"
    },
    {
      name: "MariaDB",
      image: "https://img.icons8.com/?size=100&id=nrY6pkbRkJCi&format=png&color=000000",
      description: "自作Webアプリのデータベースで使用。"
    },
    {
      name: "Heroku",
      image: "https://img.icons8.com/?size=100&id=31085&format=png&color=000000",
      description: "自作Webアプリのデプロイに使用。"
    },
    {
      name: "Python",
      image: "https://img.icons8.com/?size=100&id=13441&format=png&color=000000",
      description: "大学院での講義・研究で使用。"
    },
    {
      name: "React",
      image: "logo192.png",
      description: "本ページの作成、インターンシップで使用。"
    },
    {
      name: "TypeScript",
      image: "https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000",
      description: "本ページの作成、インターンシップで使用。"
    },
    {
      name: "Docker",
      image: "https://img.icons8.com/?size=100&id=cdYUlRaag9G9&format=png&color=000000",
      description: "本ページの作成、研究での環境構築に使用。"
    },
    {
      name: "Java",
      image: "https://img.icons8.com/?size=100&id=13679&format=png&color=000000",
      description: "大学在学時に講義で2年半使用。"
    },
  ];

  

  // スライダーの設定
  const settings = {
    dots: true, // 下にインジケーター（ドット）を表示するか
    infinite: true, // 無限ループさせるか
    speed: 500, // スライドの切り替え速度
    slidesToShow: 1, // 画面に表示するスライドの数
    slidesToScroll: 1, // スライドの移動数
    autoplay: true, // 自動再生するか
    autoplaySpeed: 3000 // 自動再生のスピード
  };

  return (
    <div className="skill-container">
      <h2>My Skills</h2>
      <Slider {...settings}>
        {skills.map((skill, index) => (
          <div key={index} className="skill-slide">
            <img src={skill.image} alt={skill.name} className="skill-image" />
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Skill;