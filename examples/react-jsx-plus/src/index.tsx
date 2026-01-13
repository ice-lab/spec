import React, { useState } from 'react';

// 用于测试 jsx-plus 规则的 React 组件
const JsxPlusDemo: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>('John');
  const [showDetails, setShowDetails] = useState<boolean>(true);

  // JSX 中的复杂表达式测试
  const items: string[] = ['apple', 'banana', 'cherry'];
  const users = [
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'john@example.com' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane@example.com' },
    { id: 3, firstName: 'Bob', lastName: 'Johnson', email: 'bob@example.com' }
  ];

  const memoValue = React.useMemo(() => {
    return `Memoized value at ${Date.now()}`;
  }, []);

  // jsx-plus 规则测试，使用 jsx-plus 特定语法
  return (
    <div x-class="container" x-memo={memoValue}>
      <h1 data-testid="title" x-class="title">JSX-Plus Demo</h1>

      {/* 使用 x-if 指令进行条件渲染 */}
      <div x-if={showDetails} x-class="user-info">
        <p>Hello, {name}!</p>
        <p>Count: {count}</p>
        <button
          onClick={() => setCount(count + 1)}
          className="btn btn-primary"
          type="button"
          disabled={count > 10}
        >
          Increment
        </button>
        <button
          onClick={() => setName('Jane')}
          className="btn btn-secondary"
          type="button"
        >
          Change Name
        </button>
      </div>

      {/* 使用 x-else 指令 */}
      <div x-else x-class="user-info-hidden">
        <p>Details are hidden</p>
      </div>

      {/* 切换按钮 */}
      <button onClick={() => setShowDetails(!showDetails)} className="toggle-btn">
        Toggle Details
      </button>

      {/* 使用 x-for 指令遍历数组 */}
      <div x-for={(user, index) in users} x-class="user-card">
        <h3 x-class={(index % 2 === 0) ? 'even-user' : 'odd-user'}>User {user.firstName} {user.lastName}</h3>
        <p x-if={index === 0} x-class="first-user">First user special message!</p>
        <p x-elseif={index === 1} x-class="second-user">Second user message!</p>
        <p x-else x-class="other-user">Regular user message</p>
        <p>Email: {user.email}</p>
      </div>

      {/* 测试 eslint */}
      <div x-else>
        none
      </div>

      {/* 使用 x-slot 指令 */}
      <div x-slot:header="header-slot" x-class="header-section">
        <h2>This is a header slot</h2>
      </div>

      <div x-slot:footer="footer-slot" x-class="footer-section">
        <p>This is a footer slot</p>
      </div>

      {/* 使用 x-if 和 x-for 组合 */}
      <ul x-class="filtered-items">
        {items.map((item, index) => (
          <li x-if={item.length > 5} key={item} className={`item item-${index}`}>
            {item}
          </li>
        ))}
      </ul>

      {/* 嵌套使用 jsx-plus 指令 */}
      <div x-if={count > 0} x-class="nested-section">
        <div x-for={(item, idx) in items.slice(0, count % items.length + 1)} x-class={`nested-item-${idx}`}>
          <p x-if={idx % 2 === 0} x-class="even-nested-item">{item}</p>
          <p x-else x-class="odd-nested-item">{item.toUpperCase()}</p>
        </div>
      </div>

      {/* 使用 x-memo 指令 */}
      <div x-memo={name} x-class="memo-section">
        Current name: {name}
      </div>

      {/* 使用 x-class 传递动态类名 */}
      <div x-class={`status-indicator ${count > 5 ? 'high' : 'low'}`}
           data-status={count > 5 ? 'high' : 'low'}>
        Status indicator with x-class directive
      </div>

      {/* 综合测试 jsx-plus 指令与其他属性的交互 */}
      <div x-if x-for={(user, index) in users} x-class={`user-item user-${index}`}>
        <span x-if={user.firstName.length > 3} x-class="long-name">Long Name: {user.firstName}</span>
        <span x-else x-class="short-name">Short Name: {user.firstName}</span>
      </div>
    </div>
  );
};

export default JsxPlusDemo;