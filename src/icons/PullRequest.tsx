import * as React from 'react';
import { IconProps } from '../types';
import { IconWrapper } from '../IconWrapper';

export const PullRequest = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      icon={
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.354 1.354L7.707 2H8.5A2.5 2.5 0 0111 4.5v5.585a1.5 1.5 0 11-1 0V4.5A1.5 1.5 0 008.5 3h-.793l.647.646a.5.5 0 11-.708.708l-1.5-1.5a.5.5 0 010-.708l1.5-1.5a.5.5 0 11.708.708zM11 11.5a.5.5 0 11-1 0 .5.5 0 011 0zM4 3.915a1.5 1.5 0 10-1 0v6.17a1.5 1.5 0 101 0v-6.17zM3.5 11a.5.5 0 100 1 .5.5 0 000-1zm0-8a.5.5 0 100-1 .5.5 0 000 1z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default PullRequest;
