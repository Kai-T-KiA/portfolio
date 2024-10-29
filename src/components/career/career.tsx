import React from 'react';
import './career.css';

// Career項目の型定義
interface CareerItem {
  year: string;
  title: string;
}

interface InternshipItem {
  year: string;
  company: string;
  description: string;
}

const Career: React.FC = () => {
  // 経歴データを定義
  const careerData: CareerItem[] = [
    { year: "2016年4月-2019年3月", title: "兵庫県立西宮高等学校 普通科" },
    { year: "2020年4月-2024年3月", title: "近畿大学理工学部情報学科" },
    { year: "2024年4月-現在", title: "立教大学大学院人工知能科学研究科人工知能科学専攻" }
  ];

  // インターンシップデータ
  const internshipData: InternshipItem[] = [
    { year: "2024年5月", company: "RIZAPグループ株式会社", description: "3days、チームでのLP作成" },
    { year: "2024年6月", company: "株式会社ビーネックスソリューションズ", description: "1days、エンジニア仕事体験" },
    { year: "2024年7月", company: "株式会社GA technologies", description: "1day、GIANT LEAP for TECH" },
    { year: "2024年8月", company: "株式会社アウトソーシングテクノロジー", description: "3days、チームでの上流工程作業" },
    { year: "2024年8月", company: "株式会社フェンリル", description: "5days、未完成アプリのコード改修とバグの修正" },
    { year: "2024年9月", company: "ビジョナル株式会社", description: "5days、エンジニアとデザイナー合同での新規サービス立案" },
    { year: "2024年10月", company: "株式会社マイナビ", description: "2days、クラウドエンジニア体験プログラム（AWSでのサーバー構築体験）" },
    { year: "2024年10月", company: "town株式会社", description: "6days、AWSでのサーバー構築" },
  ];

  return (
    <div id="career" className="career-container">
      <h2>経歴</h2>
      <ul>
        {careerData.map((item, index) => (
          <li key={index} className="career-item">
            <span className="career-year">{item.year}</span>
            <span className="career-title">{item.title}</span>
          </li>
        ))}
      </ul>

      <h2>インターンシップ(参加済み)</h2>
      <ul>
        {internshipData.map((item, index) => (
          <li key={index} className="internship-item">
            <span className="internship-year">{item.year}</span>
            <span className="internship-company">{item.company}</span> ー
            <span className="internship-description">{item.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Career;