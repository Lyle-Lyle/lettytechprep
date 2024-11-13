import React from 'react';
import './index.css';

/**
 * 全局底部栏组件 纯静态可以服务端渲染
 * @constructor
 */
export default function GlobalFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <div className='global-footer'>
      <div>© {currentYear} lettytechprep</div>
      <div>
        <a href='https://github.com/Lyle-Lyle/lettytechprep' target='_blank'>
          Author - Lyle
        </a>
      </div>
    </div>
  );
}
