// CustomCard.tsx
import React from 'react';
import './CustomCard.css';
import { Button } from 'antd';
import { GithubOutlined } from '@ant-design/icons';


interface CustomCardProps {
    title: string;
    content: string;
    link: string;
}

export const CustomCard = ({ title, content, link }: CustomCardProps) => {
    return (
        <div className="ag-format-container">
            <div className="ag-courses_box">
                <div className="ag-courses_item">
                    <a href={link} target="_blank" rel="noopener noreferrer"className="ag-courses-item_link">
                        <div className="ag-courses-item_bg"></div>

                        <div className="ag-courses-item_title">
                            {title}                        </div>

                        <div className="ag-courses-item_content">
                            {content}

                        </div>
                    </a>
                </div>

            </div >
        </div >
    );
};
