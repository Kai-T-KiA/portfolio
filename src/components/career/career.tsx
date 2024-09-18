import React from 'react';
import './career.css';

// Career項目の型定義
interface CareerItem {
  year: string;
  title: string;
}

const Career: React.FC = () => {
  // 経歴データを定義
  const careerData: CareerItem[] = [
    { year: "2016年4月-2019年3月", title: "兵庫県立西宮高等学校 普通科" },
    { year: "2020年4月-2024年3月", title: "近畿大学理工学部情報学科" },
    { year: "2024年4月-現在", title: "立教大学大学院人工知能科学研究科人工知能科学専攻" }
  ];
  return (
    <div className="career-container">
      <h2>経歴</h2>
      <ul>
        {careerData.map((item, index) => (
          <li key={index} className="career-item">
            <span className="career-year">{item.year}</span>
            <span className="career-title">{item.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Career;