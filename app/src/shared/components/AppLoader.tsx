/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import React from 'react';
import {DotLoader} from "react-spinners";
import {primaryColor} from "@app/layout/config";

export const AppLoader = () => {
  return (
  <div css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
  `}>
        <DotLoader color={primaryColor}></DotLoader>
    </div>
  );
};
