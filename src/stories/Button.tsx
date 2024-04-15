import React from 'react';
import './button.css';

interface ButtonProps {
  /**
   * 페이지에 중요한 버튼이라면 primary prop을 전달합니다.
   */
  primary?: boolean;
  /**
   * 배경색을 설정합니다.
   */
  backgroundColor?: string;
  /**
   * 크기를 설정합니다.
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * 버튼의 텍스트를 지정합니다.
   */
  label: string;
  /**
   * 클릭 핸들러를 선택적으로 제공할 수 있습니다.
   */
  onClick?: () => void;
}

/**
 * 유저와 인터랙션하기 위한 버튼 컴포넌트입니다.
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(
        ' '
      )}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
